const { DataTypes } = require('sequelize')
const sequelize = require('../db.js')

const Book = sequelize.define(
	'books',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: DataTypes.CHAR(75),
		author: DataTypes.CHAR(50),
		description: DataTypes.STRING,
		cost: DataTypes.INTEGER,
		year: DataTypes.INTEGER,
		year: DataTypes.INTEGER,
		delivery_id: DataTypes.INTEGER,
		quantity: DataTypes.INTEGER,
	},
	{
		timestamps: false,
	}
)

const Employee = sequelize.define(
	'employees',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		last_name: DataTypes.CHAR(100),
		first_name: DataTypes.CHAR(100),
		patronymic: DataTypes.CHAR(100),
		position_id: DataTypes.INTEGER,
		phone: DataTypes.CHAR(20),
	},
	{
		timestamps: false,
	}
)

const Position = sequelize.define(
	'positions',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: DataTypes.CHAR(50),
		salary: {
			type: DataTypes.INTEGER,
			defaultValue: null
		}
	},
	{
		timestamps: false,
	}
)

const Customer = sequelize.define(
	'customers',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		last_name: DataTypes.CHAR(100),
		first_name: DataTypes.CHAR(100),
		patronymic: DataTypes.CHAR(100),
		email: DataTypes.CHAR(20),
		phone: DataTypes.CHAR(20)
	},
	{
		timestamps: false,
	}
)

const Purchaser = sequelize.define(
	'purchases',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		book_id: DataTypes.INTEGER,
		customer_id: DataTypes.INTEGER,
		date: DataTypes.DATE,
		employee_id: DataTypes.INTEGER,
		quantity: DataTypes.INTEGER
	},
	{
		timestamps: false,
	}
)

const Receipt = sequelize.define(
	'receipts',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		provider_id: DataTypes.INTEGER,
		date: DataTypes.DATE
	},
	{
		timestamps: false,
	}
)

const Suppliers = sequelize.define(
	'suppliers',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: DataTypes.CHAR(76),
		phone: DataTypes.CHAR(20),
		address: DataTypes.CHAR(50)
	},
	{
		timestamps: false,
	}
)

module.exports = {
	Book,
	Employee,
	Position,
	Customer,
	Purchaser,
	Receipt,
	Suppliers
}