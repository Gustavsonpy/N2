import connect from "../config/connection.js";

let peca = {};
const con = await connect();

peca.create = async function(req, res){
    try{
        let peca = req.body
        let query = "INSERT INTO peca(nome_peca, descr_peca) VALUES (?, ?);"
        let values = [peca.nome_peca, peca.descr_peca];
        let result = await con.query(query, values);
        res.send({
            status: "Dados inseridos com sucesso!",
            result: result
        })
    }catch(e){
        console.log(`Erro ao inserir dados! ${e}`);
    }
}

peca.select = async function(req, res){
    try{
        let pecas = await con.query("SELECT * FROM peca;");
        res.send(pecas)
    }catch(e){
        console.log(`Erro: ${e}`);
    }
}

peca.update = async function(req, res){
    try{
        let idPeca = req.params.id_peca;
        let peca = req.body;
        let query = "UPDATE peca SET nome_peca = ?, descr_peca = ? WHERE id_peca = ?;";
        let values = [peca.nome_peca, peca.descr_peca, idPeca];
        let result = con.query(query, values);
        res.send({
            status: "Atualização da peca "+peca.nome_peca+" realizada com exito",
            result: result
        })
    }catch(e){
        console.log(`Erro ao atualizar os dados da peca! ${e}`);
    }
}

peca.delete = async function(req, res){
    try{
        let idPeca = req.params.id_peca;
        let query = "DELETE FROM peca WHERE id_peca = ?;";
        let result = await con.query(query, [idPeca]);
        res.send({
            status: "A peça foi excluída com sucesso!",
            result: result
        })
    }catch(e){
        console.log(`Erro ao excluir a peca ${peca.nome_peca}!\nErro: ${e}`)
    }
}

peca.select_name = async function(req, res){
    try{
        let nomePeca = req.params.nome_peca;
        let pecas = await con.query("SELECT * FROM peca WHERE nome_peca = ?;", nomePeca);
        res.send(pecas)
    }catch(e){
        console.log(`Erro: ${e}`);
    }
}

export {peca}