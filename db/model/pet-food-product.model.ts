import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for the pet food product
const PetFoodProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ["Dry Food", "Wet Food", "Raw Food", "Treats"],
    required: true,
  },
  petType: {
    type: String,
    enum: ["Dog", "Cat", "Bird", "Small Animal", "Reptile"],
    required: true,
  },
  dietaryNeeds: {
    type: [String],
    enum: [
      "Grain-Free",
      "High-Protein",
      "Weight Management",
      "Sensitive Stomach",
      "Hypoallergenic",
      "Senior",
    ],
    default: [],
  },
  ingredients: {
    type: [String],
    required: true,
  },
  nutritionFacts: {
    calories: {
      type: Number,
      required: true,
    },
    proteinContent: {
      type: String,
      required: true,
    },
    fatContent: {
      type: String,
      required: true,
    },
    fiberContent: {
      type: String,
    },
  },
  packagingSize: {
    type: String, // e.g., '5 lbs', '12 kg', '500g'
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
  },
  images: {
    type: [String], // Array of image URLs
  },
  ratings: {
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the PetFoodProduct model
const PetFoodProduct = mongoose.model("PetFoodProduct", PetFoodProductSchema);

module.exports = PetFoodProduct;
