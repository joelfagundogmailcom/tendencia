'use strict';

const router = require('express').Router();
const prefix = '';

const controller = require('../controllers/main.controller');
const logs = require('../controllers/logs');

router.get(`${prefix}/`, controller.all);
router.post(`${prefix}/`, controller.create);
router.get(`${prefix}/:id`, controller.info);
router.put(`${prefix}/:id`, controller.update);
router.delete(`${prefix}/:id`, controller.delete);

router.get(`${prefix}/`, logs.all);
router.post(`${prefix}/`, logs.create);
router.get(`${prefix}/:id`, logs.info);
router.put(`${prefix}/:id`, logs.update);
router.delete(`${prefix}/:id`, logs.delete);

module.exports = router;