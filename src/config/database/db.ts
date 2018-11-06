import mongoose = require("mongoose");

export class Mongo {
    public static startMongo() {
        return new Promise((resolve, reject) => {
            try {
                console.log("In db"+'3')
                const mongooseOptions: mongoose.ConnectionOptions = {
                    keepAlive: 300000,
                    useNewUrlParser: true,
                    // poolSize : 1000 //uncomment in prod
                }
    
                mongoose.connect("mongodb://localhost:27017/ekaushalnsdc", mongooseOptions);
                mongoose.connection.on("error", error => {
                    reject(false)
    
                });
    
                mongoose.connection.on("connected", () => {
                    resolve(true)
                });
            }catch(e){
                reject(e)
            }
        })
    }
}

