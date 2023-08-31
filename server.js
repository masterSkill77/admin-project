const express = require('express')
const multer = require('multer')

const app = express()

const upload = require('./multerMiddleware')
app.use(express.urlencoded({ extended: false }))
const frontendrouter = require('./routers/frontendrouter')
const adminrouter = require('./routers/adminrouter')
const mongoose = require('mongoose')
const rugs = require('./models/rugs')
const product = require('./models/product')
const slider = require('./models/slider')

const session = require('express-session')
mongoose.connect('mongodb://127.0.0.1:27017/shyam')


// start customize design(ruges)


// Set up Multer for handling file uploads

app.use(express.static('public'))
// Handle form submissions with file uploads
app.post('/api/submit', upload.single('designImage'), async (req, res) => {
    const { carpetName, length, width, yourName, yourEmail, yourMobileNumber } = req.body;
    const designImage = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        const newCarpet = new rugs({
            carpetName,
            designImage,
            carpetSize: { length, width },
            yourName,
            yourEmail,
            yourMobileNumber
        });
        await newCarpet.save();
        res.json({ message: 'Form submitted successfully!', carpet: newCarpet });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});

//end customize design

// add product api 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/productsi/'); // Change 'uploads/' to your desired upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const load = multer({ storage: storage });

// Create a new product
app.post('/products', load.fields([
    { name: 'frontImage', maxCount: 1 },
    { name: 'backImage', maxCount: 1 },
    { name: 'sideImage', maxCount: 1 },
]), async (req, res) => {
    try {
        const productData = req.body;
        productData.frontImage = req.files['frontImage'][0].filename.replace(/\\/g, '/');
        productData.backImage = req.files['backImage'][0].filename.replace(/\\/g, '/');
        productData.sideImage = req.files['sideImage'][0].filename.replace(/\\/g, '/');

        await product.create(productData);

        res.status(201).json("product success");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//add product api end 


// //slider api start
const storages = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/slider/'); // Change 'uploads/' to your desired upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const loadslider = multer({ storage: storages });


app.post('/slider', loadslider.fields([
    { name: 'img1', maxCount: 1 },
    { name: 'img2', maxCount: 1 },
    { name: 'img3', maxCount: 1 },
    { name: 'img4', maxCount: 1 },
    { name: 'img5', maxCount: 1 },
]), async (req, res) => {
    try {
        const sliderData = req.body;
        sliderData.img1 = req.files['img1'][0].filename.replace(/\\/g, '/');
        sliderData.img2 = req.files['img2'][0].filename.replace(/\\/g, '/');
        sliderData.img3 = req.files['img3'][0].filename.replace(/\\/g, '/');
        sliderData.img4 = req.files['img4'][0].filename.replace(/\\/g, '/');
        sliderData.img5 = req.files['img5'][0].filename.replace(/\\/g, '/');

        await slider.create(sliderData);

        res.status(201).json("product success");
      
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});



//slider api end






app.use(session({
    secret:'harsh',
    resave:false,
    saveUninitialized:true,
    cookie: {
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
            }
}))

// app.get('/logout', (req, res) => {
//     req.session.destroy(err => {
//         if (err) {
//             console.error('Error destroying session:', err);
//         } else {
//             res.redirect('/');
//         }
//     });
// });
app.use(frontendrouter)
app.use('/admin', adminrouter)

app.set('view engine', 'ejs')
app.listen(5000)

// app.use(session({
//     secret: 'your-secret-key',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
//     }
// }));