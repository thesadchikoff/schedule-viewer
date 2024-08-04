import { doc } from '../constants'
import { changeClass } from '../utils/change-class'

export class Timer {
	private instance
	private countdown: number = 0
	private isStarting: boolean = false
	private static timer = doc.createElement('span')
	constructor(instance: number) {
		this.instance = instance
	}

	initTimer(): HTMLElement {
		Timer.timer.classList.add('timer')
		Timer.timer.innerText = '00:00'
		return Timer.timer
	}

	start() {
		if (this.isStarting) {
			alert('Таймер уже запущен! Дождитесь окончания')
		} else {
			this.isStarting = true
			changeClass({
				prevClassName: 'pause',
				currentClassList: 'active',
				node: Timer.timer,
			})
			this.countdown = setInterval(() => {
				let minutes: string | number = Math.floor(this.instance / 60)
				let seconds: string | number = this.instance % 60
				minutes = minutes < 10 ? '0' + minutes : minutes
				seconds = seconds < 10 ? '0' + seconds : seconds
				Timer.timer.textContent = `${minutes}:${seconds}`
				if (--this.instance < 0) {
					clearInterval(this.countdown)
					this.isStarting = false
				}
			}, 1000)
		}
	}

	stop() {
		if (!this.isStarting) {
			alert('Таймер не запущен!')
		} else {
			clearInterval(this.countdown)
			this.isStarting = false
			changeClass({
				prevClassName: 'active',
				currentClassList: 'pause',
				node: Timer.timer,
			})
		}
	}

	reset() {}
}
