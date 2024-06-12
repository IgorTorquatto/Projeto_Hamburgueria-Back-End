//Framework
const express = require('express')
const uuid = require('uuid')

const port = 3001
const app = express()

app.use(express.json())

//save orders
const orders = []

// we can add middleware for code reusability here

//creating the routes
app.get('/orders', (req, res) => {
    return res.json(orders)
})

app.post('/orders', (req, res) => {
    try {
        const { order, name } = req.body

        //creating new order
        const newOrder = { id: uuid.v4(), order, name }
        orders.push(newOrder)

        return res.status(201).json(newOrder)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
})

app.delete('/orders/:id', (req, res) => {
    const { id } = req.params  //params comes in the url
    const index = orders.findIndex(order => order.id === id) // scroll through the list of orders until you find the item order.id === id

    if (index < 0) {
        return response.status(404).json({ error: "Order not found" }) // if index == -1 this id does not exist in orders
    }

    orders.splice(index, 1)

    return res.status(204).json()
})

//Run server
app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})