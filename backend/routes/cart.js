const router =require('express').Router();
const cartController = require('../controllers/cartController');


router.get("/find/:id", cartController.getcart);
router.post("/add/:id", cartController.addTocart);
router.post("/quantity", cartController.decrementCartItem);
router.delete('/:userId/:cartItemId', cartController.deleteCartItem);
router.get("/count/:id", cartController.countCartItems);


module.exports = router;