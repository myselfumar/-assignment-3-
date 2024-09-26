
'use client'
import { useRouter } from 'next/navigation';

export default function Home () {
    const route = useRouter()
    return (
        <>
        <h1>homepage</h1>

     <button onClick={()=> route.push("/navbar")}>go to navbar</button> 
        </>
    );
}