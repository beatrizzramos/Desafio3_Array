//01 - Crie um array que receba 5 itens e exiba no console.
let frutas = ["Banana", "Abacaxi", "Uva", "Melancia", "Goiaba"];
console.log (frutas);

//02 - Utilize um método para adicionar um nome ao inicio do array.
frutas.unshift ("Uva");
console.log (frutas);

//03 - Utilize um método para remover o último nome do array.
frutas.pop ();
console.log (frutas);

//04 - Utilize um método para adicionar dois nomes ao fim do array.
frutas.push ("Laranja", "Morango");
console.log (frutas);

//05 - Utilize um método para remover o primeiro nome do array.
frutas.shift ()
console.log (frutas)

//06 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort ()
console.log (numbers)

//07 - Crie um objeto que receba ao menos três propriedades sobre você.
let caracteristicas = {
    nome: "Beatriz Ramos",
    nomeDaMae: "Adelaide Chaves",
    idade: 24
}
console.log (caracteristicas)

//08 - Adicione uma nova propriedade sem alterar seu objeto inicial.
caracteristicas.cidade = "Lagoa Seca"
console.log (caracteristicas)

//09 - Remova uma propriedade desse objeto.
delete caracteristicas.nomeDaMae
console.log (caracteristicas)

//10 - Mostre no console todas as propriedades desse objeto.
console.log (caracteristicas.nome)
console.log (caracteristicas.idade)
console.log (caracteristicas.cidade)


//11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [ {
    nome: "Matteus",
    idade: 28,
    telefone: "(83) 9999-9999",
    amigos: ["Bernardo", "Wingson", "Brenno", "Maurício"]
},
{
    nome: "Laura",
    idade: 23,
    telefone: "(83) 8888-8888 ",
    amigos: ["Bia", "Lorena", "Bella", "Isadora"]
},
{
    nome: "Aline",
    idade: 25,
    telefone: "(83) 7777-7777 ",
    amigos: ["Manu", "Carol", "Nirvana", "Victoria"]
},
{
    nome: "Manuela",
    idade: 25,
    telefone: "(83) 6666-6666",
    amigos: ["Larissa", "Victor", "Marina", "Rawena"]
},
{
    nome: "Ilana",
    idade: 29,
    telefone: "(83) 2222-2222",
    amigos: ["Lucas", "Izabel", "Viviane", "Flávia"]
}
]

//12 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[2])