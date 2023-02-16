const React = require('react');
const Layout = require('./Layout');

const Lk = ({ myEntry, user }) => {
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
      <form name="searchForm" className="search-form" style={{ marginLeft: '70px', marginRight: '70px', marginTop: '30px' }}>
        <div className="input-group">
          <span className="input-group-text">
            <img style={{ width: 20, height: 20 }} src="https://www.pngfind.com/pngs/m/617-6173786_small-icon-png-search-icon-svg-transparent-png.png" alt="search" />
          </span>
          <input className="form-control" name="search" type="text" placeholder="ключевая фраза для поиска изображения" />
          <button className="btn btn-primary" type="submit">Search </button>
        </div>
      </form>
      <h2 style={{ marginLeft: '158px', color: 'white', marginTop: '20px' }}>Фото по вашему запросу:</h2>
      <section className="py-5">
        <div className="container">
          <div className="row filtr-container" id="apiContainer">
            <h3 style={{ marginLeft: '158px', color: 'white', marginTop: '20px' }}>Скорее делай запрос! =D </h3>
          </div>
        </div>
      </section>
      <h2 style={{ marginLeft: '158px', color: 'white', marginTop: '20px' }}>Фото опубликованные вами:</h2>
      <section className="py-5">
        <div className="container">
          <div className="row filtr-container" id="myEntry">
            {myEntry.map((el) => (
              <div className="col-md-6 col-lg-4 filtr-item mb-5" id={`delete${el.id}`}>
                <div className="card border-dark">
                  <div className="card-header bg-dark text-light">
                    <h5 className="m-0">{el.tag}</h5>
                  </div>
                  <img className="img-fluid card-img w-100 d-block rounded-0" src={el.url} alt="1" />
                  <div className="card-body">
                    public by
                    {' '}
                    {user.name}
                  </div>
                  {el.visibility === 'block'
                    ? (
                      <div className="d-flex card-footer" id={`footer${el.id}`}>
                        <span style={{ marginRight: '0px', marginLeft: '13px', marginTop: '8px' }}>
                          {`${el.rating} сердечек`}
                        </span>
                        <button id={el.id} name="hide" className="btn btn-outline-dark btn-sm ms-auto" type="button">скрыть</button>
                        <button id={el.id} name="delete" className="btn btn-outline-dark btn-sm ms-auto" type="button">удалить</button>
                      </div>
                    ) : (
                      <div className="d-flex card-footer" id={`footer${el.id}`} style={{ backgroundColor: 'red' }}>
                        <span style={{ marginRight: '0px', marginLeft: '13px', marginTop: '8px' }}>
                          {`${el.rating} сердечек`}
                        </span>
                        <button id={el.id} name="hide" className="btn btn-outline-dark btn-sm ms-auto" type="button">скрыть</button>
                        <button id={el.id} name="delete" className="btn btn-outline-dark btn-sm ms-auto" type="button">удалить</button>
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

module.exports = Lk;
