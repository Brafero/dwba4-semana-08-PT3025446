let nome = "João da Silva";
let n1 = 7;
let n2 = 8.5;

let p1 = n1 * 0.6;
let p2 = n2 * 0.4;

let media = p1 + p2;

alert("Nome do aluno: " + nome + "\nNota 1: " + n1 + "\nNota 2: " + n2 + "\n" + "Nota total: " + media);

let allnotas = '';

let aluno1 = "Amanda Alvarez";
let a1n1 = 1;
let a1n2 = 3;
let a1media = a1n1 * 0.6 + a1n2 * 0.4;
allnotas += "Nome do aluno: " + aluno1 + "<br>Média do Aluno: " + a1media + "<br><br>";

let aluno2 = "Bruno Boltazar";
let a2n1 = 5;
let a2n2 = 7;
let a2media = a2n1 * 0.6 + a2n2 * 0.4;
allnotas += "Nome do aluno: " + aluno2 + "<br>Média do Aluno: " + a2media + "<br><br>";

let aluno3 = "Cristina Carvalho";
let a3n1 = 9;
let a3n2 = 10;
let a3media = a3n1 * 0.6 + a3n2 * 0.4;
allnotas += "Nome do aluno: " + aluno3 + "<br>Média do Aluno: " + a3media + "<br><br>";

document.getElementById('resultados').innerHTML = allnotas;
