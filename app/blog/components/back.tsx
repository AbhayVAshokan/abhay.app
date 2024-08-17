import Link from "next/link";

const Back = () => (
  <Link href="/blog" className="text-sm text-zinc-400 flex items-center">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="#49545C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p>blogs</p>
  </Link>
);

export default Back;