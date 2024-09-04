let cosoante = []
let letras = [];
let l = "";
let mensagem = "";

for (i=0; i < 10; i++){ // 1++ quer dizer que se a informação for true então é para continuar ... este loop pede para quantas vezes serão feitas  
    l = prompt(` ${i + 1}: Digite uma letra `);
    letras.push (l)
}
for (let i = 0; i < letras.length; i++) { // este loop pega as informaçoes do loop anterior e processaram as informaçoes
    if (!(letras[i] == "a" || letras[i]=="e" || letras[i]=="i" || letras[i]=="o" || letras[i]== "u")) { // estas sáo as letras que não é pra serem lidas
        cosoante.push (letras [i])
    }
    mensagem +=  cosoante   
    
}
alert (cosoante)