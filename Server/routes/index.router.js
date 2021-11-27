const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

/**
 * @swagger
 * definitions:
 *  SetUser:
 *   type: object
 *   properties:
 *    firstName:
 *     type: string
 *     description: First name of the user
 *     example: 'Arkajyoti'
 *    lastName:
 *     type: string
 *     description: Last name of the user
 *     example: 'Saha'
 *    email:
 *     type: string
 *     description: Email address of the user
 *     example: 'arkajyotisaha98@gmail.com'
 *    password:
 *     type: string
 *     description: Password of the user account
 *     example: 'xyz_1234'
 *  
 *  GetUser:
 *   type: object
 *   properties:
 *    _id:
 *     type: string
 *     description: System generated unique Id of the user
 *    firstName:
 *     type: string
 *     description: First name of the user
 *     example: 'Arkajyoti'
 *    lastName:
 *     type: string
 *     description: Last name of the user
 *     example: 'Saha'
 *    fullName:
 *     type: string
 *     description: Full name of the user
 *     example: 'Arkajyoti Saha'
 *    email:
 *     type: string
 *     description: Email address of the user
 *     example: 'arkajyotisaha98@gmail.com'
 *    password:
 *     type: string
 *     description: Password of the user account
 *     example: 'xyz_1234'
 *    saltSecret:
 *     type: string
 *     description: System generated unique code
 */

/**
  * @swagger
  * /api/register:
  *  post:
  *   summary: register user
  *   description: register new user
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/SetUser'
  *   responses:
  *    200:
  *     description: User registered succesfully
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#/definitions/GetUser'
  *    422:
  *     description: User with this email address already exists.
  */
router.post('/register', ctrlUser.register);

/**
  * @swagger
  * /api/authenticate:
  *  post:
  *   summary: authenticate user
  *   description: authenticate registered user
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       type: object
  *       properties:
  *        email:
  *         type: string
  *         description: email address of the user
  *         example: 'arkajyotisaha98@gmail.com'
  *        password:
  *         type: string
  *         description: password of the user account
  *         example: 'xyz_1234'
  *   responses:
  *    200:
  *     description: User authenticated succesfully.
  *     content:
  *      application/json:
  *       schema:
  *        type: object
  *        properties:
  *         token:
  *          type: string
  *          description: System generated JWTtoken
  *    404:
  *     description: Unknown user or wrong password or missing credentials.
  */
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);


module.exports = router;