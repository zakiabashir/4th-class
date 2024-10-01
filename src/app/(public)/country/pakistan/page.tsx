import City from "@/app/components/city";
export default function Pakistan(){
    const country_name="pakistan"
    const population=123456;
    const capital="Islamabad"
    return(
<>
       <City country_name={country_name}  population={population} capital={capital}/>
        </>  
    )
}