
import prisma from "../lib/prisma"
import { GetStaticProps } from "next"

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: {
//       published: true,
//     }
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };

async function getPosts() {
  const response = await fetch(`${process.env.BASE_URL}/api/hello`, {

  })
  
  if(!response.ok){
    throw new Error('Failed to fetch data')
  }
  const res = response.json()
  return res
}

export default async function Home() {

  const data = await getPosts()
  console.log(data + "ddddddddddddddddddddddddddddddddddddd")
  return (
    <main className="py-8 px-48">

      {/* @ts-expect-error Async Server Component */}
       {data.map((post )=> (
        <h1 className="text-lg py-6" key={post.id}>
          {post.title}
          </h1>
       ))}
    </main>
  )
}

