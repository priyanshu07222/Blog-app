import express from 'express';
import { signup, signin } from '../controllers/auth.controllers.js';

const routers = express.Router();

routers.post('/signup', signup)
routers.post('/signin', signin)

export default routers;