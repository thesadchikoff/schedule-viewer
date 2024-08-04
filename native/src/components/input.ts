import { doc } from '../constants'
export class Input {
	input!: HTMLInputElement
	value
	placeholder
	type
	constructor(props: HTMLInputElement) {
		this.value = props.value
		this.placeholder = props.placeholder
		this.type = props.type
	}

	initInput() {
		this.input = doc.createElement('input')
		this.input.placeholder = this.placeholder
		this.value = this.value
		this.type = this.type
		this.input.classList.add('input')
		return this.input
	}
}
