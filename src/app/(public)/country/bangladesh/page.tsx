import City from "@/app/components/city";
export default function Bangladesh({params}:{params:{country_name:string, population:number, capital:string}}){
    const country_name="Bangladesh"
    const population=123456;
    const capital="jnhbrgfvcdxsz"
    return(
<>
       <City country_name={country_name}  population={population} capital={capital}/>
        </>  
    )
}