'use client'
import { useRouter } from "next/navigation";



export default function Delete({id}: any){
// console.log(id)

  const router = useRouter()

   async function deletePost(){
        await fetch(`/api/hello/${id}`, {
            method: "DELETE",
          })

          router.refresh()    
    }
    
    return (
        <button onClick={async () => deletePost()}>
            delete
        </button>
    )
}