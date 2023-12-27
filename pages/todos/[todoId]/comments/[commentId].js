import { useRouter } from "next/router";
import Link from "next/link";

export default function Comment(){
    const router = useRouter()

    const todoId = router.query.todoId
    const commentId = router.query.commentId

    return(
        <>
            <Link href={`/todo/${todoId}`}>
                Voltar
            </Link>
            <h1>Exibindo o comentário número: {commentId}</h1>
            <p>Do Todo: {todoId}</p>
        </>
    )
    
}