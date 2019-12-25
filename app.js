const createError = require('http-errors');
const express = require('express');
const path = require('path');
const minify = require('express-minify');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const auth = require('./backend/auth');
const websiteRouter = require('./routes/website/main'),
  librarianRouter = require('./routes/librarian/main'),
  archiveRouter = require('./routes/archive/main'),
  apiRouter = require('./routes/api/main');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((req, res, next) => {
  res.header(
    'Cache-Control',
    'no-cache, no-store, must-revalidate, public, max-age=0',
  );
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  res.locals.parentUri = '';
  res.locals.uri = req.path.replace(/\/$/, '');
  ({
    authenticated: res.locals.authenticated = false,
    master: res.locals.master = false,
    admin: res.locals.admin = false,
    username: res.locals.username,
  } = auth.getPrivilege(req));
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(minify());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/favicon.ico', (_req, res) => {
  res.redirect('/images/favicon.ico');
});
app.use('/vowr', websiteRouter);
app.use('/librarian', librarianRouter);
app.use('/archive', archiveRouter);
app.use('/api', apiRouter);
app.use('/', (_req, res) => {
  res.redirect('/vowr');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
