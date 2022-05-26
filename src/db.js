const { prop } = require('cheerio/lib/api/attributes')
const { Sequelize } = require('sequelize')

const name = process.env['DB_NAME']
const login = process.env['DB_LOGIN']
const password = process.env['DB_PASSWORD']
const host = process.env['DB_HOST']
const dialect = process.env['DB_DIALECT']

const sequelize = new Sequelize(name, login, password, {
	host,
	dialect
})

const connect = async () => {
	try {
		await sequelize.authenticate()
		console.log('Соединение с БД было успешно установлено')
	} catch (e) {
		console.log('Невозможно выполнить подключение к БД: ', e)
	}
}

connect()

module.exports = sequelize