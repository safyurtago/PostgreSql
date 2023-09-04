const { isValidObjectId } = require("mongoose");
const applyJob = require('../models/applyJob');
const isYourJob = require('../utils/isYourJob');
const Job = require('../models/jobs');

const create = async (req, res, next) => {
    try {
        const {job} = req.body;
        const user = req.user;

        const findJob = await Job.findById(job)
        console.log(findJob.user, user._id);
        if (await isYourJob.check(user, findJob)) { return res.status(400).json({message: 'You cannot apply your job'}); }

        const findApply = await applyJob.findOne({job, user});
        if (findApply) { return res.status(409).json({message: "You already applied for this job"}); }

        const newJob = await applyJob.create({job, user: user._id});
        res.status(201).json({message: "Job apply created successfully", job: newJob});

    } catch (error) {
        next(error);
    }
};
const findAll = async (req, res, next) => {
    try {
        const datas = await applyJob.find().populate('user').populate('job');
        res.status(200).json(datas)
    } catch (error) {
        next(error);
    }
};
const findOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await applyJob.findById(id);
        res.status(200).json(data)
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await applyJob.findById(id);
        if (!data.user == req.user._id) return res.status(401).json({message: 'You do not have permission to delete'});
        res.status(200).json({message: 'Deleted successfully'});
    } catch (error) {
        next(error);
    }
};


module.exports = {
    create, 
    findAll,
    findOne,
    deleteOne
}