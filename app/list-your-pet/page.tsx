"use client";
import React, { useState, ChangeEvent } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Camera,
  DollarSign,
  CalendarDays,
  HeartPulse,
} from "lucide-react";

const PetForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    species: "",
    age: "",
    gender: "",
    color: "",
    height: "",
    weight: "",
    vaccinated: false,
    spayedNeutered: false,
    medicalHistory: "",
    currentMedications: "",
    dietaryRestrictions: "",
    exerciseNeeds: "",
    groomingNeeds: "",
    temperament: "",
    trainingLevel: "",
    socialization: "",
    specialNeeds: "",
    allergies: "",
    microchipNumber: "",
    price: "",
    availabilityDate: "",
    description: "",
    sellerNotes: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 5));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-900">
              Basic Information
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Pet Name"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleInputChange}
                placeholder="Breed"
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleInputChange}
                placeholder="Species"
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age"
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              placeholder="Color / Markings"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-900">
              Physical Characteristics
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="Height"
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="Weight"
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Detailed Physical Description"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Exercise Needs
              </label>
              <select
                name="exerciseNeeds"
                value={formData.exerciseNeeds}
                onChange={handleInputChange}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Exercise Needs</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
                <option value="very high">Very High</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Grooming Needs
              </label>
              <select
                name="groomingNeeds"
                value={formData.groomingNeeds}
                onChange={handleInputChange}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Grooming Needs</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-900">
              Health Information
            </h2>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="vaccinated"
                  checked={formData.vaccinated}
                  onChange={handleInputChange}
                  className="form-checkbox text-blue-500 h-5 w-5"
                />
                <span className="text-blue-900">Vaccinated</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="spayedNeutered"
                  checked={formData.spayedNeutered}
                  onChange={handleInputChange}
                  className="form-checkbox text-blue-500 h-5 w-5"
                />
                <span className="text-blue-900">Spayed/Neutered</span>
              </label>
            </div>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleInputChange}
              placeholder="Medical History"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <input
              type="text"
              name="currentMedications"
              value={formData.currentMedications}
              onChange={handleInputChange}
              placeholder="Current Medications"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              placeholder="Dietary Restrictions"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleInputChange}
              placeholder="Allergies"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              name="microchipNumber"
              value={formData.microchipNumber}
              onChange={handleInputChange}
              placeholder="Microchip Number"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-900">
              Personality & Training
            </h2>
            <input
              type="text"
              name="temperament"
              value={formData.temperament}
              onChange={handleInputChange}
              placeholder="Temperament"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              name="trainingLevel"
              value={formData.trainingLevel}
              onChange={handleInputChange}
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Training Level</option>
              <option value="untrained">Untrained</option>
              <option value="basic">Basic Training</option>
              <option value="well trained">Well Trained</option>
              <option value="professionally trained">
                Professionally Trained
              </option>
            </select>
            <textarea
              name="socialization"
              value={formData.socialization}
              onChange={handleInputChange}
              placeholder="Socialization (e.g., good with kids, other pets)"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <textarea
              name="specialNeeds"
              value={formData.specialNeeds}
              onChange={handleInputChange}
              placeholder="Special Needs or Considerations"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-900">
              Listing Details
            </h2>
            <div className="flex items-center space-x-2">
              <DollarSign className="text-blue-500" size={24} />
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDays className="text-blue-500" size={24} />
              <input
                type="date"
                name="availabilityDate"
                value={formData.availabilityDate}
                onChange={handleInputChange}
                className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <textarea
              name="sellerNotes"
              value={formData.sellerNotes}
              onChange={handleInputChange}
              placeholder="Additional Notes for Potential Buyers"
              className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
            />
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Camera className="w-10 h-10 mb-3 text-blue-500" />
                  <p className="mb-2 text-sm text-blue-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-blue-500">
                    PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Add a Pet to Pozu
      </h1>
      <div className="mb-6 flex justify-between items-center">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`w-1/5 h-2 rounded-full ${
              step >= num ? "bg-blue-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {renderStep()}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-gray-100 text-blue-900 rounded-lg flex items-center hover:bg-gray-200 transition duration-300"
            >
              <ChevronLeft className="mr-2" size={20} />
              Previous
            </button>
          )}
          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center ml-auto hover:bg-blue-600 transition duration-300"
            >
              Next
              <ChevronRight className="ml-2" size={20} />
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white rounded-lg ml-auto hover:bg-green-600 transition duration-300 flex items-center"
            >
              <HeartPulse className="mr-2" size={20} />
              List Pet
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PetForm;
