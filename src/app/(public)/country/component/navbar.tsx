import Link from "next/link"

export default function Navbar(){
    return(
<>
        
        
                
                <Link href="/country/pakistan">pakistan</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
           <Link  href="/country/india">india</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link  href="/country/bangladesh">Bangladesh</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link  href="/country/saudia">saudia</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<br /><br />
            <h1>welcome to country page</h1>
        
        </>  
    )
}