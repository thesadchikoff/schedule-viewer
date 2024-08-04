namespace DOMPropertiesEnum {
	export type ButtonType = 'danger' | 'access' | 'disabled' | 'primary'
	export type ButtonOptions = Partial<{
		onClick: (e: MouseEvent | TouchEvent) => void
		text: string
		disabled: boolean
		asDiv: boolean
		Icon: SVGElement
		asLink: boolean
		style: ButtonType
	}>
	export interface Header {
		title: string
	}
	export interface Input {
		value: string
		placeholder: string
		type: string
	}
	export interface ChangeClass {
		prevClassName: string
		currentClassList: string
		node: HTMLElement
	}
	export interface Header {
		header: HTMLElement
		title: string
	}
}
