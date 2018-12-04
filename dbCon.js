const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'testCloud' ||process.env.NODE_ENV === 'production') {
    mongoose.connect('mongodb+srv://DbAdmin:Secret123!@clusterrickv-jzsrk.mongodb.net/test?retryWrites=true',
        {useNewUrlParser: true})
        .then(() => {
            console.log("MongoDB Cloud connected")
        })
        .catch(err => console.log(err));
}
else if (process.env.NODE_ENV === 'test') {
    mongoose.connect('mongodb://localhost/users',
        {useNewUrlParser: true})
        .then(() => {
            console.log("MongoDB Local connected")
        })
        .catch(err => console.log(err));
}

mongoose.connection
    .once('open', () => {
        console.log('Connection opened');
    })
    .on('error', (error) => {
        console.warn('Warning', error);
    });

module.exports =  mongoose;