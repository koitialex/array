let n = [];
let mensagem = "";
let soma = 0
 
for (let i = 0; i < 4; i++){
    n.push(parseFloat(prompt(`${i+1}-Digite um número`)));
    soma += n[i];
}
let m = soma/4;

for (let a = 0; a < 4; a++){
    mensagem += n[a] ;
};

if (a == n.length -1) {
    mensagem = '${n[a]}' 
}
alert (`${mensagem} A média é ${m} `);
 