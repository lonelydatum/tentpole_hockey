const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function frameEnd(){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.to(".phone", .3, {y:0, opacity:1}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
	tl.to(".cta1", .01, {opacity:0}, "+=2.5")
	tl.from(".cta2", .2, {opacity:0}, "+=.2")

	return tl
}

function frameEndPool(){
	const tl = new TimelineMax()

	tl.set(".frame2", {opacity:1})
	tl.from(".bg2", .2, {opacity:0})

	
	tl.to(".phone", .3, {y:0, opacity:1}, "+=.3")	
	tl.from(".ill", .3, {scale:0})

	tl.from(".t2", .01, { opacity:0}, "+=.3")
	tl.from(".cta1", .01, {opacity:0}, "+=1.5")
	tl.to([".t2", ".cta1"], .01, {opacity:0}, "+=2")
	tl.from(".t3", .2, {opacity:0}, "+=.2")

	return tl
}

function transformOrigin(id, percent){
	const el = document.getElementById(id)
	const w = el.offsetWidth
	const h = el.offsetHeight
	const transformOrigin = {
		x: w*percent.w,
		y: h*percent.h
	}
	const pos = {
		x: -transformOrigin.x/2,
		y: -transformOrigin.y/2,
	}
	
	const result = {
		transformOrigin: `${transformOrigin.x}px ${transformOrigin.y}px`,
		...pos
	}

	return result
}

function init(id){
	console.log(id);
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const {w, h} = size
	switch(id){
		case "970x250":
		tl.set(".ill", {transformOrigin:`${w*.75}px ${h}px`, x:0, y:0 })
		tl.set(".phone", {y:"+=200"})	
		break;

		case "300x250":

		tl.set(".ill", {transformOrigin:`${w/2}px ${h}px`})
		tl.set(".phone", {y:200})	
		break;

		case "300x600":
		tl.set(".ill", {transformOrigin:`${w/2}px ${h/2}px`, x:0, y:0 })
		tl.set(".phone", {y:"+=100", opacity:0})
		break;

		case "320x50":
		tl.set(".ill", transformOrigin("ill", {w:.375, h:1}) )
		break;

		case "728x90":
		tl.set(".ill", {transformOrigin:`${w*.75}px ${h}px`, x:0, y:0 })
		tl.set(".phone", {y:"+=200"})	
		break;

		default:
		tl.set(".ill", {transformOrigin:`${w/2}px ${h}px`})
		break;
	}
	return tl
}

export {size, frameEnd, frameEndPool, init}