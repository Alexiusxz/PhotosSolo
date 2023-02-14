const React = require('react');
const Layout = require('./Layout');

const Lk = () => {
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
          <div className="collapse navbar-collapse justify-content-between" id="navcol-1">
            <ul className="navbar-nav mx-auto" style={{ paddingLeft: '0px', marginLeft: '251px', marginRight: '119px' }}>
              <li className="nav-item"><a className="nav-link" href="/home" style={{ marginLeft: '-1px', marginRight: '21px' }}>Главная</a></li>
              <li className="nav-item"><a className="nav-link" href="/lk" style={{ marginRight: '29px' }}>ЛК</a></li>
              <li className="nav-item"><a className="nav-link" href="/logout">Выход</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <form className="search-form" style={{ marginLeft: '70px', marginRight: '70px', marginTop: '30px' }}>
        <div className="input-group">
          <span className="input-group-text"><i className="fa fa-search" /></span>
          <input className="form-control" type="text" placeholder="ключевая фраза для поиска изображения" />
          <button className="btn btn-primary" type="button">Search </button>
        </div>
      </form>
      <h2 style={{ marginLeft: '158px', color: 'white', marginTop: '20px' }}>Фото по вашему запросу:</h2>
      <section className="py-5">
        <div className="container">
          <div className="row filtr-container">
            <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
              <div className="card border-dark">
                <div className="card-header bg-dark text-light">
                  <h5 className="m-0">tag</h5>
                </div>
                <img className="img-fluid card-img w-100 d-block rounded-0" src="th-03.jpg" alt="1" />
                <div className="d-flex card-footer"><button className="btn btn-outline-dark btn-sm ms-auto" type="button"><span>опубликовать</span></button></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 style={{ marginLeft: '158px', color: 'white', marginTop: '20px' }}>Фото опубликованные вами:</h2>
      <section className="py-5">
        <div className="container">
          <div className="row filtr-container">
            <div className="col-md-6 col-lg-4 filtr-item" data-category="2,3">
              <div className="card border-dark">
                <div className="card-header bg-dark text-light">
                  <h5 className="m-0">tag</h5>
                </div>
                <img className="img-fluid card-img w-100 d-block rounded-0" src="th-03.jpg" alt="1" />
                <div className="card-body"><a href="#">user_name</a></div>
                <div className="d-flex card-footer">

                  <button id="likebutton" onClick="liked()" className="btn btn-outline-dark btn-sm" type="button">
                    like
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2 10.5C2 9.67157 2.67157 9 3.5 9C4.32843 9 5 9.67157 5 10.5V16.5C5 17.3284 4.32843 18 3.5 18C2.67157 18 2 17.3284 2 16.5V10.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 10.3333V15.7639C6 16.5215 6.428 17.214 7.10557 17.5528L7.15542 17.5777C7.71084 17.8554 8.32329 18 8.94427 18H14.3604C15.3138 18 16.1346 17.3271 16.3216 16.3922L17.5216 10.3922C17.7691 9.15465 16.8225 8 15.5604 8H12V4C12 2.89543 11.1046 2 10 2C9.44772 2 9 2.44772 9 3V3.66667C9 4.53215 8.71929 5.37428 8.2 6.06667L6.8 7.93333C6.28071 8.62572 6 9.46785 6 10.3333Z"
                        fill="currentColor"
                      />
                    </svg>

                  </button>

                  <span style={{ marginRight: '0px', marginLeft: '13px', marginTop: '8px' }}>likes</span>
                  <button className="btn btn-outline-dark btn-sm ms-auto" type="button"><span>delete</span></button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

module.exports = Lk;