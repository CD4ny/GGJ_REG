const Dashboard = ({ handleExport, data, downloadUrl }) => {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>Equipos</td>
            <th className="text-end" scope="row">
              {data.teams}
            </th>
          </tr>
          <tr>
            <td>Participantes</td>
            <th className="text-end" scope="row">
              {data.participants}
            </th>
          </tr>
          <tr>
            <td>Externos</td>
            <th className="text-end" scope="row">
              {data.external}
            </th>
          </tr>
          <tr>
            <td>Next</td>
            <th className="text-end" scope="row">
              {data.participantsNext}
            </th>
          </tr>
        </tbody>
      </table>
      <a download={'reporte.xlsx'} href={downloadUrl}>
        <button
          type="button"
          onClick={handleExport}
          className="btn w-100 btn-primary GG_button mt-4"
        >
          Exportar
        </button>
      </a>
    </div>
  );
};

export default Dashboard;
