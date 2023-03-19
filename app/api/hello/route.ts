import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { redirect } from 'next/navigation';

type postProps = {
    title: string,
}



// GET ALL

export async function GET(request: Request){

    const data = await prisma.post.findMany({
        where: {
          published: true,
        }
      });
      console.log(data);

    return  NextResponse.json({data})
}



// POST 

export async function POST(request: Request){
    // const posts: postProps = request.body
    const body = await request.json();
    // console.log(request);
    const data = await prisma.post.create(
        {
        data: {
       title: body.title,
       content: body.content,
       published: true,
                            },
                        }
    )
      console.log(data);

    return  NextResponse.json({data})
}