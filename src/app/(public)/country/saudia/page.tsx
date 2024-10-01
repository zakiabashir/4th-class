import City from "@/app/components/city";
export default function Saudia({params}:{params:{country_name:string, population:number, capital:string}}){
    const country_name="Saudia_Arabia"
    const population=123456;
    const capital="dfghjjk"
    return(
<>
       <City country_name={country_name}  population={population} capital={capital}/>
        </>  
    )
}