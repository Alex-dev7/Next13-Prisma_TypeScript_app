import prisma from "../../prisma/client"
import { unstable_getServerSession } from "next-auth/next"


export default async function handler(req, res) {
  

  if (req.method === "DELETE") {
    const postId = req.body
    try {
      const result = await prisma.post.delete({
        where: {
          id: id,
        },
      })

      res.status(200).json(result)
    } catch (err) {
      res.status(403).json({ err: "Error has occured while deleting a post" })
    }
  }
}