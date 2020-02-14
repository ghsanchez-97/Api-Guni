'use strict'

var express = require('express');
var NewlettersController = require ('../controllers/newletters');
var api = express.Router();
var md_auth = require('../middlewares/authenticated');

api.post('/NewNewletters', md_auth.ensureAuth, NewlettersController.saveNewletters);
api.get('/getNewletters/:id', md_auth.ensureAuth, NewlettersController.getNewletters);
api.get('/getNewlettersPublic/:name', NewlettersController.getNewlettersPublic);
api.get('/getsNewletters/:page?', md_auth.ensureAuth, NewlettersController.getsNewletters);
api.get('/getsNewlettersPublic/:page?', NewlettersController.getsNewlettersPublic);
api.put('/updateNewletters/:id', md_auth.ensureAuth, NewlettersController.updateNewletters);
api.delete('/deleteNewletters/:id', md_auth.ensureAuth, NewlettersController.deleteNewletters);

module.exports = api;