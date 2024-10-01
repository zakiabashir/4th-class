import City from "@/app/components/city";
export default function Bangladesh(){
    const country_name="Bangladesh"
    const population=123456;
    const capital="jnhbrgfvcdxsz"
    return(
<>
       <City country_name={country_name}  population={population} capital={capital}/>
        </>  
    )
}