import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    const limit = 5;
    const cursor = req.query.cursor ?? "";
    const cursorObj = cursor === "" ? undefined : { id: parseInt(cursor, 10) };

    const posts = await prisma.post.findMany({
      skip: cursor !== "" ? 1 : 0,
      cursor: cursorObj,
      take: limit,
    });
    return res.json({
      posts,
      nextId: posts.length === limit ? posts[limit - 1].id : undefined,
    });
  }
};
