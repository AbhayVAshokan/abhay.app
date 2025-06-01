import MadeWith from "./components/made-with";

const ResumeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className='fixed top-0 left-0 h-full w-full z-[70]'>
    {children}
    <MadeWith />
  </main>
}

export default ResumeLayout;
