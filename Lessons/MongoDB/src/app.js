const express = require("express");
const {connect} = require("mongoose");
const routes = require("./routes");

const app = express();


app.set('view engine' , 'ejs');
app.set("views", process.cwd() + "/src/views");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", routes);

const bootstrap = async () => {
  await connect("mongodb://127.0.0.1:27017/taskmanager");

  app.listen(8080, () => {
    console.log(8080);
  });
};

bootstrap();
