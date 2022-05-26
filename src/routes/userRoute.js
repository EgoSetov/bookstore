const { Router } = require("express");
const md5 = require("md5");
const JWT = require('jsonwebtoken')
const { User } = require("../models");

const userRoute = Router()

userRoute
	.post('/signin', async (req, res) => {
		try {
			const { login, password } = req.body
			if (!login || !password) return res.status(401).json({ detail: 'the login and password fields are mandatory' })

			const user = await User.findAll({
				attributes: ['id'],
				where: {
					login: login,
					password: md5(password)
				}
			})

			if (!user[0]?.dataValues?.id) return res.status(401).json({ detail: "invalid username or password" })
			const token = JWT.sign(user[0].dataValues, process.env['SECRET_KEY'])

			res.status(200).json({
				token
			})
		} catch (error) {
			res.status(500).json({
				detail: `Problems on the server ${error}`
			})
		}
	})

	.get('/connect', async (req, res) => {
		try {
			let token = req.headers.authorization
			if (!token) return res.status(401).json({ detail: 'authorization is required' })
			token = token.slice(7)
			const { id } = JWT.verify(token, process.env['SECRET_KEY'])
			if (!id) return res.status(401).json('Not authorized')

			const user = await User.findAll({ where: { id: id }, attributes: ["id", "login", "role"] })
			res.status(200).json(user[0]?.dataValues)
		} catch (error) {
			res.status(500).json({
				detail: `Problems on the server ${error}`
			})
		}

	})

module.exports = userRoute