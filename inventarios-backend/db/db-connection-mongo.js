const mongoose = require ('mongoose');

const getConnection = async () =>{
try{
    const url = 'mongodb://user_bd:Lupe1234@cluster0-shard-00-00.rnrcb.mongodb.net:27017,cluster0-shard-00-01.rnrcb.mongodb.net:27017,cluster0-shard-00-02.rnrcb.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-101svw-shard-0&authSource=admin&retryWrites=true&w=majority';
    await mongoose.connect(url);
    console.log('conexion exitosa');

} catch (error){
    console.log(error);
}

}

module.exports={
    getConnection,
}