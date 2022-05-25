const { Router } = require('express')
const { Purchaser } = require('../models/index.js')
const sequelize = require('../db.js')

const purchasesRoute = Router()

purchasesRoute
	.get('/', async (_, res) => {
		try {
			const purchases = await sequelize.query(`
				SELECT * FROM purchases
				JOIN (
					SELECT books.title AS bookTitle, books.id AS bookID FROM books
				) AS B ON purchases.book_id = bookID
				JOIN (
					SELECT customers.patronymic AS customers_patronymic, customers.last_name AS customers_last_name, customers.first_name AS customers_first_name, customers.id AS customerID FROM customers
				) AS C ON purchases.customer_id = customerID
				JOIN (
					SELECT employees.patronymic AS employees_patronymic, employees.last_name AS employees_last_name, employees.first_name AS employees_first_name, employees.id AS employeeID FROM employees
				) AS E ON purchases.employee_id = employeeID
			`)

			res.status(200).json({ items: purchases[0] })
		} catch (error) {
			console.log(error);
			res.status(500).json("server has problems")
		}
	})

	.post('/', async (req, res) => {
		try {
			const { quantity, book_id, employee_id, customer_id } = req.body
			if (!(quantity || book_id || employee_id || customer_id)) {
				return res.status(204).json({ detail: "all fields are required" })
			}
			const newPurchaser = await Purchaser.create({
				quantity,
				book_id,
				employee_id,
				customer_id,
				date: Date()
			})
			res.status(201).json(newPurchaser)
		} catch (error) {
			console.log(error);
			res.status(500).json("server has problems")
		}
	})

	.delete('/', async (req, res) => {
		try {
			const { purchasesId } = req.body
			if (!purchasesId) return res.status(204).json({ detail: "param purchasesId is required" })
			purchasesId.forEach(async (id) => {
				await Purchaser.destroy({
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

module.exports = purchasesRoute
