
const modal = new bootstrap.Modal('#modal')
document.addEventListener('DOMContentLoaded', () => {
	const inputPhoneCustomer = document.querySelector('input#phoneCustomer')
	const inputPhoneEmployee = document.querySelector('input#phoneEmployee')

	const maskOptionsCustomer = { mask: '{8}-000-000-00-00' }
	const maskOptionsEmployee = { mask: '{495}-00-00' }
	if (window.location.href === 'http://localhost:8000/employees') {
		IMask(inputPhoneEmployee, maskOptionsEmployee)
	}
	else if (window.location.href === 'http://localhost:8000/customers' || window.location.href === 'http://localhost:8000/suppliers') {
		IMask(inputPhoneCustomer, maskOptionsCustomer)
	}


})

const booksMethods = {
	async getBooks() {
		try {
			await fetch('http://localhost:8000/api/books')
				.then(data => data.json())
				.then(data => this.books = data.items)
		} catch (error) {
			console.log(error);
		}
	},
	async addBook() {
		try {
			const res = await fetch('http://localhost:8000/api/books', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(this.forms.book)
			})
				.then(data => data.json())

			if (res.title) {
				this.books = [res, ...this.books]
				this.closeModals()
			}
			else if (res?.detail === 'name is occupied') {
				alert('Книга с таким названием уже есть')
			}
			else {
				alert('Не удалось добавить книгу')
			}
		} catch (error) {
			console.log(error);
			alert('Не удалось добавить книгу')
		}

	},
	async removeBooks() {
		try {
			if (!this.deleteItemsId.length) return this.modal.visibleCheckBox = false
			const res = await fetch('http://localhost:8000/api/books', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					BooksId: this.deleteItemsId
				})
			})
				.then(data => data.json())

			if (res?.detail) return alert("Не удалось удалить книгу")

			this.deleteItemsId.forEach(id => {
				this.books = this.books.filter(book => book.id !== id)
			})
			this.modal.visibleCheckBox = false

		} catch (error) {
			console.log(error);
		}
	}
}

const employeesMethods = {
	async getEmployees() {
		try {
			await fetch('http://localhost:8000/api/employees')
				.then(data => data.json())
				.then(data => this.employees = data.items)
		} catch (error) {
			console.log(error);
		}
	},
	async addEmployee() {
		try {
			const res = await fetch('http://localhost:8000/api/employees', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					first_name: this.form.employee.FIO.split(' ')[1],
					last_name: this.form.employee.FIO.split(' ')[0],
					patronymic: this.form.employee.FIO.split(' ')[2],
					phone: this.form.employee.phone,
					position_id: this.form.employee.position_id
				})
			})
				.then(data => data.json())

			if (res.first_name) {
				this.employees = [res, ...this.employees]
				this.closeModals()
			}
			else {
				alert('Не удалось добавить сотрудника')
			}
		} catch (error) {
			console.log(error);
			alert('Не удалось добавить сотрудника')
		}
	},
	async removeEmployee() {
		try {
			if (!this.deleteItemsId.length) return this.modal.visibleCheckBox = false
			const res = await fetch('http://localhost:8000/api/employees', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					employeesId: this.deleteItemsId
				})
			})
				.then(data => data.json())

			if (res?.detail) return alert("Не удалось удалить сотрудника")

			this.deleteItemsId.forEach(id => {
				this.employees = this.employees.filter(employee => employee.id !== id)
			})
			this.modal.visibleCheckBox = false

		} catch (error) {
			console.log(error);
			alert("Не удалось удалить сотрудника")
		}
	}
}

const positionsMethods = {
	async getPositions() {
		try {
			await fetch('http://localhost:8000/api/positions')
				.then(data => data.json())
				.then(data => this.positions = data.items)
		} catch (error) {
			console.log(error);
		}
	},
	async addPosition() {
		try {
			const res = await fetch('http://localhost:8000/api/positions', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: this.form.position.name[0].toUpperCase() + this.form.position.name.slice(1),
					salary: this.form.position.salary || null
				})
			})
				.then(data => data.json())

			if (res?.name) {
				this.positions = [res, ...this.positions]
				this.closeModals()
			}
			else if (res?.detail === 'name is occupied') {
				alert('Должность с таким названием уже существует')
			}
			else {
				alert('Не удалось добавить должность')
			}
		} catch (error) {
			console.log(error);
			alert('Не удалось добавить должность')
		}
	},
	async removePosition() {
		try {
			if (!this.deleteItemsId.length) return this.modal.visibleCheckBox = false
			const res = await fetch('http://localhost:8000/api/positions', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					positionsId: this.deleteItemsId
				})
			})
				.then(data => data.json())

			if (res?.detail) return alert("Не удалось удалить должность")

			this.deleteItemsId.forEach(id => {
				this.positions = this.positions.filter(position => position.id !== id)
			})
			this.modal.visibleCheckBox = false

		} catch (error) {
			console.log(error);
			alert("Не удалось удалить должность")
		}
	},
	getPositionName(id) {
		return this.positions?.filter(position => position.id === id)[0]?.name
	}
}

const customersMethods = {
	async getCustomers() {
		try {
			await fetch('http://localhost:8000/api/customers')
				.then(data => data.json())
				.then(data => this.customers = data.items)
		} catch (error) {
			console.log(error);
		}
	},
	async addCustomer() {
		try {
			const res = await fetch('http://localhost:8000/api/customers', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					first_name: this.form.customer.FIO.split(' ')[1],
					last_name: this.form.customer.FIO.split(' ')[0],
					patronymic: this.form.customer.FIO.split(' ')[2],
					email: this.form.customer.email,
					phone: this.form.customer.phone
				})
			})
				.then(data => data.json())

			if (res?.first_name) {
				this.customers = [res, ...this.customers]
				this.closeModals()
			}
			else {
				alert('Не удалось добавить клиента')
			}
		} catch (error) {
			console.log(error);
			alert('Не удалось добавить клиента')
		}
	},
	async removeCustomer() {
		try {
			if (!this.deleteItemsId.length) return this.modal.visibleCheckBox = false
			const res = await fetch('http://localhost:8000/api/customers', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					customersId: this.deleteItemsId
				})
			})
				.then(data => data.json())

			if (res?.detail) return alert("Не удалось удалить клиента")

			this.deleteItemsId.forEach(id => {
				this.customers = this.customers.filter(customer => customer.id !== id)
			})
			this.modal.visibleCheckBox = false

		} catch (error) {
			console.log(error);
			alert("Не удалось удалить клиента")
		}
	}
}

const purchasesMethods = {
	async getPurchases() {
		try {
			await fetch('http://localhost:8000/api/purchases')
				.then(data => data.json())
				.then(data => this.purchases = data.items)
		} catch (error) {
			console.log(error);
		}
	},
	async addPurchaser() {
		try {
			const res = await fetch('http://localhost:8000/api/purchases', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					quantity: this.form.purchaser.quantity,
					book_id: this.form.purchaser.book_id,
					employee_id: this.form.purchaser.employee_id,
					customer_id: this.form.purchaser.customer_id,
				})
			})
				.then(data => data.json())

			if (res?.quantity) {
				this.closeModals()
				await this.getPurchases()
			}
			else {
				alert('Не удалось добавить клиента')
			}
		} catch (error) {
			console.log(error);
			alert('Не удалось добавить клиента')
		}
	},
	async removePurchaser() {
		try {
			if (!this.deleteItemsId.length) return this.modal.visibleCheckBox = false
			const res = await fetch('http://localhost:8000/api/purchases', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					purchasesId: this.deleteItemsId
				})
			})
				.then(data => data.json())

			if (res?.detail) return alert("Не удалось удалить клиента")

			this.deleteItemsId.forEach(id => {
				this.purchases = this.purchases.filter(purchase => purchase.id !== id)
			})
			this.modal.visibleCheckBox = false

		} catch (error) {
			console.log(error);
			alert("Не удалось удалить клиента")
		}
	}
}

const receiptsMethods = {
	async getReceipts() {
		try {
			await fetch('http://localhost:8000/api/receipts')
				.then(data => data.json())
				.then(data => this.receipts = data.items)
		} catch (error) {
			console.log(error);
		}
	},
	async addReceipt() {
		try {
			const res = await fetch('http://localhost:8000/api/receipts', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					providerId: this.form.receipt.providerId
				})
			})
				.then(data => data.json())

			if (res?.date) {
				this.closeModals()
				await this.getReceipts()
			}
			else {
				alert('Не удалось добавить поступление')
			}
		} catch (error) {
			console.log(error);
			alert('Не удалось добавить поступление')
		}
	},
	async removeReceipt() {
		try {
			if (!this.deleteItemsId.length) return this.modal.visibleCheckBox = false
			const res = await fetch('http://localhost:8000/api/receipts', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					receiptsId: this.deleteItemsId
				})
			})
				.then(data => data.json())

			if (res?.detail) return alert("Не удалось удалить клиента")

			this.deleteItemsId.forEach(id => {
				this.receipts = this.receipts.filter(receipt => receipt.receiptsID !== id)
			})
			this.modal.visibleCheckBox = false

		} catch (error) {
			console.log(error);
			alert("Не удалось удалить клиента")
		}
	}
}

const suppliersMethods = {
	async getSuppliers() {
		try {
			await fetch('http://localhost:8000/api/suppliers')
				.then(data => data.json())
				.then(data => this.suppliers = data.items)
		} catch (error) {
			console.log(error);
		}
	},
	async addSupplier() {
		try {
			const res = await fetch('http://localhost:8000/api/suppliers', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: `${this.form.supplier.name.split(' ')[0]} "${this.form.supplier.name.split(' ')[1]}"`,
					phone: this.form.supplier.phone,
					address: this.form.supplier.address
				})
			})
				.then(data => data.json())

			if (res?.name) {
				this.suppliers = [res, ...this.suppliers]
				this.closeModals()
			}
			else {
				alert('Не удалось добавить клиента')
			}
		} catch (error) {
			console.log(error);
			alert('Не удалось добавить клиента')
		}
	},
	async removeSupplier() {
		try {
			if (!this.deleteItemsId.length) return this.modal.visibleCheckBox = false
			const res = await fetch('http://localhost:8000/api/suppliers', {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					suppliersId: this.deleteItemsId
				})
			})
				.then(data => data.json())

			if (res?.detail) return alert("Не удалось удалить клиента")

			this.deleteItemsId.forEach(id => {
				this.suppliers = this.suppliers.filter(supplier => supplier.id !== id)
			})
			this.modal.visibleCheckBox = false

		} catch (error) {
			console.log(error);
			alert("Не удалось удалить клиента")
		}
	}
}

let app = new Vue({
	el: '#app',
	data: {
		deleteItemsId: [],
		modal: {
			visibleCheckBox: false,
			addModal: false
		},
		positions: [],
		employees: [],
		books: [],
		customers: [],
		purchases: [],
		receipts: [],
		suppliers: [],
		form: {
			employee: {
				FIO: '',
				phone: '',
				position_id: ''
			},
			position: {
				name: '',
				salary: ''
			},
			book: {
				title: '',
				author: '',
				description: '',
				cost: '',
				year: '',
				quantity: ''
			},
			customer: {
				FIO: '',
				email: '',
				phone: ''
			},
			purchaser: {
				quantity: '',
				book_id: '',
				employee_id: '',
				customer_id: ''
			},
			receipt: {
				providerId: ''
			},
			supplier: {
				name: '',
				phone: '',
				address: ''
			}
		}
	},
	methods: {
		...booksMethods,
		...employeesMethods,
		...positionsMethods,
		...customersMethods,
		...purchasesMethods,
		...receiptsMethods,
		...suppliersMethods,
		closeModals() {
			this.modal.addModal = false
			modal.hide()
		},
		pushIdForDelete(id) {
			if (this.deleteItemsId.includes(id)) {
				this.deleteItemsId = this.deleteItemsId.filter(bookId => bookId != id)
			} else {
				this.deleteItemsId.push(id)
			}
		},
		showCheckBox() {
			this.modal.visibleCheckBox = !this.modal.visibleCheckBox
			this.deleteItemsId = []
		},
		showModal() {
			this.modal.addModal = !this.modal.addModal
			modal.show()
		}
	},
	mounted() {
		(async () => {
			if (window.location.href === 'http://localhost:8000/books') {
				await this.getBooks()
			}
			else if (window.location.href === 'http://localhost:8000/employees') {
				await this.getEmployees()
				await this.getPositions()
			}
			else if (window.location.href === 'http://localhost:8000/positions') {
				await this.getPositions()
			}
			else if (window.location.href === 'http://localhost:8000/customers') {
				await this.getCustomers()
			}
			else if (window.location.href === 'http://localhost:8000/purchases') {
				await this.getPurchases()
			}
			else if (window.location.href === 'http://localhost:8000/receipts') {
				await this.getReceipts()
				await this.getSuppliers()
			}
			else if (window.location.href === 'http://localhost:8000/suppliers') {
				await this.getSuppliers()
			}
		})()
	}
})

