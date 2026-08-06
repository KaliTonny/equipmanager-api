const mysql = require("mysql2");


const conexao = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "etony9087",

    database: "equipmanager"

});


conexao.connect((erro)=>{

    if(erro){

        console.log("Erro ao conectar no banco:", erro);

    }else{

        console.log("MySQL conectado!");

    }

});


module.exports = conexao;