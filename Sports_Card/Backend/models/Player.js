const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Player_Attributes: {
        name: String,
        team: String,
        position: String,
        DOB : Date,
        Image : Array,
    },

    Publisher: {
        Name: String,
        Country: String,


    },

    Set: {
        name: String,
        Year_of_Release : String,

    },

        Variation: {
        Parralel: [{default: Number , Other: String }],
        
         },

   
});

const Player = mongoose.model('Player', UserSchema)

module.exports = Player_Attributes; //Exporting so i can use it in other files