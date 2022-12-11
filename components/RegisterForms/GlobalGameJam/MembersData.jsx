import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';

const MembersData = ({ handleNext, setToastMessage, setToastShow }) => {
  const participants = useStoreState((state) => state.participants);
  const setParticipant = useStoreActions((actions) => actions.setParticipant);
  const [cont, setCont] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let flag = false;
    Object.keys(participants[cont]).forEach((key) => {
      if (key !== 'ext' && participants[cont][key].trim() === '') {
        setToastMessage('No pueden haber campos vacíos');
        setToastShow(true);
        flag = true;
        return;
      } else if (key === 'id' && participants[cont][key].length !== 11) {
        setToastMessage('El carne de identidad debe tener 11 números');
        setToastShow(true);
        flag = true;
        return;
      }
    });

    if (flag) return;
    setToastShow(false);
    if (cont === 3) {
      handleNext(2);
      return;
    }
    setCont(cont + 1);
  };

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
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre
        </label>
        <input
          autoFocus
          type="text"
          name="name"
          className="form-control"
          value={participants[cont].name}
          onChange={(e) =>
            setParticipant({ index: cont, data: e.target.value, key: 'name' })
          }
        />
      </div>

      <div className="row mb-4">
        <div className="col-6 mb-4">
          <label className="form-label">Carne de Identidad</label>
          <input
            type="number"
            name="CI"
            className="form-control"
            value={participants[cont].id}
            onChange={(e) =>
              setParticipant({ index: cont, data: e.target.value, key: 'id' })
            }
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label">Género</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              setParticipant({
                index: cont,
                data: e.target.value,
                key: 'gender',
              })
            }
          >
            <option value="masculino">Masculino</option>
            <option value="memenino">Femenino</option>
          </select>
        </div>
        <div className="col-12 col-sm-6">
          <label className="form-label">Número de teléfono</label>
          <input
            type="number"
            className="form-control"
            value={participants[cont].phone}
            onChange={(e) =>
              setParticipant({
                index: cont,
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
            value={participants[cont].email}
            onChange={(e) =>
              setParticipant({
                index: cont,
                data: e.target.value,
                key: 'email',
              })
            }
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label">Institución</label>
        <select className="form-select" aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="mb-4 row">
        <div className="col-8">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            área
          </label>
          <input
            type="text"
            className="form-control"
            value={participants[cont].area}
            onChange={(e) =>
              setParticipant({
                index: cont,
                data: e.target.value,
                key: 'area',
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
            checked={participants[cont].ext}
            onChange={(e) =>
              setParticipant({
                index: cont,
                data: !participants[cont].ext,
                key: 'ext',
              })
            }
          />
          <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
            Externo
          </label>
        </div>
      </div>

      <div className="progress-bar mt-5">
        <div className="progress" style={{ width: '60%' }}></div>
      </div>
      <div className="text-center d-lg-none mt-3">
        datos del {cont + 1} integrante
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className="my-3"
      >
        <button
          className="btn  btn-secondary px-5 GG_secondary_button"
          onClick={() => handleNext(0)}
        >
          Atrás
        </button>

        <div className="text-center d-none d-lg-block">
          datos del {cont + 1} integrante
        </div>
        <button type="submit" className="btn  btn-primary GG_button px-5">
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default MembersData;
