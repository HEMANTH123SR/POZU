"use client";
import React, { useState, ChangeEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  CalendarDays,
  HeartPulse,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createImage } from "@/lib/appwrite";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { apercuRegular } from "@/app/fonts/font";
type FormData = {
  name: string;
  breed: string;
  species: string;
  age: string;
  gender: string;
  color: string;
  height: string;
  weight: string;
  vaccinated: boolean;
  spayedNeutered: boolean;
  medicalHistory: string;
  currentMedications: string;
  dietaryRestrictions: string;
  exerciseNeeds: string;
  groomingNeeds: string;
  temperament: string;
  trainingLevel: string;
  socialization: string;
  specialNeeds: string;
  allergies: string;
  microchipNumber: string;
  price: string;
  availabilityDate: string;
  description: string;
  sellerNotes: string;
  coverImage: string;
  imageUrl: string[];
};

const PetForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
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

  const handleSelectChange = (name: keyof FormData) => (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: keyof FormData) => (checked: boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
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
          <CardContent className="space-y-4">
            <CardTitle className="text-xl font-semibold text-blue-900 mb-8">
              Basic Information
            </CardTitle>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-blue-900">
                Pet Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your pet's name"
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="breed" className="text-blue-900">
                  Breed
                </Label>
                <Input
                  id="breed"
                  name="breed"
                  value={formData.breed}
                  onChange={handleInputChange}
                  placeholder="e.g., Labrador Retriever"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="species" className="text-blue-900">
                  Species
                </Label>
                <Input
                  id="species"
                  name="species"
                  value={formData.species}
                  onChange={handleInputChange}
                  placeholder="e.g., Dog, Cat, Bird"
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age" className="text-blue-900">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 years"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-blue-900">
                  Gender
                </Label>
                <Select
                  value={formData.gender}
                  onValueChange={handleSelectChange("gender")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color" className="text-blue-900">
                Color / Markings
              </Label>
              <Input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                placeholder="Describe your pet's color and any distinctive markings"
                className="w-full"
              />
            </div>
          </CardContent>
        );
      case 2:
        return (
          <CardContent className="space-y-4">
            <CardTitle className="text-xl font-semibold text-blue-900 mb-8">
              Physical Characteristics
            </CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height" className="text-blue-900">
                  Height
                </Label>
                <Input
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="e.g., 24 inches"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-blue-900">
                  Weight
                </Label>
                <Input
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="e.g., 30 lbs"
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-blue-900">
                Detailed Physical Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your pet's physical features in detail"
                className="w-full"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exerciseNeeds" className="text-blue-900">
                Exercise Needs
              </Label>
              <Select
                value={formData.exerciseNeeds}
                onValueChange={handleSelectChange("exerciseNeeds")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Exercise Needs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="very high">Very High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="groomingNeeds" className="text-blue-900">
                Grooming Needs
              </Label>
              <Select
                value={formData.groomingNeeds}
                onValueChange={handleSelectChange("groomingNeeds")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Grooming Needs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        );
      case 3:
        return (
          <CardContent className="space-y-4">
            <CardTitle className="text-xl font-semibold text-blue-900 mb-8">
              Health Information
            </CardTitle>
            <div className="flex space-x-4 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <Checkbox
                  id="vaccinated"
                  checked={formData.vaccinated}
                  onCheckedChange={handleCheckboxChange("vaccinated")}
                />
                <div>
                  <Label htmlFor="vaccinated" className="text-blue-900">
                    Vaccinated
                  </Label>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Checkbox
                  id="spayedNeutered"
                  checked={formData.spayedNeutered}
                  onCheckedChange={handleCheckboxChange("spayedNeutered")}
                />
                <div>
                  <Label htmlFor="spayedNeutered" className="text-blue-900">
                    Spayed/Neutered
                  </Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="medicalHistory" className="text-blue-900">
                Medical History
              </Label>
              <Textarea
                id="medicalHistory"
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleInputChange}
                placeholder="Describe any past health issues or surgeries"
                className="w-full"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentMedications" className="text-blue-900">
                Current Medications
              </Label>
              <Input
                id="currentMedications"
                name="currentMedications"
                value={formData.currentMedications}
                onChange={handleInputChange}
                placeholder="List any medications your pet is currently taking"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dietaryRestrictions" className="text-blue-900">
                Dietary Restrictions
              </Label>
              <Input
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                placeholder="Any specific dietary needs or restrictions"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="allergies" className="text-blue-900">
                Allergies
              </Label>
              <Input
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                placeholder="List any known allergies"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="microchipNumber" className="text-blue-900">
                Microchip Number
              </Label>
              <Input
                id="microchipNumber"
                name="microchipNumber"
                value={formData.microchipNumber}
                onChange={handleInputChange}
                placeholder="Enter microchip number if applicable"
                className="w-full"
              />
            </div>
          </CardContent>
        );
      case 4:
        return (
          <CardContent className="space-y-4">
            <CardTitle className="text-xl font-semibold text-blue-900 mb-8">
              Personality & Training
            </CardTitle>
            <div className="space-y-2">
              <Label htmlFor="temperament" className="text-blue-900">
                Temperament
              </Label>
              <Input
                id="temperament"
                name="temperament"
                value={formData.temperament}
                onChange={handleInputChange}
                placeholder="Describe your pet's general temperament"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trainingLevel" className="text-blue-900">
                Training Level
              </Label>
              <Select
                value={formData.trainingLevel}
                onValueChange={handleSelectChange("trainingLevel")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Training Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="untrained">Untrained</SelectItem>
                  <SelectItem value="basic">Basic Training</SelectItem>
                  <SelectItem value="well trained">Well Trained</SelectItem>
                  <SelectItem value="professionally trained">
                    Professionally Trained
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="socialization" className="text-blue-900">
                Socialization
              </Label>
              <Textarea
                id="socialization"
                name="socialization"
                value={formData.socialization}
                onChange={handleInputChange}
                placeholder="Describe how your pet interacts with others (e.g., good with kids, other pets)"
                className="w-full"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialNeeds" className="text-blue-900">
                Special Needs or Considerations
              </Label>
              <Textarea
                id="specialNeeds"
                name="specialNeeds"
                value={formData.specialNeeds}
                onChange={handleInputChange}
                placeholder="Any special needs or considerations for care"
                className="w-full"
                rows={3}
              />
            </div>
          </CardContent>
        );
      case 5:
        return (
          <CardContent className="space-y-4">
            <CardTitle className="text-xl font-semibold text-blue-900 mb-8">
              Listing Details
            </CardTitle>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-blue-900">
                Price
              </Label>
              <div className="flex items-center">
                <DollarSign className="text-blue-500 mr-2" size={24} />
                <Input
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter the price"
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="availabilityDate" className="text-blue-900">
                Availability Date
              </Label>
              <div className="flex items-center">
                <CalendarDays className="text-blue-500 mr-2" size={24} />
                <Input
                  id="availabilityDate"
                  name="availabilityDate"
                  type="date"
                  value={formData.availabilityDate}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sellerNotes" className="text-blue-900">
                Additional Notes for Potential Buyers
              </Label>
              <Textarea
                id="sellerNotes"
                name="sellerNotes"
                value={formData.sellerNotes}
                onChange={handleInputChange}
                placeholder="Any additional information for potential buyers"
                className="w-full"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="coverImage" className="text-blue-900">
                Cover Image
              </Label>
              <Input
                id="coverImage"
                type="file"
                onChange={handleCoverImageChange}
                accept="image/*"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalImages" className="text-blue-900">
                Additional Images
              </Label>
              <Input
                id="additionalImages"
                type="file"
                onChange={handleAdditionalImagesChange}
                accept="image/*"
                multiple
                className="w-full"
              />
            </div>
          </CardContent>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full md:w-10/12 lg:w-full mx-auto mt-16 p-4 md:p-8`}
      style={apercuRegular.style}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-900">
            Add a Pet to Pozu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={(step / 5) * 100} className="mb-6 text-blue-900" />
          <form className="space-y-6" onSubmit={handleSubmit}>
            {renderStep()}
            {submitError && (
              <p className="text-red-500 text-sm mt-2">{submitError}</p>
            )}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  className="flex items-center"
                >
                  <ChevronLeft className="mr-2" size={20} />
                  Previous
                </Button>
              )}
              {step < 5 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto flex items-center bg-blue-900 hover:bg-blue-950"
                >
                  Next
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="ml-auto flex items-center"
                  variant="default"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <HeartPulse className="mr-2" size={20} />
                      List Pet
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PetForm;
