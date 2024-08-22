/* eslint-disable @next/next/no-img-element */

interface TemplateProps {
  title: string | null;
  subtitle: string | null;
}

const Template = ({ title, subtitle }: TemplateProps) => {
  return (
    <div tw="relative flex gap-4 justify-between items-end py-10 px-10 bg-[#08090a] text-[#f7f8f8] h-full w-full">
      <p tw="absolute top-4 left-4 border border-zinc-400 text-zinc-400 p-2">AB</p>
      <div tw="flex flex-col w-[400px]">
        <h1 tw="text-4xl leading-7 mb-4">{title}</h1>
        <h2 tw="text-zinc-400 text-sm mb-0">{subtitle}</h2>
      </div>
      <img
        src="http://github.com/AbhayVAshokan.png"
        alt="Abhay V Ashokan"
        width={150}
      />
    </div>
  );
};

export default Template;
