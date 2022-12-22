import { useState } from 'react';

const IsJuniorModal = ({ setIsJunior, handleNext }) => {
  const [radioValue, setRadioValue] = useState(0);

  const handleSubmit = () => {
    setIsJunior(radioValue);
    if (radioValue === 1) {
      setIsJunior(1);
      handleNext(4);
    } else if (radioValue === 0) {
      setIsJunior(0);
      handleNext(0);
    }
  };
  return (
    <div
      className="modal fade show"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      style={{ display: 'block', backgroundColor: 'rgba(255,255,255,0.8)' }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content mt-5">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Seleccione concurso a participar
            </h1>
          </div>
          <div className="modal-body">
            <div className="form-check">
              <input
                id="radio1"
                className="form-check-input"
                type="radio"
                checked={radioValue === 0}
                onChange={() => setRadioValue(0)}
              />
              <label className="form-check-label" htmlFor="radio1">
                Global Game Jam
              </label>
            </div>
            <div className="form-check">
              <input
                id="radio2"
                className="form-check-input"
                type="radio"
                checked={radioValue === 1}
                onChange={() => setRadioValue(1)}
              />
              <label className="form-check-label" htmlFor="radio2">
                Global Game Jam Next
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-primary GG_button"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsJuniorModal;
