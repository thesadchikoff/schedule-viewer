import { SearchFieldParams } from '@/router/router'
import axios from 'axios'
import { Request, Response } from 'express'
import * as https from 'https'

const agent = new https.Agent({
	rejectUnauthorized: false,
})

class Schedulers {
	constructor() {}

	async getSchedulers(
		req: Request<{}, any, any, Record<string, any>>,
		res: Response
	) {
		try {
			const formData = new FormData()
			const regex = /\d+/

			const { teacherName } = req.body

			const matchParam = regex.test(teacherName)

			formData.append('search_value', teacherName)
			formData.append(
				'search_field',
				matchParam ? SearchFieldParams.GROUP_P : SearchFieldParams.PREP
			)
			console.log(formData)
			const { data } = await axios.post(
				'https://tulsu.ru/schedule/queries/GetSchedule.php',
				formData,
				{
					httpsAgent: agent,
					withCredentials: false,
				}
			)
			console.log(data)
			return res
				.json({
					data,
				})
				.status(200)
		} catch (error) {
			console.error(error)
			return res
				.json({
					message: 'Internal server error',
				})
				.status(500)
		}
	}
}

export default new Schedulers()
