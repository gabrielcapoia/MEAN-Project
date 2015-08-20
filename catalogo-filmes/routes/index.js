var Filme = require('../models/filme.js');

exports.index = function(req, res){
	res.render('index');
}

exports.lista = function(req, res) {
	Filme.find({},function(err,filmes){
		if(err)
			return console.log(err);
		res.json({filmes: filmes});
	});
};

exports.grava = function(req, res){
	var filme = new Filme(req.body);

    filme.save(function(err, filme) {
        if(err) return console.log(err);
        res.send('Filme ' + filme.titulo  + ' recebido no servidor.');
    });

}
