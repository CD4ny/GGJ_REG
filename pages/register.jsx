import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import EULA from '../components/RegisterForms/EULA';
import MembersData from '../components/RegisterForms/GlobalGameJam/MembersData';
import GeneralData from '../components/RegisterForms/GlobalGameJam/GeneralData';
import End from '../components/End';
import { useStoreActions } from 'easy-peasy';
import IsJuniorModal from '../components/RegisterForms/IsJuniorModal';
import JuniorForm from '../components/RegisterForms/GlobalGameJamNext/JuniorForm';
import CustomToast from '../components/CustomToast';

const Register = () => {
  const [isJunior, setIsJunior] = useState(-1);
  const cleanData = useStoreActions((state) => state.cleanData);
  const [currentForm, setCurrentForm] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastShow, setToastShow] = useState(false);

  useEffect(() => {
    cleanData();
    let newdata = forms;
    newdata[2].form = <EULA handleNext={handleNext} isJunior={isJunior} />;
    setForms([...newdata]);
  }, [isJunior]);

  const handleNext = (index) => {
    setCurrentForm(forms[index].form);
  };

  const [forms, setForms] = useState([
    {
      form: (
        <GeneralData
          handleNext={handleNext}
          setIsJunior={setIsJunior}
          setToastMessage={setToastMessage}
          setToastShow={setToastShow}
        />
      ),
    },
    {
      form: (
        <MembersData
          handleNext={handleNext}
          setToastMessage={setToastMessage}
          setToastShow={setToastShow}
        />
      ),
    },
    {
      form: <EULA handleNext={handleNext} isJunior={isJunior} />,
    },
    { form: <End /> },
    {
      form: (
        <JuniorForm
          handleNext={handleNext}
          setIsJunior={setIsJunior}
          setToastMessage={setToastMessage}
          setToastShow={setToastShow}
        />
      ),
    },
  ]);

  if (isJunior === -1)
    return <IsJuniorModal setIsJunior={setIsJunior} handleNext={handleNext} />;
  return (
    <Layout>
      <div
        className="px-sm-5 d-flex"
        style={{
          background: 'linear-gradient(90deg, #F5F5F5 80%, white)',
          height: '100vh',
          overflowY: 'scroll',
        }}
      >
        <div className={`container mt-5 mt-md-auto `}>{currentForm}</div>
      </div>
      <CustomToast
        message={toastMessage}
        show={toastShow}
        setToastShow={setToastShow}
      />
    </Layout>
  );
};

export default Register;
