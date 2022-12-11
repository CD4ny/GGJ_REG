import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="d-flex justify-content-center position-relative">
        <div id="backdrop_opacity"></div>
        <div
          className="py-4 "
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%',
            zIndex: 2,
          }}
        >
          <h3 className=" text-center" style={{ marginTop: '60px' }}>
            Bienvenidos al <br /> Global Game Jam 2023 <br /> Sede UCI
          </h3>
          <Link href={'/register'}>
            <button className="btn btn-primary GG_button">COMENCEMOS</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
