import { doc } from '../constants'

export default function ScheduleCard({
	...ScheduleProps
}: ScheduleCard): HTMLElement {
	const scheduleCard = doc.createElement('div')

	const h4 = doc.createElement('h4')
	h4.innerText = ScheduleProps.DISCIP
	h4.classList.add('title')
	const scheduleCardHeader = doc.createElement('div')
	scheduleCard.classList.add('schedule-card')
	scheduleCardHeader.classList.add('schedule-card-header')
	scheduleCardHeader.append(h4)
	const date = doc.createElement('span')
	date.classList.add('date')
	date.innerText = ScheduleProps.TIME_Z
	scheduleCardHeader.append(date)
	scheduleCard.append(scheduleCardHeader)
	const scheduleCardBody = doc.createElement('div')
	scheduleCardBody.innerHTML = `
	<span>Преподаватель: ${ScheduleProps.PREP}</span>
	<span>${ScheduleProps.KOW}</span>
	<span>Аудитория: ${ScheduleProps.AUD}</span>
	<span>Дата: ${ScheduleProps.DATE_Z}</span>
	`
	scheduleCardBody.classList.add('schedule-card-body')
	scheduleCard.append(scheduleCardBody)
	return scheduleCard
}
