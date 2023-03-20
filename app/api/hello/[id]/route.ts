import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { redirect } from 'next/navigation';

// SHOW BY ID

export async function GET(request: Request, { params }: any) {

    const data = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id),
        }
      });
      console.log(data);
      
    return  NextResponse.json(data)
  }

// DELETE BY ID
  export async function DELETE(request: Request, { params }: any) {

    const data = await prisma.post.delete({
        where: {
            id: parseInt(params.id),
        }
      });
      console.log(data, "this data was deleted successfully");
      

        return  NextResponse.json(data)
  } 
 

// UPDATE BY ID
  export async function PUT(request: Request, { params }: any) {

    const body = await request.json();

    const data = await prisma.post.update({
        where: {
            id: parseInt(params.id),
        },
        data: {
            title: body.title,
            content: body.content,
            published: body.published,
        }
      });
      console.log(data);

    return  NextResponse.json({data})
  } 
