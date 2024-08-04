import axios from 'axios'

class Schedule {
	async getSchedule(teacherName: string) {
		const { data } = await axios.post('http://localhost:3500', {
			teacherName: teacherName,
		})
		return data
	}
}

export default new Schedule()
