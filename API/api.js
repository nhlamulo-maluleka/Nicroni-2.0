const { Router } = require('express');
const path = require('path');
const router = Router();

router.get("/cdn/:file", (req, res) => {
    const file = req.params.file
    // console.log(req.rawHeaders[7])
    res.sendFile(path.join(__dirname, '../CDN', file));
})

module.exports = router;