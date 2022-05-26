const { Router } = require('express')
const { Supplier } = require('../models/index.js')

const suppliersRoute = Router()

suppliersRoute
	.get('/', async (_, res) => {
		try {
			const suppliers = await Supplier.findAll()
			res.status(200).json({ items: suppliers })
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.post('/', async (req, res) => {
		try {
			const { name, phone, address } = req.body
			if (!(name || phone || address)) return res.status(204).json({ detail: "name, phone, address field is required" })

			const newSuppliers = await Supplier.create({
				name,
				phone,
				address
			})

			res.status(201).json(newSuppliers)
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.delete('/', async (req, res) => {
		try {
			const { suppliersId } = req.body
			if (!suppliersId) return res.status(204).json({ detail: "id field is required" })
			suppliersId.forEach(async (id) => {
				await Supplier.destroy({
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

module.exports = suppliersRoute