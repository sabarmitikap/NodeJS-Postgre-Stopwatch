const express = require("express");
const stopwatchController = require("../controller/stopwatch")

const router = express.Router();

router.post('/createStopwatch', stopwatchController.createStopwatch)
router.get('/getStopwatch/:id', stopwatchController.getStopwatch)
router.get('/getStopwatchTimestamp/:id', stopwatchController.getStopwatchTimestamp)
router.get('/getStopwatchName/:id', stopwatchController.getStopwatchName)
router.get('/getStopwatchStatus/:id', stopwatchController.getStopwatchStatus)

module.exports = router