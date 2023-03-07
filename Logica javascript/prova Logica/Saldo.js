const prompt = require("prompt-sync")();

const clientes = [
    'Tony Stark',
    'Bruce Wayne',
    'Joe',
    'Ellie',
    'Barry Allen',
    'Tio Patinhas',
    'Zepa',
    'Fisiquela',
    'Annie',
    'Walter Kovacs',
    'Charmosa',
    'José',
    'Neymar'
  ];

  const saldos = [
    '3.00',
    '1000.00',
    '2469.00',
    '100.00',
    '10.00',
    '239,999.999.999',
    '20,000.00',
    '4359.56',
    '844,500.00',
    '73.00',
    '0.50',
    '-150.00',
    '0.00'
  ];

  var NomeCliente = prompt("Qual o nome do cliente? ");

  for (var i = 0; i < clientes.length; i++) {
    const cliente = clientes[i];
    if(cliente.toLowerCase() == NomeCliente.toLowerCase()){
        
        var index = clientes.indexOf(cliente);
        const saldo = saldos[index]; 
        console.log("Esse é o ", index ,"posição do cliente", "saldo do cliente é: ", saldo);
    }
}