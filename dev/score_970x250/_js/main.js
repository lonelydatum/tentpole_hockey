import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("970x250")
	// return
	
	
	
	TweenMax.to(".player2", 1, {x:0, y:0})
	TweenMax.to(".puck", 1.8, {x:0, y:0})
	player(1.5)
	tl.from(".t1a", .2, {x:"-=450",opacity:0}, .8)
	tl.from(".t1b", .01, {opacity:0}, "+=.5")

	
	
	
	tl.add(frameEnd(), "+=2")

}


start()


module.exports = {};

