import schedulersController from '@/controllers/schedulers.controller'
import express from 'express'

export const enum SearchFieldParams {
	GROUP_P = 'GROUP_P',
	PREP = 'PREP',
}
export const router = express.Router()

router.post('/', schedulersController.getSchedulers)
