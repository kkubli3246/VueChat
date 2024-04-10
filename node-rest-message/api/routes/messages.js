const dboperations = require('../../dboperations');
const express = require('express');
const router = express.Router();




//Delete Message
router.delete('/',(req,res,next) =>{    
    let message = {... req.body}
    dboperations.deleteMessage(message).then(result => {
        console.log(result);
        res.status(202).json(result);
    })
})

//Update Message
router.put('/',(req,res,next) =>{    
    let message = {... req.body}
    dboperations.updateMessage(message).then(result => {
        console.log(result);
        res.status(204).json(result);
    })
})

module.exports = router;