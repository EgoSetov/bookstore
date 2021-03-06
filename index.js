const express = require('express')
const path = require('path')
require('dotenv').config()

const bookRoute = require('./src/routes/bookRoute.js')
const customersRoute = require('./src/routes/customersRoute.js')
const employeesRoute = require('./src/routes/employeesRoute.js')
const positiosRoute = require('./src/routes/positiosRoute.js')
const purchasesRoute = require('./src/routes/purchasesRoute.js')
const receiptsRoute = require('./src/routes/receiptsRoute.js')
const suppliersRoute = require('./src/routes/suppliersRoute.js')
const userRoute = require('./src/routes/userRoute.js')

const PORT = 8000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json())

app.use('/api/books', bookRoute)
app.use('/api/employees', employeesRoute)
app.use('/api/positions', positiosRoute)
app.use('/api/customers', customersRoute)
app.use('/api/purchases', purchasesRoute)
app.use('/api/receipts', receiptsRoute)
app.use('/api/suppliers', suppliersRoute)
app.use('/api/users', userRoute)

app.get("/", (_, res) => res.sendFile('/index.html', { root: 'public' }))
app.get("/books", (_, res) => res.sendFile('/books.html', { root: 'public' },))
app.get("/employees", (_, res) => res.sendFile('/employees.html', { root: 'public' },))
app.get("/positions", (_, res) => res.sendFile('/positions.html', { root: 'public' },))
app.get("/customers", (_, res) => res.sendFile('/customers.html', { root: 'public' },))
app.get("/purchases", (_, res) => res.sendFile('/purchases.html', { root: 'public' },))
app.get("/receipts", (_, res) => res.sendFile('/receipts.html', { root: 'public' },))
app.get("/suppliers", (_, res) => res.sendFile('/suppliers.html', { root: 'public' },))

app.listen(PORT, () => {
	console.log(`the server is started on the port = ${PORT}`);
	console.log(process.env.DB_CONFIG);
});
