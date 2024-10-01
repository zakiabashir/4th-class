
import City from "@/app/components/city"

export default function CountryName({params}:{params:{country_name:string, population:number, capital:string}}){
    const population=123456;
    const capital="dfghjnmk"
    return(
<>
        
        

       <City country_name={params.country_name}  population={population} capital={capital}/>
        </>  
    )
}