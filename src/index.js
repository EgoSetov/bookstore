import '../public/main.js'
import '../public/style.css'

import express from "express";
import path from 'path';

const __dirname = path.resolve();

import bookRoute from "./routes/bookRoute.js";
import customersRoute from "./routes/customersRoute.js";
import employeesRoute from "./routes/employeesRoute.js";
import positiosRoute from "./routes/positiosRoute.js";
import purchasesRoute from "./routes/purchasesRoute.js";
import receiptsRoute from "./routes/receiptsRoute.js";
import suppliersRoute from "./routes/suppliersRoute.js";

const PORT = 8000;
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json())

app.use('/api/books', bookRoute)
app.use('/api/employees', employeesRoute)
app.use('/api/positions', positiosRoute)
app.use('/api/customers', customersRoute)
app.use('/api/purchases', purchasesRoute)
app.use('/api/receipts', receiptsRoute)
app.use('/api/suppliers', suppliersRoute)

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
});
