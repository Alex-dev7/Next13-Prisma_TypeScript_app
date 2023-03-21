'use client'
import { useRouter } from "next/navigation"




export default function UpdateForm({id, title, content}: any){

    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const form = e.currentTarget
        const titleInput = form.elements.namedItem("title") as HTMLInputElement
        const contentInput = form.elements.namedItem("content") as HTMLInputElement
    
        console.log(titleInput.value, contentInput.value)
        
    const res = await fetch(`/api/hello/${id}`,{
        method: 'PUT',
        body: JSON.stringify({title: titleInput.value, content: contentInput.value})
    })
    const response = await res.json()
    router.refresh()

    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" defaultValue={title} />
            <input type="text" name="content" defaultValue={content} />
            <button type="submit" >update</button> 
        </form>
    
    </>)
}