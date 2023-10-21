
// Este eh o meu nome 

var nomeComleto = "Tarcisio Vieira"; 

/*
Comentario em java script
*/


// Criando Funções

function entrar(){
    alert('Informando o Nome');

    var area = document.getElementById('area');
    var texto = prompt('Digite o seu nome');

    if(texto == '' || texto == null){
        alert('Digite seu nome!');
        area.innerHTML = 'Bem Vindo ...';
    } else {
        area.innerHTML = 'Bem vindo ' + texto ;
    }    
}

// Nome e sobrenome

var valor = "Teste";

function entrar2(){
    alert('Informando Nome e Sobrenome ');

    var area2 = document.getElementById('area2');
    var nome = prompt('Digite o seu nome');
    var sobreNome = prompt('Digite o seu sobrenome');

    area2.innerHTML = valor + ' ' + nome + ' ' + sobreNome ;

    alert('Informando Nome e Sobrenome ');
  
}

function loopRepeticao(){
 for(a = 0 ; a<3; a++){
    alert('no loop e for o valor de a é igual : ' + a)
 }
}

 function acao(){
    document.write("Executando ... <br/>");
 }

//Executa de tempo em tempo automaticamente:
// setInterval(acao, 1000);
//setTimeout(acao , 3000);
// aqui aguarda 3 segundos e depois executa infinitamente
// setTimeout(setInterval(acao, 1000) , 3000);

//var timer = setInterval(acao , 1000);
// no console para de exucutar com clearInterval(timer);