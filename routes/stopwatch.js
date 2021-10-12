const express = require("express");
const stopwatchController = require("../controller/stopwatch")

const router = express.Router();

router.post('/createStopwatch', stopwatchController.createStopwatch)
router.get('/getStopwatch/:id', stopwatchController.getStopwatch)
router.get('/getStopwatchTimestamp/:id', stopwatchController.getStopwatchTimestamp)
router.get('/getStopwatch/:id', stopwatchController.getStopwatchName)
router.get('/getStopwatchTimestamp/:id', stopwatchController.getStopwatchStatus)

module.exports = router