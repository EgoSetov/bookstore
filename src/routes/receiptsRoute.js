import { Router } from "express";
import sequelize from "../db.js";
import { Receipt } from "../models/index.js";

const receiptsRoute = Router()

receiptsRoute
	.get('/', async (_, res) => {
		try {
			const receipts = await sequelize.query(`
				SELECT *, receipts.id AS receiptsID FROM receipts 
				JOIN (
					SELECT *, suppliers.id AS providerID FROM suppliers
				) AS S ON receipts.provider_id = providerID
			`)
			res.status(200).json({ items: receipts[0] })
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.post('/', async (req, res) => {
		try {
			const { providerId } = req.body
			if (!providerId) return res.status(204).json({ detail: "providerId field is required" })

			const newReceipts = await Receipt.create({
				provider_id: providerId,
				date: Date()
			})

			res.status(201).json(newReceipts)
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.delete('/', async (req, res) => {
		try {
			const { receiptsId } = req.body
			if (!receiptsId) return res.status(204).json({ detail: "id field is required" })
			receiptsId.forEach(async (id) => {
				await Receipt.destroy({
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

export default receiptsRoute