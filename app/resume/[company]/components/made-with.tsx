import Link from "next/link";

const MadeWith = () => {
  return <div className="fixed bottom-2 right-2 z-[75] rounded px-1 bg-white border border-zinc-200 text-black text-xs shadow">
    <p>
      Built by me with <Link href="https://react-pdf.org" className="text-link font-semibold">react-pdf</Link> and <Link href="https://nocodb.com" className="text-link font-semibold">NocoDB</Link>
    </p>
  </div>
}

export default MadeWith;
