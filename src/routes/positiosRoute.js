import { Router } from "express";
import { Position } from "../models/index.js";

const positiosRoute = Router()

positiosRoute
	.get('/', async (_, res) => {
		try {
			const positions = await Position.findAll()
			res.status(200).json({ items: positions })
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.post('/', async (req, res) => {
		try {
			const { name } = req.body
			if (!name) return res.status(204).json({ detail: "name field is required" })

			const validatePosition = await Position.findAll({
				attributes: ['id'],
				where: {
					name
				}
			})

			if (validatePosition[0]?.dataValues) {
				return res.status(302).json({ detail: "name is occupied" })
			}

			const newPOsition = await Position.create({
				name,
				salary
			})
			res.status(201).json(newPOsition)
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.delete('/', async (req, res) => {
		try {
			const { positionsId } = req.body
			if (!positionsId) return res.status(204).json({ detail: "id field is required" })
			positionsId.forEach(async (id) => {
				await Position.destroy({
					where: {
						id
					}
				})
			})
			res.status(200).json("successfully deleted")
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

export default positiosRoute