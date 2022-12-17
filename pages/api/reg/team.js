import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Check Team Name
    const team_check = await prisma.team.findFirst({
      where: { name: req.body.team.name },
    });
    if (team_check != null) {
      res.status(409);
      res.send('Error team already Taken!');
      return;
    }
    //Check Participants Data
    var user_found = req.body.participants.every(async (item) => {
      const id_check = await prisma.participant.findFirst({
        where: { id: item.id },
      });
      console.log(id_check);
      const email_check = await prisma.participant.findFirst({
        where: { email: item.email },
      });
      console.log(email_check);
      if (id_check !== null || email_check !== null) {
        return true;
      }

      return false;
    });
    // console.log(user_found);
    if (user_found !== true) {
      res.status(409);
      res.send('Error participant already found!');
      return;
    }
    // id_team Int
    // name String
    // pax Int (no necesario)
    //Save team
    const team = await prisma.team.create({ data: req.body.team });

    //Ask for Participants 4
    // id String
    // team_id Int
    // name String
    // institution String
    // !date DateTime @default(now())
    // phone Int
    // email String
    // area String
    // ext Boolean
    //Save Participants
    req.body.participants.map(async (item) => {
      item['team_id'] = team.id_team;
      item['phone'] = String(item['phone']);
      const user = await prisma.participant.create({ data: item });
      // console.log(user);
    });

    res.send(200);
  } else {
    console.log();
    res.send(404);
  }

  res.send();
}
