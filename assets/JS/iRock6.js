const imgEl = document.querySelector("#rockImg")

const setSize = () => {
	imgEl.style.width = innerWidth + "px"
	imgEl.style.height = innerHeight + "px"
}

window.addEventListener("resize", setSize)
window.addEventListener("load", setSize)
