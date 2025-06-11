import Link from "next/link";

const MadeWith = () => {
  return (
    <div className="fixed bottom-2 right-4 z-[75] rounded py-1 px-2 bg-white border border-zinc-300 text-black text-xs shadow">
      <p>
        Built by me with{" "}
        <Link href="https://react-pdf.org" className="text-link font-semibold" target="_blank">
          react-pdf
        </Link>{" "}
        and{" "}
        <Link href="https://nocodb.com" className="text-link font-semibold" target="_blank">
          NocoDB
        </Link> {" "}
        ♥️
      </p>
    </div>
  );
};

export default MadeWith;
