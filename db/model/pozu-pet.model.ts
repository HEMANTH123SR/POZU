import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  color: { type: String, required: true },
  height: String,
  weight: String,
  vaccinated: Boolean,
  spayedNeutered: Boolean,
  medicalHistory: String,
  currentMedications: String,
  dietaryRestrictions: String,
  exerciseNeeds: String,
  groomingNeeds: String,
  temperament: String,
  trainingLevel: String,
  socialization: String,
  specialNeeds: String,
  allergies: String,
  microchipNumber: String,
  price: { type: Number, required: true },
  availabilityDate: Date,
  description: String,
  sellerNotes: String,
  coverImage: { require: true, type: String },
  imageUrl: [String],
});

export const PozuPet = mongoose.models.Pet || mongoose.model("Pet", petSchema);
