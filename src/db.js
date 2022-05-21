import { Sequelize } from "sequelize";

const sequelize = new Sequelize('bookstore', 'root', 'Bookstore123', {
	host: 'localhost',
	dialect: "mysql"
})

try {
	await sequelize.authenticate()
	console.log('Соединение с БД было успешно установлено')
} catch (e) {
	console.log('Невозможно выполнить подключение к БД: ', e)
}

export default sequelize