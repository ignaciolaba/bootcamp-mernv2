const {Router} = require('express');
const { getChistes, getOneChiste, updateChiste, deleteChiste, createChiste } = require('../controllers/chistes');

const router = Router();

router.get('/get', getChistes)
router.get('/get/:id', getOneChiste)
router.post('/create', createChiste)
router.put('/update/:id', updateChiste)
router.delete('/delete/:id', deleteChiste)

module.exports = router
