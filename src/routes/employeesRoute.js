const { Router } = require('express')
const { Employee } = require('../models/index.js')

const employeesRoute = Router()

employeesRoute
	.get('/', async (_, res) => {
		try {
			const employees = await Employee.findAll()
			res.status(200).json({ items: employees })
		} catch (error) {
			console.log(error);
			res.status(500).json("server has problems")
		}
	})

	.post('/', async (req, res) => {
		try {
			const { first_name, last_name, patronymic, position_id, phone } = req.body
			if (!(first_name || last_name || patronymic || position_id || phone)) {
				return res.status(204).json({ detail: "all fields are required" })
			}
			const newEmployee = await Employee.create({
				first_name,
				last_name,
				patronymic,
				position_id,
				phone
			})
			res.status(201).json(newEmployee)
		} catch (error) {
			console.log(error);
			res.status(500).json("server has problems")
		}
	})
	
	.delete('/', async (req, res) => {
		try {
			const { employeesId } = req.body
			if (!employeesId) return res.status(204).json({ detail: "param employeesId is required" })
			employeesId.forEach(async (id) => {
				await Employee.destroy({
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

module.exports = employeesRoute