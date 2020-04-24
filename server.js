const mongoose = require('mongoose');
const dotenv = require('dotenv');
//requiering env to hide the db variables
dotenv.config({ path: './config.env'});

const server = require('./app');
// making the connection with mongodb using mongoose
mongoose.connect(
  (process.env.DATABASE ),
  {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
  }
).then(() => {
    console.dir('DataBase Connected');
});

//defining port
const PORT = process.env.PORT || 3000;
//server listening
server.listen(PORT, () => console.dir(`Server is running on PORT:${PORT}`));