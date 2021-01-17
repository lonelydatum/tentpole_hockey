import {size, frameEnd, init} from '../../_common/js/common.js'
import {player} from '../../_common/js/striker.js'




function start(){
	
	const tl = init("320x50")

	// tl.set(".ill", {transformOrigin:`${size.w/3}px ${size.h}px`})

	tl.set(".frame2", {opacity:1})
	

	
	tl.from(".phone", .3, {y:"+=50", opacity:0}, "+=.3")
	tl.from(".ill", .3, {scale:0})

	
	tl.from(".cta1", .01, {opacity:0}, "+=.5")
	

	
	

	
	
	
}



start()


module.exports = {};

