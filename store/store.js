import { action, createStore, thunk } from 'easy-peasy';

const store = createStore({
  team: {
    name: '',
    desc: '',
  },
  addTeamInfo: action((state, payload) => {
    state.team = payload;
  }),
  participants: [
    {
      id: '',
      name: '',
      institution: '',
      phone: '',
      email: '',
      area: '',
      ext: false,
      gender: '',
    },
  ],
  cleanData: action((state) => {
    state.team = {
      name: '',
      desc: '',
    };
    state.participants = [];
    for (let index = 0; index < 4; index++) {
      state.participants.push({
        id: '',
        name: '',
        institution: '1',
        phone: '',
        email: '',
        area: '',
        ext: false,
        gender: 'masculino',
      });
    }
  }),
  setParticipant: action((state, payload) => {
    const { index, data, key } = payload;
    state.participants[index][key] = data;
  }),
  juniorParticipant: {
    id: '',
    name: '',
    age: '',
    institution: '',
    //Responsible data
    responsible: '',
    responsibleId: '',
    phone: '',
    email: '',
    ext: false,
  },
  setJuniorParticipant: action((state, payload) => {
    const { data, key } = payload;
    state.juniorParticipant[key] = data;
  }),

  sendData: action((state, payload) => {
    //payload tendra 0 o 1. Si es 1 hay que mandar el junior, si no los otros
    if (payload === 0) {
      console.log(
        JSON.stringify({ team: state.team, participants: state.participants }),
      );
    } else {
      console.log(JSON.stringify({ participant: state.juniorParticipant }));
    }
    //TODO: send data
    // const options = {
    // 	method: "POST",
    // 	url: "http://127.0.1:3000/api/reg/team",
    // 	params: { "": "" },
    // 	headers: { "Content-Type": "application/json" },
    // 	data: {
    // 		team: { name: "Las avispas", desc: "pican y no hacen miel" },
    // 		participants: [
    // 			{
    // 				id: "99013110582",
    // 				name: "Daniel Chaviano Perez",
    // 				institution: "UCI",
    // 				phone: "5356064362",
    // 				email: "danielcp@estudiantes.uci.cu",
    // 				area: "Fac-4",
    // 				ext: false,
    // 			},
    // 			{
    // 				id: "00051967686",
    // 				name: "Fulanita Martinez Perez",
    // 				institution: "CUJAE",
    // 				phone: "5356064332",
    // 				email: "fmartinez@estudiantes.cujae.cu",
    // 				area: "Fac-electrica",
    // 				ext: true,
    // 			},
    // 			{
    // 				id: "00010110101",
    // 				name: "LaQseBurla Alfaro Manso",
    // 				institution: "Fajardo",
    // 				phone: "5356064312",
    // 				email: "michino@estudiantes.fcm.cu",
    // 				area: "matasanos",
    // 				ext: true,
    // 			},
    // 		],
    // 	},
    // };

    // axios
    // 	.request(options)
    // 	.then(function (response) {
    // 		console.log(response.data);
    // 	})
    // 	.catch(function (error) {
    // 		console.error(error);
    // 	});
  }),
});

export default store;
