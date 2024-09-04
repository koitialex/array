let salario = [];
let imposto = 0;
let mensagem = "";

for (let i = 0; i < 1; i++);{ 
    salario.push (parseFloat(prompt(`informe o salário da pessoa ${i + 1}`)));
}
for (let i = 0; i < salario.length; i++);{
    mensagem += salario[i];
}
imposto = (salario*12)/100;
let ligui = salario - imposto;

alert ("O salário de " + mensagem +" mas com os impostos ficam "+ ligui);
