export const changeClass = (options: DOMPropertiesEnum.ChangeClass) => {
	options.node.classList.remove(options.prevClassName)
	return options.node.classList.add(options.currentClassList)
}
