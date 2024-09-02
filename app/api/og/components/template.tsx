/* eslint-disable @next/next/no-img-element */
interface TemplateProps {
  title: string | null;
  subtitle: string | null;
}

const Template = ({ title, subtitle }: TemplateProps) => {
  return (
    <div tw="relative flex justify-between items-end py-16 px-10 bg-[#08090a] text-[#f7f8f8] h-full w-full">
      <img height={100} width={100} src="https://ik.imagekit.io/a6t22upil/tr:h-100/Portfolio/logo.png" alt="Logo" tw="absolute top-4 left-4 p-2" />
      <div tw="flex flex-col w-[400px]">
        <h1 tw="text-4xl leading-7 mb-4">{title}</h1>
        <h2 tw="text-zinc-400 text-sm mb-0">{subtitle}</h2>
      </div>
      <img
        src="https://ik.imagekit.io/a6t22upil/tr:h-300/Portfolio/abhay.png"
        alt="Abhay V Ashokan"
        width={150}
      />
    </div>
  );
};

export default Template;
