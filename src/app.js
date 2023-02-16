require('@babel/register');
require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');// сессии поключаем

const FileStore = require('session-file-store')(session); // автоматическое создание папки для хранения куков

const indexRouter = require('./routes/index.routes');
const homeRouter = require('./routes/home.routes');
const loginRouter = require('./routes/login.routes');
const signupRouter = require('./routes/signUp.routes');
const logoutRouter = require('./routes/logout.routes');
const lkRouter = require('./routes/lk.routes');

const isAuth = require('./middleware/isAuth');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  name: 'kyk', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET, // ключ для шифрования cookies // require('crypto').randomBytes(10).toString('hex')
  resave: false, // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  httpOnly: true,
  cookie: {
    secure: false, // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
  },
};
// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
// записывает в переменную req.session.user данные из прилетевшей куки, если такая же была найдена в кук базе данных.
//  если куки нету или она не найдена в session storage, то req.session.user будет равно unfefined
app.use(session(sessionConfig));

app.use((req, res, next) => {
  console.log('\n\x1b[33m', 'req.session.user :', req.session?.user);
  res.locals.user = req.session?.user;
  next();
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/home', isAuth, homeRouter);
app.use('/logout', logoutRouter);
app.use('/lk', isAuth, lkRouter);

app.get('*', (req, res) => {
  res.redirect('/home');
});

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT} port`);
});
