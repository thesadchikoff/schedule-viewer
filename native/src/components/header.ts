import { doc } from '../constants'
import { Timer } from './timer'

export class Header implements Header {
	private header!: HTMLElement
	private title: string
	constructor(title: string) {
		this.title = title
	}

	initHeader(): HTMLElement {
		// [Start] Логотип
		// Создаем заголовок H1 с текстом в качестве логотипа
		this.header = doc.createElement('header')
		this.header.classList.add('header')
		const title = doc.createElement('h1')
		title.innerText = this.title
		// Добавляем заголовок в хедер
		this.header.appendChild(title)
		// [End] Логотип

		// [Start] Таймер
		// Инициализация таймера с указанием времени в мс
		const timer = new Timer(150)
		const timerComponent = timer.initTimer()

		// Добавление обработчика события на клик по таймеру левой кнопкой мыши
		timerComponent.addEventListener('click', function () {
			timer.start()
		})

		// Добавление обработчика события на клик по таймеру правой кнопкой мыши
		timerComponent.addEventListener('contextmenu', function (event) {
			event.preventDefault()
			timer.stop()
			return false
		})

		// Добавление компонента таймера в хедер
		this.header.append(timerComponent)
		// [End] Таймер

		return this.header
	}
}
