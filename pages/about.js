import Link from "next/link"
export default function About(){
    return(
        <>
            <h1>Página de About</h1>
            <Link href="/">
                <p>Voltar para home</p>
            </Link>
        </>
    ) 
}