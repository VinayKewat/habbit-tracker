const mongoose = require('mongoose');
// connecting to mongoose

mongoose.connect('mongodb://localhost/habit_tracker_development');
// mongoose database connection

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

// give msg when mongo db is connect
db.once('open',function(){
    console.log('Connected to Database :: MondoDB');
});

// export for call
module.exports=db;