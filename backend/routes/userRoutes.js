import express from "express";
const router = express.Router()
import {
    authUser,
    getUserProfile,
    registeruser,
    updateUserProfile,
    getUsers,
    deleteUser,
    updateUser,
    getUserById
    
} from '../contollers/userController.js'
import {protect,admin} from '../middleware/authMiddleware.js'

router.route('/').post(registeruser).get(protect,admin,getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile)
router.route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserById)
    .put(protect,admin, updateUser)


export default router