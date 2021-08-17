const express = require('express');
const {createUser,login,getAllUsers,updateUser,deleteUser} = require('../controllers/userController');
const {createChild,getAllChilds,deleteChild,updateChild,Payment} = require('../controllers/childController');
const {createEvent,getAllEvents,deleteEvent,deleteDay} = require('../controllers/eventController');
const {createProduct,getAllProducts,deleteProd,updateProduct,addToCart,getUser,RemoveFromCart,Pay,totalPrice}= require('../controllers/productController');
const {createFood,getAllFoods,deleteFood,deleteMenu} = require('../controllers/menuController');
const {addPhoto,getGalery,deletePhoto,deleteGalery} = require('../controllers/galeryController');

const router = express.Router();

//user routesASDASDASD
router.post('/user', createUser);//create new user (register)****** ok
router.get('/users', getAllUsers);//get all users ****** ok
router.post('/user/:id', updateUser);//update user type ***** ok
router.delete('/user/:id', deleteUser);//delete user ***** ok
router.get('/user/:email/:password',login);//login ***** ok
router.get('/user/:id',getUser);//get user ***** ok

//child routes
router.post('/child/:id', createChild);//adding new child to camp **** ok
router.get('/children', getAllChilds);//get all children ***** ok
router.delete('/child/:Uid/:Cid', deleteChild);//delet child from user list ***** ok
router.post('/childId/:idChild', updateChild);// update child ***** ok
router.get('/childPay/:id',Payment);


//event routes
router.post('/event', createEvent);//create new Events for day ***** ok
router.get('/events', getAllEvents);//get all days and events ***** ok
router.delete('/event/:Eid/:Did', deleteEvent);//delete event in day ***** ok
router.delete('/event/:id',deleteDay);//delete all day ***** ok

//product routes
router.post('/product', createProduct);//create new product ***** ok
router.get('/product', getAllProducts);// get all products ***** ok
router.delete('/product/:id', deleteProd);// delete product ***** ok
router.post('/product/:id', updateProduct);
router.get('/product/:uId/:pId', addToCart);// add product to user cart ***** ok
router.get('/price/:ID', totalPrice);// get total cart ***** ok
router.delete('/product/:Uid/:Pid',RemoveFromCart);// remove product from cart ***** ok
router.get('/cart/:id',Pay);// pay for protucts and clear the cart *****ok

//menu routes
router.post('/menu', createFood);//create new food for menu ***** ok
router.get('/menu', getAllFoods);//get all days and events ***** ok
router.delete('/menu/:Fid/:Did', deleteFood);// delete food in menu ***** ok
router.delete('/menu/:id',deleteMenu); // delete all day menu ***** ok

//galery routes
router.post('/photo', addPhoto);//add photo to day ********ok
router.get('/photo', getGalery); // get all photos by days ***** ok
router.delete('/photo/:Gid/:Pid', deletePhoto); //delete photo ***** ok
router.delete('/photo/:id',deleteGalery); //delete the all day *****ok

module.exports = {
    routes: router
}