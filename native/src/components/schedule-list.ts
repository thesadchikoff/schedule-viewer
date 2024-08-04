import { doc } from '../constants'
import ScheduleCard from './schedule-card'

export function ScheduleList(schedule: ScheduleCard[]): HTMLElement {
	const scheduleList = doc.createElement('div')
	scheduleList.classList.add('schedule-list')
	if (schedule.length > 0) {
		schedule.forEach(scheduleItem => {
			const scheduleCard = ScheduleCard(scheduleItem)
			scheduleList.append(scheduleCard)
		})
	}
	return scheduleList
}
