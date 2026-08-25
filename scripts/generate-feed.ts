import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { BLOGS } from "../app/blog/blogs";

const SITE = "https://abhay.app";
const BUILD_DIR = join(process.cwd(), ".next", "server", "app", "blog");
const OUTPUT = join(process.cwd(), "public", "feed.xml");

const extractContent = (html: string, slug: string): string => {
  const markerCount = (html.match(/class="blog"/g) || []).length;
  if (markerCount !== 1) {
    throw new Error(
      `Expected exactly one <section class="blog"> in ${slug}.html, found ${markerCount}`,
    );
  }

  const open = '<section class="blog">';
  const start = html.indexOf(open);
  if (start === -1) {
    throw new Error(`Could not find <section class="blog"> in ${slug}.html`);
  }

  let pos = start + open.length;
  let depth = 1;
  while (depth > 0) {
    const nextOpen = html.indexOf("<section", pos);
    const nextClose = html.indexOf("</section>", pos);
    if (nextClose === -1) {
      throw new Error(`Unbalanced <section> tags in ${slug}.html`);
    }
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth += 1;
      pos = nextOpen + "<section".length;
    } else {
      depth -= 1;
      pos = nextClose + "</section>".length;
    }
  }

  const end = pos - "</section>".length;
  return html.slice(start + open.length, end);
};

const rewriteUrls = (html: string): string => {
  let result = html.replace(
    /\/_next\/image\?url=([^"&]+)(?:&[^"]*)?/g,
    (_match, url) => `${SITE}${decodeURIComponent(url)}`,
  );
  result = result.replace(/(src|href)="\/(?!\/)/g, `$1="${SITE}/`);
  return result;
};

const toRfc822 = (prefix: string): string => {
  const match = prefix.match(/\w+\s\d{1,2},\s\d{4}/);
  const date = match ? new Date(match[0]) : new Date();
  return date.toUTCString();
};

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const items = BLOGS.filter(({ target }) => !target)
  .map(({ title, link, prefix }) => {
    const slug = link.replace(/^\/blog\//, "");
    const html = readFileSync(join(BUILD_DIR, `${slug}.html`), "utf8");
    const content = rewriteUrls(extractContent(html, slug));
    const url = `${SITE}${link}`;

    return [
      "    <item>",
      `      <title>${escapeXml(title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${toRfc822(prefix)}</pubDate>`,
      `      <content:encoded><![CDATA[${content}]]></content:encoded>`,
      "    </item>",
    ].join("\n");
  })
  .join("\n");

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Abhay's blog</title>
    <link>${SITE}/blog</link>
    <description>Blogs by Abhay V Ashokan</description>
    <language>en</language>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

writeFileSync(OUTPUT, feed);
console.log(`Generated ${OUTPUT}`);
