class Aluno 
{
    constructor(nome, sobrenome, n1, n2) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.n1 = n1;
        this.n2 = n2;
    }

    nomeCompleto() 
    {
        return this.nome + ' ' + this.sobrenome;
    }

    media() 
    {
        const media = (this.n1 * 0.6) + (this.n2 * 0.4);
        return media.toFixed(2);
    }

    aprovacao() 
    {
        const media = this.media();
        if (media > 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

let aluno1 = new Aluno("Amanda", "Alvarez", 10, 7);
let aluno2 = new Aluno("Bruno", "Boltazar", 7, 10);
let aluno3 = new Aluno("Cristina", "Carvalho", 8, 8);
let aluno4 = new Aluno("Daniel", "Dante", 5, 3);
let aluno5 = new Aluno("Elaine", "Escobar", 1, 10);
let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

function resultados() 
{
    let content = '';
    alunos.forEach(aluno => {
        content += "Nome completo: " + aluno.nomeCompleto() + "<br>Média do aluno: " + aluno.media() + "<br>Status: " + aluno.aprovacao() + "<br><br>";
    });
    document.getElementById('resultados').innerHTML = content;
}

resultados();
