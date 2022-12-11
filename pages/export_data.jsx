import { useState } from 'react';
import Dashboard from '../components/ExportExcel/Dashboard';
import LoginForm from '../components/ExportExcel/LoginForm';
import Layout from '../components/Layout';

const ExportData = () => {
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    setLogin(false);
    //TODO: auth
  };

  const handleExport = () => {
    //TODO: request to export data
  };

  return (
    <Layout>
      <div className="d-flex  position-relative" style={{ height: '100vh' }}>
        <div id="backdrop_opacity"></div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '90vh',
            width: '100%',
            zIndex: 2,
          }}
        >
          <div className="row w-100 justify-content-center">
            <div className="col-12 col-sm-11 col-md-7  px-0">
              <div className="card shadow py-4 px-3">
                <div className="card-body">
                  {!login ? (
                    <Dashboard handleExport={handleExport} />
                  ) : (
                    <LoginForm
                      user={user}
                      setUser={setUser}
                      password={password}
                      setPassword={setPassword}
                      handleSubmit={handleSubmit}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExportData;
