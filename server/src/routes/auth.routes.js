import express from 'express';
import { signup, signin, google } from '../controllers/auth.controllers.js';

const routers = express.Router();

routers.post('/signup', signup)
routers.post('/signin', signin);
routers.post('/google', google)

export default routers;