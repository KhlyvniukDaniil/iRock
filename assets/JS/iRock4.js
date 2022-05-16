const timerEl = document.querySelector("#timer")
const timer = 3
const imgEl = document.querySelector("#rockImg")
const happy = "../assets/images/rock_happy.png"
const sad = "../assets/images/rock.png"
let isHappy = false
timerEl.innerText = timer

setInterval(() => {
	if (isHappy) {
		imgEl.src = sad
	} else {
		imgEl.src = happy
	}
	isHappy = !isHappy
}, timer * 1000)

setInterval(() => {
	if (+timerEl.innerText === 1) {
		timerEl.innerText = timer
	} else {
		timerEl.innerText = +(timerEl.innerText - 1)
	}
}, 1000)

