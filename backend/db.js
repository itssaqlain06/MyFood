const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://saqi:saqi123@myfood.phlb4gp.mongodb.net/myfood?retryWrites=true&w=majority';

const mongoDbConnect = async () => {
    try {
        // UseNewUrlParser: This option is related to parsing MongoDB connection strings.
        // UseUnifiedTopology: This option enables the use of the new Server Discovery and Monitoring engine in the MongoDB Node.js driver.
        await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected Successfully!");

        const FoodItem = mongoose.model('food_items', new mongoose.Schema({}), 'food_items');
        const foodItemData = await FoodItem.find({});

        if (foodItemData.length === 0) {
            throw new Error('No food items found in the database.');
        }

        const FoodCategory = mongoose.model('foodCategory', new mongoose.Schema({}), 'foodCategory');
        const foodCategoryData = await FoodCategory.find({});

        if (foodCategoryData.length === 0) {
            throw new Error('No food categories found in the database.');
        }

        global.food_items = foodItemData;
        global.foodCategory = foodCategoryData;
    } catch (error) {
        console.error("Connection failed:", error);
    }
};

module.exports = mongoDbConnect;
