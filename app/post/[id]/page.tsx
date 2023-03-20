import { NextRequest } from "next/server"



async function getPost(id: number) {
    console.log(id, "the id")
    const res = await fetch(`${process.env.BASE_URL}/api/hello/${id}`);
   
    const response  = await res.json();
    // console.log(response + "--------------------------------")
  
    return response
   
}

export default async function Post({params}: any){

    const id = params.id
    const post = await  getPost(id)

    console.log(post)
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post?.content}</p>
        </div>
    )
}