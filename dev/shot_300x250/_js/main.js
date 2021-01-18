import {endTimeShot, starttime, size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'


function start(){
	
	const tl = init("300x250")
	// return
	

	TweenMax.to(".player2", 1, {x:0, y:0})
	TweenMax.to(".puck", 1, {x:0, y:0})
	player(.5)
	tl.from(".t1a", .1, {x:"-=300",opacity:0}, starttime)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	tl.add(frameEnd(), `+=${endTimeShot}`)

}


start()


module.exports = {};

