const usedServiceQuery = require('../queries/useService.query')
const serviceQuery = require('../queries/service.query')
const userQuery = require('../queries/auth.query')

const createUseService = async (req, res) => {
    try {
        const {service_id} = req.body

        if (!service_id) { return res.status(400).json({message: "/service_id is required"}); }

        await usedServiceQuery.begin()
        
        const findQuery = await serviceQuery.getOne(service_id)
        const owner_id = findQuery.owner_id
        const price = findQuery.price
        const customer_id = req.userId

        const customer = await userQuery.findId(customer_id)
        const customer_balance = customer.balance
        if (+customer_balance < +price ) return res.status(400).json({message: 'Your balance is not enough'})
        await userQuery.decrease( price, customer_id)
        await userQuery.increase( price, owner_id)

        await usedServiceQuery.create(service_id, customer_id)

        await usedServiceQuery.commit()

        res.status(201).json({message: "Successfull transaction"})

    } catch (error) {
        await usedServiceQuery.rollback()
        res.status(400).json({message: "Transaction failed"})
    }
};

const getUseServices = async (req, res) => {
    const data = await usedServiceQuery.getAll()
    res.status(200).json({message: "Success", data})
};

const getUseService = async (req, res) => {
    const {id} = req.params
    const data = await usedServiceQuery.getOne(id)
    res.status(200).json({message: "Success", data})
};



module.exports = {
    createUseService,
    getUseServices,
    getUseService
}