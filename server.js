const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
require('./src/routes').registrationRoutes(app);

app.get('/', (req, res) => {
   res.render('index');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Server is running on PORT', PORT));
