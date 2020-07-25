const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
  // res.status(400).sendFile(path.join(rootDir,'views','404.html'));
  res.status(400).render('404');
})

app.listen(3000);
