var Filme = require('./models/filme');

var filme = new Filme({
	titulo: 'Peaceful Warrior',
	diretor: 'Victor Salva',	
	ano: '2006'
});

filme.save(function(erro, filme) {
	if(erro) console.log("Deu erro: " + erro);

	console.log('Gravando filme' + filme.titulo);
});