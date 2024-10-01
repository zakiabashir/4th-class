import City from "@/app/components/city";
export default function India({params}:{params:{country_name:string, population:number, capital:string}}){
    const country_name="India"
    const population=123456;
    const capital="Dhaka"
    return(
<>
       <City country_name={country_name}  population={population} capital={capital}/>
        </>  
    )
}