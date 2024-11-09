import Link from "next/link";
 export default function Navbar() {
     return (
         < >
         <div className="flex flex-wrap">
         <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
         <Link href="/country">Country</Link>&nbsp;|&nbsp;&nbsp;
         <Link href="/login">Login</Link>&nbsp;|&nbsp;&nbsp;         </div>
        </>
    );
}

