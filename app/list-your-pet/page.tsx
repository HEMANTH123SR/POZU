"use client";
import React, { useState, ChangeEvent } from "react";
import { ChevronLeft, ChevronRight, DollarSign, CalendarDays, HeartPulse } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createImage } from "@/lib/appwrite";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const PetForm = () => {
  const { toast } = useToast();
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
    coverImage: "",
    imageUrl: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([]);

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
  const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImageFile(e.target.files[0]);
    }
  };

  const handleAdditionalImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAdditionalImageFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Upload cover image
      let coverImageId = "";
      if (coverImageFile) {
        const coverImageResult = await createImage(coverImageFile);
        if (coverImageResult.status === "success" && coverImageResult.id) {
          coverImageId = coverImageResult.id;
        } else {
          throw new Error("Failed to upload cover image");
        }
      }

      // Upload additional images
      const additionalImageIds: string[] = [];
      for (const file of additionalImageFiles) {
        const result = await createImage(file);
        if (result.status === "success" && result.id) {
          additionalImageIds.push(result.id);
        } else {
          throw new Error("Failed to upload additional image");
        }
      }

      // Prepare the final form data
      const finalFormData = {
        ...formData,
        coverImage: coverImageId,
        imageUrl: additionalImageIds,
      };

      // Send the data to your API
      const response = await fetch("/api/list-your-pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit pet data");
      }

      const data = await response.json();
      console.log("Pet submitted successfully:", data);
      toast({
        title: "Success",
        description: "Pet listed successfully!",
      });

      // Reset form
      setFormData({
        // Reset to initial state
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
        coverImage: "",
        imageUrl: [],
      });
      setCoverImageFile(null);
      setAdditionalImageFiles([]);
      setStep(1);
    } catch (error) {
      console.error("Error submitting pet data:", error);
      setSubmitError("Failed to submit pet data. Please try again.");
      toast({
        title: "Error",
        description: "Failed to list pet. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Cover Image
              </label>
              <input
                type="file"
                onChange={handleCoverImageChange}
                accept="image/*"
                className="w-full p-2 border border-blue-200 rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Additional Images
              </label>
              <input
                type="file"
                onChange={handleAdditionalImagesChange}
                accept="image/*"
                multiple
                className="w-full p-2 border border-blue-200 rounded-lg"
              />
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
        {submitError && (
          <p className="text-red-500 text-sm mt-2">{submitError}</p>
        )}
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
              disabled={isSubmitting}
              className="px-6 py-3 bg-green-500 text-white rounded-lg ml-auto hover:bg-green-600 transition duration-300 flex items-center disabled:opacity-50"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <HeartPulse className="mr-2" size={20} />
                  List Pet
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PetForm;
