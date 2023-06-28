var mongoose = require('mongoose');

var mongoDB_URI = 'mongodb://127.0.0.1:27017/web';
mongoose.connect(mongoDB_URI, { useNewUrlParser: true});

var db = mongoose.connection;

//listeners
db.on('connected', ()=>{
    console.log('Mongoose connected to ' + mongoDB_URI);
}
);

db.on('disconnected', ()=>{
    console.log('Mongoose disconnected');
}
);

db.on('error', (error)=>{
    console.log('Mongoose connection error: ' + error);
}
);