import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/about">About us</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/contact">Contact us</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>
        </>
       
    );
}