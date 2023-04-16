const alunos = [
    {
        nome: "Thomas",
        media: 7.0
    },{
        nome: "Wanessa",
        media: 8.6
    },{
        nome: "Alanis",
        media: 4.3
    },{
        nome: "Clara",
        media: 6.5
    },{
        nome: "Camile",
        media: 5.4
    },{
        nome: "Fernanda",
        media: 9.6
    },{
        nome: "Naiane",
        media: 6.7
    },{
        nome: "Luiza",
        media: 7.6
    },{
        nome: "Luana",
        media: 8.6
    },
];

function filtrarPorNome(nome){
    return alunos.filter((aluno) => aluno.nome.includes(nome));
}

function filtrarPorMedia(media){
    return alunos.filter((aluno) => aluno.media == media);
}

function removerAluno(index){
    if(index < alunos.length){
        return alunos.pop(index);
    }else{
        return null;
    }
}

function updateAluno(index, data){
    if(index < alunos.length){
        alunos[index] = data;
        return true;
    }else{
        return false;
    }
}

module.exports = { alunos, filtrarPorNome, filtrarPorMedia, removerAluno, updateAluno };