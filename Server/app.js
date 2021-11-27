require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const rtsIndex = require('./routes/index.router');

var app = express();

const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'User Management APIs',
            version:'1.0.0',
            description:'User Api for user management',
            contact:{
                name:'Arkajyoti Saha',
                email:'arkajyotisaha98@gmail.com'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["./routes/index.router.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex, swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//error handler
app.use((err, req, res, next) => {
    if(err && err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
})


//start server
app.listen(process.env.PORT, ()=> console.log(`Server listening at port : ${process.env.PORT}`));

