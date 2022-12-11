const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0" style={{ height: '100vh' }}>
        <div className="d-none d-md-block col-md-5 logoPic"></div>
        <div className="col-12 col-lg-7 h-100 p-0">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
