const CustomError = require('../utils/custom-error');
const jobValidator = require('../validations/job.validation');
const Job = require('../models/jobs');
const { isValidObjectId } = require('mongoose');


const createJob = async (req, res, next) => {
    try {
        const {title, description, category} = req.body;

        const user_id = req.user.id;
        
        if (!isValidObjectId(user_id)) { return res.status(401).json({message: 'Invalid object ID provided'}); };

        const resultValidation = await jobValidator.create({title, description});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400)};

        const newJob = await Job.create({title, description, user: user_id, category})
        res.status(201).json({message: "Job created successfully", newJob});
    } catch (error) {
        console.log(error);
        next(error);
    }
};
const findAllJobs = async (req, res, next) => {
    try {
        const {category, name} = req.query;
        const filter = {};
        if (category) {
            filter.category = category;
        }
        // if (name) {
        //     filter.name = name;
        // }

        const jobs = await Job.find(filter).populate('user').populate('category');
        res.status(200).json({message: 'Jobs found successfully', jobs});

    } catch (error) {
        console.log(error);
        next(error);
    }
};
const findOneJob = async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await Job.findById(id).populate('user').populate('category');
        res.status(200).json({message: "Category found", category});
    } catch (error) {
        next(error);
    }
};
const updateJob = async (req, res, next) => {
    try {
        const {title, description, category} = req.body;

        const user_id = req.user.id;
        
        if (!isValidObjectId(user_id)) { return res.status(401).json({message: 'Invalid object ID provided'}); };

        const resultValidation = await jobValidator.create({title, description});
        if (resultValidation.error) { throw new CustomError(resultValidation.error.message, 400)};

        await Job.updateOne({title, description, user: user_id, category})
        res.status(200).json({message: "Job updated successfully"});
    } catch (error) {
        next(error);
    }
};
const deleteJob = async (req, res, next) => {
    try {
        const {id} = req.params;

        const user_id = req.user.id;
        const category1 = await Job.findOne({user: user_id})
        if (!category1) { return res.status(404).json({message: 'You did not upload this job'}) }
        const category = await Job.deleteOne({_id: id});
        res.status(200).json({message: "Category deleted", category});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    createJob,
    findAllJobs,
    findOneJob,
    updateJob,
    deleteJob,
}