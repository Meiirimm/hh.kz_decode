const express = require('express')
const router = express.Router();
const passport = require('passport');
const {isManager} = require('../auth/middlewares');
const {ValidateVacancy, isAuthorOfVacancy} = require('./middlewares')
const {getExperiences, createVacancy, getMyVacancies, getVacancy, deleteVacancy, editVacancy, searchVacancy} = require('./controllers')

router.get('/api/experiences' , getExperiences)

router.post('/api/vacancy' , passport.authenticate('jwt', {session: false}) , isManager, ValidateVacancy, createVacancy)
router.get('/api/vacancy' , passport.authenticate('jwt', {session: false}) , isManager, getMyVacancies)
router.get('/api/vacancy/search' , searchVacancy)
router.get('/api/vacancy/:id' , getVacancy)
router.delete('/api/vacancy/:id' ,passport.authenticate('jwt', {session: false}) , isManager, isAuthorOfVacancy, deleteVacancy)
router.put('/api/vacancy' ,passport.authenticate('jwt', {session: false}) , isManager, isAuthorOfVacancy, ValidateVacancy, editVacancy)


module.exports = router; 