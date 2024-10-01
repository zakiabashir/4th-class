import City from "@/app/components/city";
export default function Pakistan({params}:{params:{country_name:string, population:number, capital:string}}){
    const country_name="pakistan"
    const population=123456;
    const capital="Islamabad"
    return(
<>
       <City country_name={country_name}  population={population} capital={capital}/>
        </>  
    )
}