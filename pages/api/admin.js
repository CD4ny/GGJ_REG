import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const user = 'vertexggj';
    const pass = 'vertexggj123';

    if (user == req.body.user && pass == req.body.pass) {
      const participants = await prisma.participant.count();
      const teams = await prisma.team.count();
      const external = await prisma.participant.count({ where: { ext: true } });
      const participantsNext = await prisma.participantNext.count();
      res.json({ participants, teams, external, participantsNext });
    } else {
      res.status(404);
      res.send();
    }
  }
}
