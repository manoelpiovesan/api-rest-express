const mongoose = require('mongoose');


async function main(){
    try{
        await mongoose.connect('mongodb+srv://manoelpiovesan99:RDFfhp4PWfY7uxRI@cluster0.0warj4c.mongodb.net/?retryWrites=true&w=majority', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('✅📝 Conectado ao banco de dados');
    }catch (error){
        console.log('Erro ao conectar ao banco de dados');
    }
}

module.exports = main;


