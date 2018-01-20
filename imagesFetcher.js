var heroesData = require('./heroesData.json')

console.log(heroesData.data)

var request = require('request');
var fs = require('fs');

heroesData.data.forEach(hero => {
	if(hero.attributes.image_card_background)
		request.get({url: hero.attributes.image_card_background, encoding: 'binary'}, (err, res, body) => {
			res.setEncoding('binary')
			fs.writeFile(__dirname + "/public/images/heroes_card_background/" + hero.id + '.png', body, 'binary', (err) =>{
				if(err)
					console.log(err)
				else
					console.log("Download OK")
			})
		})
})
