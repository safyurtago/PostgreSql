class checkJobOwner {
    static async check (jobOwner, job) {
        if (job.user == jobOwner._id) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = checkJobOwner;