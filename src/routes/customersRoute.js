const { Router } = require('express')
const { Customer } = require('../models/index.js')

const customersRoute = Router()

customersRoute
	.get('/', async (_, res) => {
		try {
			const customers = await Customer.findAll()
			res.status(200).json({ items: customers })
		} catch (error) {
			console.log(error);
			res.status(500).json("server has problems")
		}
	})

	.post('/', async (req, res) => {
		try {
			const { first_name, last_name, patronymic, email, phone } = req.body
			if (!(first_name || last_name || patronymic || email || phone)) {
				return res.status(204).json({ detail: "all fields are required" })
			}
			const newCustomer = await Customer.create({
				first_name,
				last_name,
				patronymic,
				email,
				phone
			})
			res.status(201).json(newCustomer)
		} catch (error) {
			console.log(error);
			res.status(500).json("server has problems")
		}
	})

	.delete('/', async (req, res) => {
		try {
			const { customersId } = req.body
			if (!customersId) return res.status(204).json({ detail: "param customersId is required" })
			customersId.forEach(async (id) => {
				await Customer.destroy({
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

module.exports = customersRoute