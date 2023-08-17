const Resume = require("../resume/models/Resume");
const Apply = require("./Apply");

const validateApply = (req, res, next) => {
    let errors = {};
    if(!req.body.resumeId || req.body.resumeId.length == 0) 
        errors.resumeId = "Поле Резюме обязательное"
    if(!req.body.vacancyId || req.body.vacancyId.length == 0) 
        errors.vacancyId = "Поле Вакансия обязательное"    
    
    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfApply = async(req, res, next) => {
    try {
        const id = req.params.id 

        const apply = await Apply.findByPk(id)
    
        if(!apply) res.status(400).send({message: 'Apply with that id is not exist'})
        else {
            const resume = await Resume.findOne({
                where: {
                    id: apply.resumeId,
                    userId: req.user.id
                }
            });
        
            if (resume) {
                next();
            } else {
                res.status(403).send({ message: 'Access Forbidden' });
            }
            }    
    } catch (error) {
        res.status(500).send(error)
    }

}

const isApplyExists = async(req, res, next) => {
    try {
        const apply = await Apply.findByPk(req.body.applyId)

        if(!apply) res.status(400).send({message: 'Apply with that id is not exist'})
    
        req.body.id = apply.vacancyId
        next()    
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    validateApply,
    isAuthorOfApply,
    isApplyExists
}