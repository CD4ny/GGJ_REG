import axios from 'axios';
import { useStoreState } from 'easy-peasy';

const EULA = ({ handleNext, isJunior }) => {
  const participants = useStoreState((state) => state.participants);
  const team = useStoreState((state) => state.team);
  const juniorParticipant = useStoreState((state) => state.juniorParticipant);

  const handleSubmit = () => {
    let data = {};

    if (isJunior === 0) data = { team, participants };
    else data = juniorParticipant;

    let url = `/api/reg/${isJunior === 0 ? 'team' : 'nexter'}`;
    console.log(data);
    axios
      .post(url, data)
      .then((response) => {
        if (response.status === 200) handleNext(3);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <p style={{ textTransform: 'uppercase' }}>
          Al enviar esta información estoy consciente y de acuerdo con las
          siguientes pautas:
        </p>
        <ul style={{ textTransform: 'none' }}>
          <li>
            LOS PARTICIPANTES y EQUIPOS se comprometen a cumplir con las pautas
            del evento, así como participar en todas las actividades durante el
            mismo.
          </li>
          <li>
            LOS PARTICIPANTES y EQUIPOS son responsables de llevar los
            accesorios que consideren necesarios para trabajar: como laptops,
            pc, regletas de electricidad, cables de red, entre otros y su
            integridad.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR puede difundir públicamente, o a través de
            terceros, las fotografías, grabaciones o imágenes del evento en las
            que aparezca su imagen.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR puede utilizar los datos relacionado con el
            sexo, edad y ubicación geográfica de los participantes
            exclusivamente con fines estadísticos.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR se reserva el derecho de admisión, en especial
            denegando el acceso o expulsando a aquellos PARTICIPANTES o EQUIPOS
            que incumplan o hayan incumplido con las normas y código de ética
            del evento en previas ocasiones o durante la presente edición.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR se reserva el derecho de alterar o modificar
            los datos y fechas del evento, comprometiéndose a dar aviso de
            dichos cambios por los medios oficiales del evento.
          </li>
          <li>
            LOS PARTICIPANTES y EQUIPOS deben entregar con carácter obligatorio
            el resultado final del evento.
          </li>
          <li>
            LOS PARTICIPANTES y EQUIPOS deben declarar con carácter obligatorio
            los assets o recursos externos utilizados en la creación del
            proyecto final.
          </li>
          <li>
            EL COMITÉ ORGANIZADOR se reserva el derecho a expulsar a un
            participante y su equipo en caso de detectarse actividad ajena al
            evento, denegándole la participación por 5 años.
          </li>
          <li>
            EL JURADO verificará el apego al tema principal en todos los
            prototipos incluyendo los casos que apelen al uso de un subtema.
          </li>
          <li>
            EL JURADO se reserva el derecho de no considerar algún prototipo
            para los reconocimientos del patrocinador en caso de no cumplir con
            las pautas especificadas.
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
          onClick={() => handleSubmit()}
        >
          Enviar
        </button>
      </div>
    </>
  );
};

export default EULA;
