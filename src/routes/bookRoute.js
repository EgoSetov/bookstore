import { Router } from "express";
import { Book } from "../models/index.js";

const bookRoute = Router()

bookRoute
	.get('/', async (req, res) => {
		try {
			const books = await Book.findAll()
			res.status(200).json({ items: books })
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.post('/', async (req, res) => {
		try {
			const {
				title,
				author,
				description,
				cost,
				year,
				quantity
			} = req.body

			if (!(title || author || description || cost || year || quantity)) {
				return res.status(204).json({ detail: "all fields are required" })
			}

			const validateBooks = await Book.findAll({
				attributes: ['id'],
				where: {
					title
				}
			})

			if (validateBooks[0]?.dataValues) {
				return res.status(302).json({ detail: "name is occupied" })
			}

			const newBook = await Book.create({
				title,
				author,
				description,
				cost,
				year,
				quantity,
				delivery_id: 0
			})
			res.status(201).json(newBook.dataValues)
		} catch (error) {
			console.log(error);
			res.status(500).json('server has problems')
		}
	})

	.delete('/', async (req, res) => {
		try {
			const { BooksId } = req.body
			if (!BooksId) return res.status(204).json({ detail: "param BooksId is required" })
			BooksId.forEach(async (id) => {
				await Book.destroy({
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

export default bookRoute