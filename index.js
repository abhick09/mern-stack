import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/blogRoutes';
import bodyRoutes from './src/routes/bodycontentRoutes';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.options('*', cors());

// mongoose connection ////

const db = require('./src/config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('Conneted'))
  .catch(err => console.log(err));

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blogDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// body parser setup //

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
bodyRoutes(app);

//serving static files //

//production environtment ///
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('abhickdahal.com.np/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, 'abhickdahal.com.np', 'build', 'index.html')
    );
  });
}

app.use(express.static('public/images'));

app.get('/', (req, res) => res.send(`Node is running on ${PORT}`));

app.listen(process.env.PORT || 5000, () =>
  console.log(`Your server is running on ${PORT}`)
);
