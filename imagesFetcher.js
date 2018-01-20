var urlImages = [{name:"shox.png", url: "http://www.vakarm.net/uploads/images/sb_player/68b5a640eb27a57ba491a12d460b229987ae4f07.png"},
{name: "toto.png", url: "http://www.vakarm.net/uploads/images/sb_player/b08d293c1f6e3076b082dcd740fb73ce9b8959a0.png"}]
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
