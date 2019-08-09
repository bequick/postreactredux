const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title :{
        type:string
    },
    body:{
        type:string 
    }
},{
    colletion:'posts'
});
module.exports = mongoose.model('Post', Post);