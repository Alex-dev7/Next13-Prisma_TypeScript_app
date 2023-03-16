
import FormPost from "./Form"

async function getPosts() {
  const response = await fetch(`${process.env.BASE_URL}/api/getPosts`)

  if(!response.ok){
    console.log(response)
  }
  return response.json()
}

export default async function Home() {
  const data: {id: number, title: string}[] = await getPosts()
  console.log(data)
  return (
    <main className="py-8 px-48">

       <FormPost/>
       {data.map((post )=> (
        <h1 className="text-lg py-6" key={post.id}>
          {post.title}
          </h1>
       ))}
    </main>
  )
}
