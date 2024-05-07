import express from 'express';
import { signup } from '../controllers/auth.controllers.js';

const routers = express.Router();

routers.post('/signup', signup)

export default routers;