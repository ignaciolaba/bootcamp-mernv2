const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
      await 
      mongoose.set("strictQuery", false);
      mongoose.connect("mongodb+srv://ignacio:Canape2k@bootcamp.cdvu5xc.mongodb.net");

      console.log('DB Online')
    } catch (error){
        console.log(error);
        throw new Error('Error a la hora de inciar la BD')
    }
}

module.exports = { 
    dbConnection
}