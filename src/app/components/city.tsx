export default function City(props:{country_name:string, capital:string, population:number;}){
    console.log(props)
    return(
        <>
        <h1>country_name:  {props.country_name} </h1>
        <h1>capital:  {props.capital} </h1>
        <h1>population: {props.population} </h1>
        </>
    )
}