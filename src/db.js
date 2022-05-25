const { Sequelize } = require('sequelize') 

const sequelize = new Sequelize('bookstore', 'root', 'Bookstore123', {
	host: 'localhost',
	dialect: "mysql"
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