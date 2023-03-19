// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// // import { parse } from 'path'
// // import { title } from 'process'
// import prisma from '../../lib/prisma'

// type postProps = {
//   title: string
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//     if(req.method === "POST"){
//    console.log("post")
        
//         const post: postProps = await JSON.parse(req.body)
        
//             // check for title
//             if(!post.title.length){
//                 return res
//                 .status(500)
//                 .json({message: "Pleae do not leave this empty."})
//             }
//             try{
//                 const data = await prisma.post.create({
//                     data: {
//                         title: post.title,
//                     },
//                 })
//                 res.status(200).json(data)
//             }catch(error){
//                 return res.status(500).json({message: "Error creating a post."})
//             }
//         }
//         //get prisma to fetch the posts
  
// }



// POST /api/post
// Required fields in body: title
// Optional fields in body: content
// export default async function handle(req: NextApiRequest, res: NextApiResponse) {
//     const { title } = req.body;
//     console.log(title)
// //   const post: postProps = await JSON.parse(req.body)

//   const result = await prisma.post.create({
//     data: {
//       title: title,
//       content: "kgjhgjl"
//     },
//   });
//   res.json(result);
// }