import {endTimeShot, starttime, size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("728x90")
	// return
	
	

	TweenMax.to(".player2", 1.3, {x:0, y:0})
	TweenMax.to(".puck", 1.8, {x:0, y:0})
	player(1.5)
	tl.from(".t1a", .15, {x:"-=600",opacity:1}, starttime)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	
	
	tl.add(frameEnd(), `+=${endTimeShot}`)

}


start()


module.exports = {};

