const db = require("../database/db");



// GET - listar equipamentos

exports.listar = (req,res)=>{


    db.query(
        "SELECT * FROM equipamentos",

        (erro,resultados)=>{


            if(erro){

                return res.status(500).json(erro);

            }


            res.json(resultados);


        }

    );


};




// POST - cadastrar equipamento

exports.criar = (req,res)=>{


    const {

        nome,

        categoria,

        patrimonio,

        localizacao

    } = req.body;



    // REGRA DE NEGÓCIO
    // Impedir patrimônio duplicado


    db.query(

        "SELECT * FROM equipamentos WHERE patrimonio = ?",

        [patrimonio],


        (erro,resultado)=>{


            if(resultado.length > 0){

                return res.status(400).json({

                    mensagem:"Já existe um equipamento com esse patrimônio"

                });

            }



            const sql = `

            INSERT INTO equipamentos

            (nome,categoria,patrimonio,localizacao)

            VALUES (?,?,?,?)

            `;



            db.query(

                sql,

                [
                    nome,
                    categoria,
                    patrimonio,
                    localizacao
                ],


                (erro)=>{


                    if(erro){

                        return res.status(500).json(erro);

                    }


                    res.status(201).json({

                        mensagem:"Equipamento cadastrado"

                    });


                }

            );



        }

    );



};





// PUT - atualizar equipamento

exports.atualizar = (req,res)=>{


    const id = req.params.id;


    const {

        nome,

        categoria,

        localizacao,

        status


    } = req.body;



    const sql = `

    UPDATE equipamentos

    SET nome=?, categoria=?, localizacao=?, status=?

    WHERE id=?

    `;



    db.query(

        sql,

        [

            nome,

            categoria,

            localizacao,

            status,

            id

        ],


        (erro)=>{


            if(erro){

                return res.status(500).json(erro);

            }


            res.json({

                mensagem:"Equipamento atualizado"

            });


        }

    );


};





// DELETE - remover equipamento


exports.remover = (req,res)=>{


    const id = req.params.id;



    db.query(

        "DELETE FROM equipamentos WHERE id=?",

        [id],


        (erro)=>{


            if(erro){

                return res.status(500).json(erro);

            }


            res.json({

                mensagem:"Equipamento removido"

            });


        }

    );


};