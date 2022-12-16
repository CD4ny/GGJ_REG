import { PrismaClient } from '@prisma/client';
import XLSX from 'xlsx';
import fs from 'fs';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const user = 'vertexggj';
  const pass = 'vertexggj123';

  if (user != req.body.user || pass != req.body.pass) {
    res.status(404);
    return;
  }
  if (req.method === 'POST') {
    const participants = await prisma.Participant.findMany();
    const teams = await prisma.Team.findMany();

    var teams2obj = new Object();
    var participants2sheet = [];
    var teams2sheet = [];
    var nexter2sheet = [];

    teams.every((i) => {
      teams2obj[i.id_team] = i.name;
    });

    console.log(participants);

    // var cos = new Object
    // cos['CI']=0;
    // cos['Nombre']=0;
    // cos['Genero']=0;
    // cos['Team']=0;
    // cos['Institucion']=0;
    // cos['Fecha reg']=0;
    // cos['Area']=0;
    // cos['Email']=0;
    // cos['Tel']=0;
    // cos['Externo']=0;

    participants.forEach((i) => {
      var participant = new Object();
      participant['CI'] = i.id;
      participant['Nombre'] = i.name;
      participant['Genero'] = i.gender;
      participant['Team'] = teams2obj[i.team_id];
      participant['Institucion'] = i.institution;
      participant['Fecha reg'] = i.date;
      participant['Area'] = i.area;
      participant['Email'] = i.email;
      participant['Tel'] = i.phone;
      participant['Externo'] = i.ext;

      participants2sheet.push(participant);
    });

    teams.forEach((i) => {
      var team = new Object();
      team['Nombre'] = i.name;
      team['Descripcion'] = i.desc;

      teams2sheet.push(team);
    });

    participants.forEach((i) => {
      var participant = new Object();
      participant['CI'] = i.id;
      participant['Nombre'] = i.name;
      participant['CI'] = i.responsibleId;
      participant['Nombre'] = i.responsible;
      participant['Fecha reg'] = i.date;
      participant['Edad'] = i.age;
      participant['Institucion'] = i.institution;
      participant['Email'] = i.email;
      participant['Tel'] = i.phone;
      participant['Externo'] = i.ext;

      nexter2sheet.push(participant);
    });

    const workSheetParticipants = XLSX.utils.json_to_sheet(participants2sheet);
    const workSheetTeams = XLSX.utils.json_to_sheet(teams2sheet);
    const workSheetNextParticipants = XLSX.utils.json_to_sheet(nexter2sheet);

    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workBook,
      workSheetParticipants,
      'Particinpantes',
    );
    XLSX.utils.book_append_sheet(workBook, workSheetTeams, 'Teams');
    XLSX.utils.book_append_sheet(
      workBook,
      workSheetNextParticipants,
      'Particinpantes Next',
    );

    XLSX.writeFile(workBook, './sample.xlsx');

    var stat = fs.statSync('./sample.xlsx');
    res.writeHead(200, {
      'Content-Type':
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Length': stat.size,
      'Content-Disposition': 'attachment; filename=Listado.xlsx',
    });

    var readStream = fs.createReadStream('./sample.xlsx');

    readStream.on('open', function () {
      // This just pipes the read stream to the response object (which goes to the client)
      readStream.pipe(res);
    });
    readStream.on('error', function (err) {
      res.end(err);
    });
  } else {
    console.log();
    res.send(404);
  }
}
