import City from "@/app/components/city";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function Bangladesh(){
    const country_name="Bangladesh"
    const population=123456;
    const capital="jnhbrgfvcdxsz"
    return (
        <>
            <City country_name={""} capital={""} population={0} />
            <Card className='grid p-8 m-8 bg-gradient-to-br from-red-900 via-gray-900 to-teal-900'>
                <div className='grid justify-center text-red-900 z-50 bottom-0 bg-gradient-to-br from-red-400 via-gray-400 to-teal-400'>
                    <CardHeader className="p-4">
                        <CardTitle className="p-2 text-center bg-gradient-to-br from-red-400 via-gray-400 to-teal-400">
                            <h1 className="text-2xl">{country_name}</h1>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4 mb-4 bg-gradient-to-br from-red-300 via-gray-300 to-teal-300">
                        <p className="p-2"><strong>Population:</strong> {population}</p>
                        <p><strong>Capital:</strong> {capital}</p>
                    </CardContent>
                </div>
            </Card>
        </>
    );
}