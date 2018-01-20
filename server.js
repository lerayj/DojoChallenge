const express = require('express')
const app = express()
const _ = require("lodash")
const heroesData = require('./heroesData.json')
const utf8 = require('utf8')


app.use(express.static('dist'));
app.use('/public', express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/heroes', function (req, res) {

	let cleanHeroes = _.map(heroesData.data, hero => {
		if(hero.attributes){
			if(hero.attributes.image_splash)
				hero.attributes.image_splash = '/public/images/heroes_splash/' + hero.id + '.png'
			if(hero.attributes.image_portrait)
				hero.attributes.image_portrait = '/public/images/heroes_portrait/' + hero.id + '.png'
			if(hero.attributes.image_card_background)
				hero.attributes.image_card_background = '/public/images/heroes_card_background/' + hero.id + '.png'		
			// if(hero.attributes.name)
			// 	hero.attributes.name = utf8.decode(hero.attributes.name)
		}
		return hero
	})

	res.json(_.sortBy(cleanHeroes, e => e.attributes.name))
	//res.json(cleanHeroes)
})


var port = process.env.PORT || 5000;

app.listen(port, function () {
	console.log('server started '+ port);
})