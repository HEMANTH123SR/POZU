"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Calendar, Tag } from "lucide-react";

import Link from "next/link";

interface Pet {
  _id: string;
  name: string;
  species: string;
  breed: string;
  age: string;
  gender: string;
  color: string;
  price: number;
  coverImage: string;
  vaccinated: boolean;
  spayedNeutered: boolean;
  availabilityDate: string;
  description: string;
}

const FindPetsPage: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchPets();
  }, [search, species, age, priceRange]);

  const fetchPets = async () => {
    const params = new URLSearchParams({
      search,
      species,
      age,
      minPrice: priceRange[0].toString(),
      maxPrice: priceRange[1].toString(),
    });

    try {
      const response = await fetch(`/api/get-pet?${params}`);
      const data = await response.json();
      if (data.success) {
        setPets(data.data);
      } else {
        console.error("Failed to fetch pets:", data.error);
      }
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  return (
    <main className="w-full flex justify-start bg-white py-4 sm:py-8">
      <div className="container w-full mx-auto px-4">
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="w-full max-w-3xl relative mb-4">
            <Input
              type="text"
              placeholder="Search by pet Species, title or breed"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-10 h-12 text-base sm:text-lg w-full"
            />
            <Search
              className="absolute right-3 top-3 text-gray-400"
              size={24}
            />
          </div>
          <div className="flex items-center w-full max-w-3xl">
            <Button
              variant="outline"
              className="flex items-center mr-4 text-sm sm:text-base"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2" size={16} />
              Filters
            </Button>
            <Button
              onClick={fetchPets}
              className="bg-blue-900 hover:bg-blue-950 text-white text-sm sm:text-base"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {showFilters && (
            <div className="w-full lg:w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 font-semibold">Species</h3>
                      {["Dog", "Cat", "Bird", "Small Animal"].map((s) => (
                        <div key={s} className="flex items-center">
                          <Checkbox
                            id={`species-${s}`}
                            checked={species === s}
                            onCheckedChange={() =>
                              setSpecies(species === s ? "" : s)
                            }
                          />
                          <label htmlFor={`species-${s}`} className="ml-2">
                            {s}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Age</h3>
                      {["Baby", "Young", "Adult", "Senior"].map((a) => (
                        <div key={a} className="flex items-center">
                          <Checkbox
                            id={`age-${a}`}
                            checked={age === a}
                            onCheckedChange={() => setAge(age === a ? "" : a)}
                          />
                          <label htmlFor={`age-${a}`} className="ml-2">
                            {a}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Price Range</h3>
                      <Slider
                        min={0}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={(value) =>
                          setPriceRange(value as [number, number])
                        }
                      />
                      <div className="flex justify-between mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          <div className="border-t-">
            <div className={`w-full ${showFilters ? "lg:w-3/4" : "lg:w-full"}`}>
              <div className="space-y-6 sm:space-y-12">
                {pets.map((pet) => (
                  <Link href="/" key={pet._id}>
                    <Card className="overflow-hidden my-6">
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full">
                          <img
                            src={pet.coverImage}
                            alt={pet.name}
                            className="w-full  sm:h-80 md:h-96 object-cover"
                          />
                        </div>
                        <div className="w-full  p-4 sm:p-6">
                          <CardHeader className="p-0 sm:p-2">
                            <CardTitle className="text-xl sm:text-2xl font-bold">
                              {pet.name}
                            </CardTitle>
                            <p className="text-sm text-gray-600">
                              {pet.species} • {pet.breed} • {pet.age} •{" "}
                              {pet.gender}
                            </p>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-x-3 sm:gap-4 mb-4">
                              <div>
                                <p className="font-semibold">Color:</p>
                                <p>{pet.color}</p>
                              </div>
                              <div>
                                <p className="font-semibold">Price:</p>
                                <p className="text-lg font-bold text-blue-900">
                                  ${pet.price}
                                </p>
                              </div>
                              <div>
                                <p className="font-semibold">Vaccinated:</p>
                                <p>{pet.vaccinated ? "Yes" : "No"}</p>
                              </div>
                              <div>
                                <p className="font-semibold">
                                  Spayed/Neutered:
                                </p>
                                <p>{pet.spayedNeutered ? "Yes" : "No"}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                              {pet.description}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                              <div className="flex items-center text-sm text-gray-600 mb-2 sm:mb-0">
                                <Calendar size={16} className="mr-1" />
                                <span>
                                  Available:{" "}
                                  {new Date(
                                    pet.availabilityDate
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Tag size={16} className="mr-1" />
                                <span>{pet.species}</span>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FindPetsPage;

