import { doc } from '../constants'
import '../style.css'
import options = DOMPropertiesEnum.ButtonOptions

export default function Button(
	classNames: string,
	options: options
): HTMLButtonElement {
	let button = doc.createElement('button')
	button.className = classNames
	button.classList.add('button', `button-${options.style}`)
	button.innerText = options.text!

	if (options.Icon) {
		button.insertAdjacentElement('afterbegin', options.Icon)
	}

	if (options.onClick) {
		button.addEventListener('click', options.onClick)
	}
	return button
}
