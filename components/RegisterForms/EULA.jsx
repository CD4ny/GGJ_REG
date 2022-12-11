const EULA = ({ handleNext, handleSubmit, isJunior }) => {
  return (
    <>
      <div>
        <p style={{ textTransform: 'uppercase' }}>
          Al enviar esta información estoy consciente y de acuerdo con las
          siguientes pautas:
        </p>
        <ul style={{ textTransform: 'none' }}>
          <li>
            LOS PARTICIPANTES y EQUIPOS se comprometen a cumplir con las normas
            y código de ética del evento, así como los horarios y actividades
            del evento.
          </li>
          <li>
            LOS PARTICIPANTES y EQUIPOS son responsables de llevar los
            accesorios que consideren necesarios para trabajar: como laptops,
            pc, regletas de electricidad, cables de red, entre otros y su
            integridad.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR puede difundir públicamente, por sí o a través
            de terceros, fotografías, grabaciones o imágenes del evento en las
            que aparezca su imagen u otros datos identificativos, así como usar
            los datos recopilados en este formulario de registro con fines
            estadísticos.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR se reserva el derecho de admisión. En especial
            denegando el acceso o expulsando a aquellos PARTICIPANTES o EQUIPOS
            que incumplan o hayan incumplido con las normas y código de ética
            del evento.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR se reserva el derecho de alterar o modificar
            los datos y fechas del evento, comprometiéndose a dar aviso de
            dichos cambios por los medios correspondientes.
          </li>
        </ul>
      </div>
      <div className="progress-bar mt-5">
        <div className="progress" style={{ width: '90%' }}></div>
      </div>
      <div className="text-center d-lg-none mt-3">consentimiento</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className="my-3"
      >
        <button
          className="btn  btn-secondary px-5 GG_secondary_button"
          onClick={() => handleNext(isJunior === 1 ? 4 : 1)}
        >
          Atrás
        </button>

        <div className="text-center d-none d-lg-block">consentimiento</div>
        <button
          className="btn  btn-primary GG_button px-5"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
    </>
  );
};

export default EULA;
