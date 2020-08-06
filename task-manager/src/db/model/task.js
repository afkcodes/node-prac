const mongoose = require('mongoose');

const Task = mongoose.model('Tasks', {
    taskName : {
        type: String,
        required : true
    },
    status :{
        type: Boolean,
        validate (value){
            if(typeof value !== Boolean){
                throw new Error('Should be a Boolean value');
            }
        }
    }
})

module.exports = Task