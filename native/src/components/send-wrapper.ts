import { CalendarCheck2, createElement } from 'lucide'
import scheduleService from '../api/schedule/schedule.service'
import { doc } from '../constants'
import Button from './button'
import { Input } from './input'
import { ScheduleList } from './schedule-list'

const scheduleIcon = createElement(CalendarCheck2)
scheduleIcon.classList.add('icon-sm')

export default function SendWrapper(): HTMLElement {
	let schedules
	// Создание элемента обертки
	let sendWrapper = doc.createElement('div')

	let message = 'Получить расписание'

	// [Start] Button
	// Создание объекта с опциями для компонента кнопки
	const buttonProps: DOMPropertiesEnum.ButtonOptions = {
		style: 'primary',
		text: message,
		Icon: scheduleIcon,
		onClick: async () => {
			const scheduleListNode = doc.querySelector('.schedule-list')
			if (scheduleListNode) {
				scheduleListNode.remove()
			}
			const inputValue = inputComponent.value
			schedules = await scheduleService.getSchedule(inputValue)

			console.log(schedules)
			const scheduleListComponent = ScheduleList(schedules.data)
			sendWrapper.append(scheduleListComponent)
		},
	}
	// Инициализация компонента кнопки и передача опций
	var buttonComponent = Button('', buttonProps)
	// [End] Button

	// [Start] Input
	// Инициализация поля ввода с передачей в него параметров
	const input = new Input({
		placeholder: 'Укажите номер группы или ФИО преподавателя',
		title: '',
		type: 'text',
	} as HTMLInputElement)
	// Создание поля ввода
	const inputComponent = input.initInput()
	// [End] Input

	// [Start] Schedule List
	// Инициализация компонента списка расписаний

	// [End] Schedule List

	sendWrapper.classList.add('send-wrapper')
	sendWrapper?.append(inputComponent)
	sendWrapper?.append(buttonComponent)

	return sendWrapper
}
