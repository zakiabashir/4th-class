import Link from "next/link";

export default function Page() {
    return (
        <><div className="mt-8">
                <Link href="/about">About us</Link>&nbsp;|&nbsp;&nbsp;
                <Link href="/contact">Contact us</Link>&nbsp;|&nbsp;&nbsp;
                </div>
        </>
       
    );
}