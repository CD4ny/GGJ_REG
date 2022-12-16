import { useStoreActions, useStoreState } from 'easy-peasy';

const JuniorForm = ({
  handleNext,
  setIsJunior,
  setToastMessage,
  setToastShow,
}) => {
  const participant = useStoreState((state) => state.juniorParticipant);
  const setParticipant = useStoreActions(
    (actions) => actions.setJuniorParticipant,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let flag = false;
    Object.keys(participant).forEach((key) => {
      if (key !== 'ext' && participant[key].trim() === '') {
        setToastMessage('No pueden haber campos vacíos');
        setToastShow(true);
        flag = true;
        return;
      }
      if (
        (key === 'id' || key === 'responsibleId') &&
        participant[key].length !== 11
      ) {
        console.log(key);
        setToastMessage('El carne de identidad debe tener 11 números');
        setToastShow(true);
        flag = true;
        return;
      }
      if (key === 'age' && !(participant[key] >= 7 && participant[key] <= 12)) {
        setToastMessage('La edad del menor debe estar entre 7 y 12');
        setToastShow(true);
        flag = true;
        return;
      }
    });

    if (flag) return;
    setToastShow(false);
    handleNext(2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="bd-title mb-2 mt-0 mt-md-5" id="content">
        Datos del participante
      </h4>

      <div className="mb-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre
        </label>
        <input
          autoFocus
          className="form-control"
          value={participant.name}
          onChange={(e) =>
            setParticipant({ data: e.target.value, key: 'name' })
          }
        />
      </div>

      <div className="row ">
        <div className="col-6 mb-4">
          <label className="form-label">Carne de Identidad</label>
          <input
            type="number"
            name="CI"
            className="form-control"
            value={participant.id}
            onChange={(e) =>
              setParticipant({ data: e.target.value, key: 'id' })
            }
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label">Edad</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={participant.age}
            onChange={(e) =>
              setParticipant({ data: e.target.value, key: 'age' })
            }
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label">Institución</label>
        <input
          type="text"
          className="form-control"
          value={participant.institution}
          onChange={(e) =>
            setParticipant({ data: e.target.value, key: 'institution' })
          }
        />
      </div>
      <h4 className="bd-title mb-2" id="content">
        Datos del Tutor
      </h4>
      <div className="mb-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre
        </label>
        <input
          className="form-control"
          value={participant.responsible}
          onChange={(e) =>
            setParticipant({ data: e.target.value, key: 'responsible' })
          }
        />
      </div>
      <div className="mb-4 row">
        <div className="col-8">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Carne de identidad
          </label>
          <input
            type="number"
            className="form-control"
            value={participant.responsibleId}
            onChange={(e) =>
              setParticipant({
                data: e.target.value,
                key: 'responsibleId',
              })
            }
          />
        </div>
        <div className="col-4 mt-auto">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={participant.ext}
            onChange={(e) =>
              setParticipant({
                data: !participant.ext,
                key: 'ext',
              })
            }
          />
          <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
            Externo
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <label className="form-label">Número de teléfono</label>
          <input
            type="number"
            className="form-control"
            value={participant.phone}
            onChange={(e) =>
              setParticipant({
                data: e.target.value,
                key: 'phone',
              })
            }
          />
        </div>
        <div className="col-12 col-sm-6 mt-4 mt-sm-0">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            value={participant.email}
            onChange={(e) =>
              setParticipant({
                data: e.target.value,
                key: 'email',
              })
            }
          />
        </div>
      </div>

      <div className="progress-bar mt-5">
        <div className="progress" style={{ width: '60%' }}></div>
      </div>
      <div className="text-center d-lg-none mt-3">datos del participante</div>
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
          datos del participante
        </div>
        <button type="submit" className="btn  btn-primary GG_button px-5">
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default JuniorForm;
