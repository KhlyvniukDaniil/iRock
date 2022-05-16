export class HelloForm {
	#ELEMS = {
		wrapper: document.createElement("div"),
		form: document.createElement("div"),
		title: document.createElement("h2"),
		nextBtn: document.createElement("button"),
		input: document.createElement("input")
	}
	handleSubmit = this.handleClick.bind(this)

	constructor({ text, input = false }) {
		this.text = text
		this.input = input

		this.render()
	}

	getElems() {
		return this.#ELEMS
	}

	stylingForm() {
		const { wrapper, form, title, nextBtn, input } = this.#ELEMS

		wrapper.style.position = "absolute"
		wrapper.style.inset = "0"

		form.style.position = "absolute"
		form.style.top = "50%"
		form.style.left = "50%"
		form.style.transform = "translate(-50%, -50%) scale(.5)"
		form.style.opacity = ".2"


		title.style.fontSize = "4em"
		title.style.color = "#0f0a0a"
		title.style.fontWeight = "bold"
		title.style.marginBottom = "1em"
		title.style.textAlign = "center"

		input.style.outline = "none"
		input.style.border = "none"
		input.style.borderBottom = "solid 5px #0f0a0a"
		input.style.fontSize = "2.5em"
		input.style.display = "block"
		input.style.margin = "0 auto 1em"


		nextBtn.style.border = "solid crimson 5px"
		nextBtn.style.backgroundColor = "rgba(220, 20, 60, .8)"
		nextBtn.style.color = "#fff"
		nextBtn.style.borderRadius = ".5em"
		nextBtn.style.padding = ".5em 1em"
		nextBtn.style.outline = "none"
		nextBtn.style.display = "block"
		nextBtn.style.marginInline = "auto"
		nextBtn.style.cursor = "pointer"
		nextBtn.style.fontSize = "3em"
	}

	handleClick(ev) {
		ev.preventDefault()
		const { wrapper, input} = this.getElems()
		wrapper.remove()

		if (this.input) {
			new HelloForm({ text: `Welcome ${ input.value || "noName" }` })
		}
	}

	render() {
		const { wrapper, form, title, nextBtn, input } = this.#ELEMS
		this.stylingForm()

		title.innerText = this.text
		nextBtn.innerText = "OK"
		nextBtn.addEventListener("click", this.handleSubmit)

		form.className = "animated"

		form.append(title)
		if (this.input) {
			input.placeholder = "Enter your name"
			form.append(input)
		}
		form.append(nextBtn)
		wrapper.append(form)

		document.body.append(wrapper)
	}
}

