import { useStoreActions, useStoreState } from 'easy-peasy';

const GeneralData = ({
  handleNext,
  setIsJunior,
  setToastMessage,
  setToastShow,
}) => {
  const team = useStoreState((state) => state.team);
  const addTeamInfo = useStoreActions((actions) => actions.addTeamInfo);

  const validator = () => {
    if (team.name.trim() === '' || team.desc.trim() === '') {
      setToastMessage('No pueden haber campos vacíos');
      setToastShow(true);
    } else {
      setToastShow(false);
      handleNext(1);
    }
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          ¿Cuál es el nombre de tu equipo?
        </label>
        <input
          autoFocus
          type="text"
          className="form-control"
          value={team.name}
          onChange={(e) =>
            addTeamInfo({ name: e.target.value, desc: team.desc })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Déjanos conocerlos
        </label>
        <textarea
          className="form-control"
          rows={12}
          value={team.desc}
          onChange={(e) =>
            addTeamInfo({ name: team.name, desc: e.target.value })
          }
        />
      </div>
      <div className="progress-bar mt-5">
        <div className="progress" style={{ width: '30%' }}></div>
      </div>
      <div className="text-center d-lg-none mt-3">
        DATOS GENERALES DEL EQUIPO
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className="my-3"
      >
        <button
          onClick={() => setIsJunior(-1)}
          className="btn  btn-secondary px-5 GG_secondary_button"
        >
          Atrás
        </button>

        <div className="text-center d-none d-lg-block">
          DATOS GENERALES DEL EQUIPO
        </div>
        <button className="btn  btn-primary GG_button px-5" onClick={validator}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default GeneralData;
