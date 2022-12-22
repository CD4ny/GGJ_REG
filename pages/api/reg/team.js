import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Check Team Name
    const team_check = await prisma.team.findFirst({
      where: { name: req.body.team.name },
    });
    if (team_check != null) {
      res.status(409);
      res.send("Error team already Taken!");
      return;
    }
    //Check Participants Data
    let ans = req.body.participants.some(async (item, index) => {
      const id_check = await prisma.participant.count({
        where: { id: item.id },
      });
      console.log(id_check);
      const email_check = await prisma.participant.count({
        where: { email: item.email },
      });
      console.log(email_check);
      if (id_check != 0 || email_check != 0) {
        return 1;
      }
    });
    if (ans == 1) {
      res.status(409);
      res.send(`Error participant already found!`);
      return;
    }
    // console.log(user_found);

    const team = await prisma.team.create({ data: req.body.team });

    req.body.participants.map(async (item) => {
      item["team_id"] = team.id_team;
      item["phone"] = String(item["phone"]);
      const user = await prisma.participant.create({ data: item });
    });

    res.send(200);
  } else {
    res.send(404);
  }

  res.send();
}
