const express = require('express')
const userController = require('../Controllers/userController')
const router = new express.Router()
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')

//register api
router.post('/register',userController.register) 

//login api
router.post('/login',userController.login)

//Add project Api - router specific middleware
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject) 

// get home project Api
router.get('/home-project',projectController.getHomeProject)  

// get all project Api - router specific middleware
router.get('/all-project',jwtMiddleware,projectController.getAllProject)  

// get user project Api - router specific middleware
router.get('/user-project',jwtMiddleware,projectController.getUserProject)



// update user
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

// upadate project 
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("profileImage"),projectController.editProject)

// remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)



module.exports = router