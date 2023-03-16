// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { parse } from 'path'
// import { title } from 'process'
import prisma from '../../prisma/client'

type postProps = {
  title: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    try{
        
        const post: postProps = JSON.parse(req.body)
        if(req.body === "POST"){
            // check for title
            if(!post.title.length){
                return res
                .status(500)
                .json({message: "Pleae do not leave this empty."})
            }
            try{
                const data = await prisma.post.create({
                    data: {
                        title: post.title,
                    },
                })
                res.status(200).json(data)
            }catch(error){
                return res.status(500).json({message: "Error creating a post."})
            }
        }
        //get prisma to fetch the posts

    }catch(error){
        return res.status(500).json(error)
    }
  
}