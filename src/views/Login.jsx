/* eslint-disable react/button-has-type */
const React = require('react');
const Layout = require('./Layout');

const Login = () => {
  return (
    <Layout>
      <nav className="navbar navbar-dark navbar-expand-md sticky-top py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
              <img style={{ width: 25, height: 25 }} src="https://cdn-icons-png.flaticon.com/512/2917/2917730.png" alt="1" />
            </span>
            <span>ПИКЧА</span>
          </a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link active" href="/">Вход</a></li>
              <li className="nav-item"><a className="nav-link" href="/signup">Регистрация</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="py-5">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body text-center d-flex flex-column align-items-center" style={{ backgroundColor: '#dee2e6' }}>
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-primary-light shadow bs-icon my-4">
                    <img style={{ width: 25, height: 25 }} src="https://cdn-icons-png.flaticon.com/512/2917/2917730.png" alt="1" />
                  </div>
                  <form method="post">
                    <div className="mb-3"><input className="form-control" type="text" name="name" placeholder="Name" /></div>
                    <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="mb-3"><button className="btn btn-primary shadow d-block w-100" type="submit">Войти</button></div>
                    <p className="text-muted">
                      Нет аккаунта?&nbsp;&nbsp;
                      <a href="/signup">Регистрация</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

module.exports = Login;
