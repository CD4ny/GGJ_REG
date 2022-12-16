import axios from 'axios';
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
        institution: '',
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

  sendData: thunk((actions, payload) => {
    //payload tendra 0 o 1. Si es 1 hay que mandar el junior, si no los otros
    let data = {};
    let url = '';

    console.log(state);

    if (payload === 0) {
      url = '/api/reg/team';
      data = { team: state.team, participants: state.participants };
    } else {
      url = '/api/reg/nexter';
      data = state.juniorParticipant;
    }

    console.log(data);
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }),
});

export default store;
