// 'use client'
import Link from "next/link"
import Delete from "./Delete";


async function getData() {

    const res = await fetch(`${process.env.BASE_URL}/api/hello`, { cache: "no-cache" });
   
    const response  = await res.json();
    // console.log(response)
  
    return response
   
}




export default async function Home() {

 const posts = await getData()
 
    
  return (
    <>

    <main className="py-8 px-48">
     
      {/* @ts-expect-error Async Server Component */}
       {posts.map((post )=> (
        <div  key={post.id}>
        <Link  href={{pathname: `/post/${post.id}`}} className="text-lg py-6">
          {post.title}
        </Link>
       
          {/* <form onSubmit={handleSubmit}>
            <input type="submit" value="delete" />
          </form> */}
          <Delete id={post.id} />     
        <br/>        
        </div>

       ))}
    </main>    
    
    </>

  )
}

