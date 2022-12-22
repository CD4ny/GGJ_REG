import { PrismaClient, Prisma } from "@prisma/client";

let prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    let id_check = await prisma.ParticipantNext.count({
      where: { id: req.body.id },
    });

    if (id_check > 0) {
      res.send("Error kid already registered!");
      return;
    }

    let data = req.body
    data["age"] = parseInt(data["age"]);
    let nexter = await prisma.ParticipantNext.create({ data });

    res.status(200);
    
  } else {
    res.status(404);
  }
  res.send();
}
