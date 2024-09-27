import mongoose from "mongoose";
const { Schema } = mongoose;

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
    enum: ["Dry Food", "Wet Food", "Raw Food", "Freeze-Dried", "Dehydrated", "Treats", "Supplements"],
    required: true,
  },
  petType: {
    type: String,
    enum: ["Dog", "Cat", "Bird", "Small Animal", "Reptile", "Fish"],
    required: true,
  },
  breedSize: {
    type: String,
    enum: ["All Sizes", "Small", "Medium", "Large", "Giant"],
    default: "All Sizes",
  },
  lifestage: {
    type: String,
    enum: ["All Life Stages", "Puppy/Kitten", "Adult", "Senior", "Pregnant/Nursing"],
    required: true,
  },
  dietaryNeeds: {
    type: [String],
    enum: [
      "Grain-Free",
      "High-Protein",
      "Low-Fat",
      "Weight Management",
      "Sensitive Stomach",
      "Hypoallergenic",
      "Limited Ingredient",
      "Organic",
      "Natural",
      "Prescription",
    ],
    default: [],
  },
  flavorProfile: {
    type: [String],
    required: true,
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
    moistureContent: {
      type: String,
    },
    omega3: String,
    omega6: String,
    taurine: String,
    glucosamine: String,
    chondroitin: String,
  },
  guaranteedAnalysis: {
    type: Map,
    of: String,
  },
  packagingSize: {
    type: String, // e.g., '5 lbs', '12 kg', '500g'
    required: true,
  },
  packagingType: {
    type: String,
    enum: ["Bag", "Can", "Pouch", "Box", "Tub"],
    required: true,
  },
  servingSize: {
    type: String,
    required: true,
  },
  feedingInstructions: {
    type: String,
    required: true,
  },
  shelfLife: String,
  storageInstructions: String,
  madeIn: String,
  certifications: [String], // e.g., "AAFCO", "Organic", "Non-GMO"
  allergenInfo: [String],
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
  featuredProduct: {
    type: Boolean,
    default: false,
  },
  discount: {
    percentage: Number,
    validUntil: Date,
  },
  tags: [String],
  relatedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PetFoodProduct'
  }],
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