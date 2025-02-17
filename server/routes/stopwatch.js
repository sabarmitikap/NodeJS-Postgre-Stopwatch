const express = require("express");
const stopwatchController = require("../controller/stopwatch")

const router = express.Router();
//create
router.post('/createStopwatch', stopwatchController.createStopwatch)

//read
router.get('/getStopwatch/:id', stopwatchController.getStopwatch)
router.get('/getStopwatchTimestamp/:id', stopwatchController.getStopwatchTimestamp)
router.get('/getStopwatch/:id', stopwatchController.getStopwatchStatus)
router.get('/getStopwatchName/:id', stopwatchController.getStopwatchName);
router.get('/getRunningStopwatchID', stopwatchController.getRunningStopwatchID);
router.get('/getAllStopwatch', stopwatchController.getAllStopwatch);
//update
router.put('/updateStopwatchTimestamp/:id', stopwatchController.updateStopwatchTimestamp)
router.put('/updateStopwatchLastTimestamp/:id', stopwatchController.updateStopwatchLastTimestamp)
router.put('/updateStopwatchName/:id', stopwatchController.updateStopwatchName)
router.put('/updateStopwatchStatus/:id', stopwatchController.updateStopwatchStatus)
//delete

router.delete('/deleteStopwatchByID/:id', stopwatchController.deleteStopwatchByID)

module.exports = router