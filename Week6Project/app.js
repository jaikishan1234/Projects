
const express = require('express');
const mongoose = require('mongoose');


const app = express();


app.use(express.json());


mongoose.connect('mongodb://localhost/food-nutrition', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: { type: String, required: true },
  description: String,
  nutritionalInformation: {
    calories: Number,
    macronutrients: {
      protein: Number,
      fat: {
        total: Number,
        saturated: Number,
        unsaturated: Number,
        transFat: Number,
      },
      carbohydrates: {
        total: Number,
        sugar: Number,
      },
    },
    micronutrients: {
      vitaminA: Number,
      vitaminC: Number,
      vitaminD: Number,
      iron: Number,
      calcium: Number,
      potassium: Number,
      
    },
    fiber: Number,
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: String,
  certifications: [String],
  countryOfOrigin: String,
  brand: String,
  dietaryRestrictions: [String],
  healthBenefits: String,
  bestPractices: String,
});


const FoodItem = mongoose.model('FoodItem', foodItemSchema);


const sampleFoodItems = [
  {
    name: 'Apple',
    foodGroup: 'Fruit',
    description: 'A crisp and juicy red apple.',
    nutritionalInformation: {
      calories: 95,
      macronutrients: {
        protein: 0.5,
        fat: {
          total: 0.3,
          saturated: 0.1,
          unsaturated: 0.2,
          transFat: 0,
        },
        carbohydrates: {
          total: 25.1,
          sugar: 19.1,
        },
      },
      micronutrients: {
        vitaminA: 98,
        vitaminC: 8.4,
        vitaminD: 0,
        iron: 0.2,
        calcium: 10,
        potassium: 195,
      },
      fiber: 4.4,
      sodium: 2,
      cholesterol: 0,
    },
    servingSize: '1 medium apple',
    allergens: [],
    ingredients: ['Apple'],
    preparationMethods: 'Wash and eat fresh, or use in baking, salads, or other recipes.',
    certifications: ['Non-GMO'],
    countryOfOrigin: 'USA',
    brand: null,
    dietaryRestrictions: ['Vegan', 'Vegetarian', 'Gluten-free'],
    healthBenefits: 'Rich in fiber, antioxidants, and vitamin C. May support heart health and weight management.',
    bestPractices: 'Store apples in the refrigerator to extend shelf life. Wash before eating.',
  },
  
  {
    name: 'Broccoli',
    foodGroup: 'Vegetable',
    description: 'Fresh, green broccoli florets.',
    nutritionalInformation: {
      calories: 31,
      macronutrients: {
        protein: 2.6,
        fat: {
          total: 0.4,
          saturated: 0.1,
          unsaturated: 0.3,
          transFat: 0,
        },
        carbohydrates: {
          total: 6.6,
          sugar: 1.7,
        },
      },
      micronutrients: {
        vitaminA: 567,
        vitaminC: 89.2,
        vitaminD: 0,
        iron: 0.7,
        calcium: 47,
        potassium: 288,
      },
      fiber: 2.4,
      sodium: 33,
      cholesterol: 0,
    },
    servingSize: '1 cup (91g)',
    allergens: [],
    ingredients: ['Broccoli'],
    preparationMethods: 'Steam, roast, or sauté broccoli. Can be eaten raw or cooked.',
    certifications: ['Organic'],
    countryOfOrigin: 'USA',
    brand: null,
    dietaryRestrictions: ['Vegan', 'Vegetarian', 'Gluten-free'],
    healthBenefits: 'Rich in vitamins C and K, fiber, and antioxidants. May support bone health and cancer prevention.',
    bestPractices: 'Store broccoli in the refrigerator and consume within a few days for maximum freshness.',
  },
  {
    name: 'Chicken Breast',
    foodGroup: 'Protein',
    description: 'Boneless, skinless chicken breast.',
    nutritionalInformation: {
      calories: 165,
      macronutrients: {
        protein: 31,
        fat: {
          total: 3.6,
          saturated: 1,
          unsaturated: 2.1,
          transFat: 0,
        },
        carbohydrates: {
          total: 0,
          sugar: 0,
        },
      },
      micronutrients: {
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        iron: 0.7,
        calcium: 14,
        potassium: 284,
      },
      fiber: 0,
      sodium: 74,
      cholesterol: 85,
    },
    servingSize: '1 breast (172g)',
    allergens: [],
    ingredients: ['Chicken breast'],
    preparationMethods: 'Bake, grill, or pan-fry chicken breasts. Season with herbs and spices for added flavor.',
    certifications: [],
    countryOfOrigin: 'USA',
    brand: 'Perdue',
    dietaryRestrictions: [],
    healthBenefits: 'Lean source of protein, low in fat and calories. May support muscle growth and weight management.',
    bestPractices: 'Cook chicken thoroughly to an internal temperature of 165°F (74°C). Store cooked chicken in the refrigerator for up to 4 days.',
  },
  {
    name: 'Brown Rice',
    foodGroup: 'Grain',
    description: 'Whole grain brown rice.',
    nutritionalInformation: {
      calories: 216,
      macronutrients: {
        protein: 4.5,
        fat: {
          total: 1.6,
          saturated: 0.4,
          unsaturated: 0.9,
          transFat: 0,
        },
        carbohydrates: {
          total: 44.8,
          sugar: 0.2,
        },
      },
      micronutrients: {
        vitaminA: 0,
        vitaminC: 0,
        vitaminD: 0,
        iron: 1.1,
        calcium: 20,
        potassium: 158,
      },
      fiber: 3.5,
      sodium: 7,
      cholesterol: 0,
    },
    servingSize: '1 cup (195g)',
    allergens: [],
    ingredients: ['Brown rice'],
    preparationMethods: 'Cook brown rice according to package instructions. Can be used in various dishes like stir-fries, burritos, or as a side dish.',
    certifications: [],
    countryOfOrigin: 'USA',
    brand: null,
    dietaryRestrictions: ['Vegan', 'Vegetarian', 'Gluten-free'],
    healthBenefits: 'Whole grain source of fiber, minerals, and antioxidants. May support weight management and digestive health.',
    bestPractices: 'Store brown rice in an airtight container in a cool, dry place. Cooked rice can be refrigerated for up to 4 days.',
  },
];


app.get('/api/food-items', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/food-items/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.json(foodItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/food-items', async (req, res) => {
  const foodItem = new FoodItem({
    name: req.body.name,
    foodGroup: req.body.foodGroup,
    description: req.body.description,
    nutritionalInformation: req.body.nutritionalInformation,
    servingSize: req.body.servingSize,
    allergens: req.body.allergens,
    ingredients: req.body.ingredients,
    preparationMethods: req.body.preparationMethods,
    certifications: req.body.certifications,
    countryOfOrigin: req.body.countryOfOrigin,
    brand: req.body.brand,
    dietaryRestrictions: req.body.dietaryRestrictions,
    healthBenefits: req.body.healthBenefits,
    bestPractices: req.body.bestPractices,
  });

  try {
    const newFoodItem = await foodItem.save();
    res.status(201).json(newFoodItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/api/food-items/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      foodGroup: req.body.foodGroup,
      description: req.body.description,
      nutritionalInformation: req.body.nutritionalInformation,
      servingSize: req.body.servingSize,
      allergens: req.body.allergens,
      ingredients: req.body.ingredients,
      preparationMethods: req.body.preparationMethods,
      certifications: req.body.certifications,
      countryOfOrigin: req.body.countryOfOrigin,
      brand: req.body.brand,
      dietaryRestrictions: req.body.dietaryRestrictions,
      healthBenefits: req.body.healthBenefits,
      bestPractices: req.body.bestPractices,
    }, { new: true });

    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    res.json(foodItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/api/food-items/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.json({ message: 'Food item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.listen(3000, () => {
  console.log('Server started on port 3000');

  
  sampleFoodItems.forEach(async (foodItem) => {
    try {
      const newFoodItem = new FoodItem(foodItem);
      await newFoodItem.save();
      console.log(`Sample food item "${foodItem.name}" saved successfully.`);
    } catch (err) {
      console.error(`Error saving sample food item "${foodItem.name}":`, err);
    }
  });
});