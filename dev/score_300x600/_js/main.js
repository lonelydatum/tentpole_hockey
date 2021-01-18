import {endTime, starttime, size, init, frameEnd} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'

// function frameEnd(){
// 	const tl = new TimelineMax()

// 	tl.set(".frame2", {opacity:1})
// 	tl.from(".bg2", .2, {opacity:0})

	
// 	tl.to(".phone", .3, {y:0, opacity:1}, "+=.3")	
// 	// tl.from(".ill", .3, {scale:0})

// 	tl.from(".t2", .01, { opacity:0}, "+=.3")
// 	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
// 	tl.to(".cta1", .01, {opacity:0}, "+=2.5")
// 	tl.from(".cta2", .2, {opacity:0}, "+=.2")

// 	return tl
// }


function start(){
	
	const tl = init("300x600")
	
	

	TweenMax.to(".player2", 1, {x:0, y:0})
	TweenMax.to(".puck", 1, {x:0, y:0})
	player(.5)
	tl.from(".t1a", .1, {x:"-=300",opacity:0}, starttime)
	tl.from(".t1b", .01, {opacity:0}, "+=1")

	
	
	
	tl.add(frameEnd(), `+=${endTime}`)

}


start()


module.exports = {};

