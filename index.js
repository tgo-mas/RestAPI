
const express = require("express");
const { alunos, filtrarPorNome, filtrarPorMedia, removerAluno, updateAluno } = require("./alunos")

// Configuração do app
const app = express();
// Lê o body no formato JSON
app.use(express.json());

// Rotas
app.get("/alunos", (req, res) => {
    const { nome, media } = req.query;

    if(nome) {
        res.json(filtrarPorNome(nome));
    }else if(media){
        res.json(filtrarPorMedia(media));
    }else{
        res.json(alunos);
    }
});

app.post("/alunos/novo", (req, res) => {

    const { nome, matricula, media } = req.body;

    if(!nome || !matricula || !media) {
        res.status(400);
        res.send("Erro!");
    }else{
        res.send(`Novo aluno: ${nome}, Matrícula: ${matricula}, Média: ${media}`);
    }

});

app.post("/alunos/deletar/:index", (req, res) => {

    const index = Number(req.params.index);

    const aluno = removerAluno(index)

    if(aluno){
        res.send(`Aluno removido: ${aluno.nome}`);
    }else{
        res.status(404);
        res.send("Erro!");
    }
});

app.post("/alunos/atualizar/:index", (req, res) => {

    const aluno = req.body;
    const index = Number(req.params.index);
    
    if(updateAluno(index, aluno)) res.send("Aluno atualizado!");
        else res.send(404, "Aluno não encontrado!");

})


// Escuta das requisições
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});