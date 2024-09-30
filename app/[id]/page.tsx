"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  DollarSign,
  Tag,
  Info,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getPreviewImage } from "@/lib/appwrite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Pet {
  _id: string;
  name: string;
  breed: string;
  species: string;
  age: string;
  gender: string;
  color: string;
  height?: string;
  weight?: string;
  vaccinated: boolean;
  spayedNeutered: boolean;
  medicalHistory?: string;
  currentMedications?: string;
  dietaryRestrictions?: string;
  exerciseNeeds?: string;
  groomingNeeds?: string;
  temperament?: string;
  trainingLevel?: string;
  socialization?: string;
  specialNeeds?: string;
  allergies?: string;
  microchipNumber?: string;
  price: number;
  availabilityDate: string;
  description?: string;
  sellerNotes?: string;
  coverImage: string;
  imageUrl: string[];
}

const PetPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      fetchPetDetails();
    }
  }, [id]);

  const fetchPetDetails = async () => {
    try {
      const response = await fetch(`/api/get-pet-ind?id=${id}`);
      const data = await response.json();
      if (data.success) {
        setPet(data.data);
        fetchImages(data.data.coverImage, data.data.imageUrl);
      } else {
        console.error("Failed to fetch pet details:", data.error);
      }
    } catch (error) {
      console.error("Error fetching pet details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchImages = async (
    coverImage: string,
    additionalImages: string[]
  ) => {
    const allImages = [coverImage, ...additionalImages];
    const fetchedImages = await Promise.all(
      allImages.map(async (img) => {
        const result = await getPreviewImage(img);
        return result.status === "success" ? result.href : img;
      })
    );
    setImages(fetchedImages.filter((img): img is string => img !== undefined));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="flex justify-center items-center h-screen">
        Pet not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 ">
      <Card className="overflow-hidden bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="order-2 md:hidden ">
            <Carousel className="w-full h-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`Pet image ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-blue-900 text-white hover:bg-blue-800">
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="right-2 bg-blue-900 text-white hover:bg-blue-800">
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </div>
          <div className="hidden md:block ">
            <Carousel className="w-full min-h-96 h-full  mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image}
                        alt={`Pet image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-blue-900 text-white hover:bg-blue-800">
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="right-2 bg-blue-900 text-white hover:bg-blue-800">
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </div>
          <div className="order-1 md:order-2 p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-3xl font-bold text-blue-900">
                  {pet.name}
                </CardTitle>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-900"
                >
                  {pet.species}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-900"
                >
                  {pet.breed}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-900"
                >
                  {pet.age}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-900"
                >
                  {pet.gender}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <InfoItem
                  icon={Calendar}
                  label="Available From"
                  value={new Date(pet.availabilityDate).toLocaleDateString()}
                />
                <InfoItem
                  icon={DollarSign}
                  label="Price"
                  value={`$${pet.price}`}
                />
                <InfoItem icon={Tag} label="Color" value={pet.color} />
                <InfoItem
                  icon={Info}
                  label="Temperament"
                  value={pet.temperament || "Not specified"}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <DetailItem label="Vaccinated" value={pet.vaccinated} />
                <DetailItem
                  label="Spayed/Neutered"
                  value={pet.spayedNeutered}
                />
                <DetailItem label="Training Level" value={pet.trainingLevel} />
                <DetailItem label="Special Needs" value={pet.specialNeeds} />
              </div>
              <p className="text-sm text-gray-700 mb-4">{pet.description}</p>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                Contact Seller
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
      <Card className="mt-6 bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-semibold text-blue-900">
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <DetailItem label="Height" value={pet.height} />
            <DetailItem label="Weight" value={pet.weight} />
            <DetailItem label="Medical History" value={pet.medicalHistory} />
            <DetailItem
              label="Current Medications"
              value={pet.currentMedications}
            />
            <DetailItem
              label="Dietary Restrictions"
              value={pet.dietaryRestrictions}
            />
            <DetailItem label="Exercise Needs" value={pet.exerciseNeeds} />
            <DetailItem label="Grooming Needs" value={pet.groomingNeeds} />
            <DetailItem label="Socialization" value={pet.socialization} />
            <DetailItem label="Allergies" value={pet.allergies} />
            <DetailItem label="Microchip Number" value={pet.microchipNumber} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface InfoItemProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-5 w-5 text-blue-900" />
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-blue-900">{value}</p>
    </div>
  </div>
);

interface DetailItemProps {
  label: string;
  value?: string | boolean;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div>
    <p className="text-sm font-semibold text-blue-900">{label}</p>
    {typeof value === "boolean" ? (
      <div className="flex items-center">
        {value ? (
          <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
        ) : (
          <XCircle className="h-4 w-4 text-red-500 mr-1" />
        )}
        <span className="text-sm">{value ? "Yes" : "No"}</span>
      </div>
    ) : (
      <p className="text-sm text-gray-700">{value || "Not specified"}</p>
    )}
  </div>
);

export default PetPage;
