const LoginForm = ({ handleSubmit, user, setUser, password, setPassword }) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="btn w-100 btn-primary GG_button"
      >
        Enviar
      </button>
    </form>
  );
};

export default LoginForm;
