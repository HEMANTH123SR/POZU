import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for the general pet product
const PetProductSchema = new Schema({
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
    enum: [
      "Toys",
      "Accessories",
      "Grooming",
      "Healthcare",
      "Bedding",
      "Training",
    ],
    required: true,
  },
  petType: {
    type: String,
    enum: ["Dog", "Cat", "Bird", "Small Animal", "Reptile", "Fish"],
    required: true,
  },
  material: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  size: {
    type: String, // e.g., 'Small', 'Medium', 'Large'
    required: false,
  },
  weight: {
    type: String, // e.g., '500g', '2kg'
    required: false,
  },
  usageInstructions: {
    type: String,
    maxlength: 1000,
  },
  ageGroup: {
    type: [String], // e.g., 'Puppy', 'Adult', 'Senior'
    enum: ["Puppy/Kitten", "Adult", "Senior"],
    default: ["Adult"],
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

// Create and export the PetProduct model
const PetProduct = mongoose.model("PetProduct", PetProductSchema);

module.exports = PetProduct;
