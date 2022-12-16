import axios from 'axios';
import { NextResponse } from 'next/server';
import { useEffect, useState } from 'react';
import Dashboard from '../components/Admin/Dashboard';
import LoginForm from '../components/Admin/LoginForm';
import CustomToast from '../components/CustomToast';
import Layout from '../components/Layout';

const Admin = () => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [toastShow, setToastShow] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    const options = {
      method: 'POST',
      url: '/api/report',
      params: { '': '' },
      headers: { 'Content-Type': 'application/json' },
      responseType: 'blob',
      data: {
        user,
        pass,
      },
    };

    axios
      .request(options)
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        setDownloadUrl(url);
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 404) {
          setToastMessage('Credenciales incorrectas');
          setToastShow(true);
        }
      });
  }, [data]);

  const handleSubmit = () => {
    const options = {
      method: 'POST',
      url: '/api/admin',
      params: { '': '' },
      headers: { 'Content-Type': 'application/json' },
      data: {
        user,
        pass,
      },
    };

    axios
      .request(options)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          setToastShow(false);
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 404) {
          setToastMessage('Credenciales incorrectas');
          setToastShow(true);
        }
      });
  };

  return (
    <Layout>
      <CustomToast
        message={toastMessage}
        show={toastShow}
        setToastShow={setToastShow}
      />
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
                  {data ? (
                    <Dashboard data={data} downloadUrl={downloadUrl} />
                  ) : (
                    <LoginForm
                      user={user}
                      setUser={setUser}
                      password={pass}
                      setPassword={setPass}
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

export default Admin;
