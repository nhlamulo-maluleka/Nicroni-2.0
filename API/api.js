const { Router } = require('express');
const path = require('path');
const router = Router();

router.get("/cdn", (_, res) => {
    res.sendFile(path.join(__dirname, '../', 'CDN', 'nicroni.min.js'));
})

router.get("/functions", (_, res) => {
    res.sendFile(path.join(__dirname, '../', 'CDN', 'functions.js'))
})

router.get("/helpers", (_, res) => {
    res.sendFile(path.join(__dirname, '../', 'CDN', 'helpers.js'))
})

module.exports = router;