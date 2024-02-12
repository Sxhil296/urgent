// index.js
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
// const authRoutes = require('./routes/auth');
// const contactRoutes = require('./routes/contact');

// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/contact', contactRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const connectDB=async()=>{
    try {
        await mongoose.connect
    } catch (error) {
        console.log(error);
    }
}
app.listen(5000,()=>{
    console.log("server started");
})