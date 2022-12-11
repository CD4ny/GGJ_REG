const Dashboard = ({ handleExport }) => {
  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>Equipos</td>
            <th className="text-end" scope="row">
              000
            </th>
          </tr>
          <tr>
            <td>Participantes</td>
            <th className="text-end" scope="row">
              000
            </th>
          </tr>
          <tr>
            <td>Externos</td>
            <th className="text-end" scope="row">
              000
            </th>
          </tr>
          <tr>
            <td>Next</td>
            <th className="text-end" scope="row">
              000
            </th>
          </tr>
        </tbody>
      </table>
      <button
        onClick={handleExport}
        className="btn w-100 btn-primary GG_button mt-4"
      >
        Exportar
      </button>
    </div>
  );
};

export default Dashboard;
