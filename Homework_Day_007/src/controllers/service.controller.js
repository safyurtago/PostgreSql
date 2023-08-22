const serviceQuery = require('../queries/service.query')

const createService = async (req, res ) => {
    const {name, price} = req.body;
    const owner_id = req.userId

    const data = await serviceQuery.create(name, price, owner_id)
    res.status(201).json({message: "Service created successfully", data: data})
}

const getServices = async (req, res) => {
    const data = await serviceQuery.getAll()
    res.status(200).json({message: "Services found", data: data})
}

const getService = async (req, res) => {
    const {id} = req.params
    const data = await serviceQuery.getOne(id)
    res.status(200).json({message: "Service found", data: data})
}

const updateService = async (req, res) => {
    const {id} = req.params
    const {name, price} = req.body;
    const data = await serviceQuery.update(name, price, id)
    res.status(200).json({message: "Service updated successfully", data: data})
}

const deleteService = async (req, res) => {
    const {id} = req.params
    const data = await serviceQuery.delete(id)
    res.status(200).json({message: "Service deleted successfully", data: data})
}

module.exports = {
    createService,
    getServices,
    getService,
    updateService,
    deleteService
}