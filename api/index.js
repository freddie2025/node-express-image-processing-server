const app = require('./app').default;

module.exprts = app.listen(3000, () => {
  console.log(`App running on port: ${3000}`);
});
