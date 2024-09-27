"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/component/inputField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface PetProduct {
  name: string;
  brand: string;
  description: string;
  price: number;
  category: string;
  petType: string;
  material: string;
  color: string;
  size: string;
  weight: string;
  usageInstructions: string;
  ageGroup: string[];
  inStock: boolean;
  stockQuantity: number;
  images: string[];
  features: string[];
  ingredients: string[];
  allergens: string[];
  safetyWarnings: string[];
  compatibleWith: string[];
  origin: string;
  tags: string[];
}

const PetProductDashboard = () => {
  const [product, setProduct] = useState<PetProduct>({
    name: "",
    brand: "",
    description: "",
    price: 0,
    category: "",
    petType: "",
    material: "",
    color: "",
    size: "",
    weight: "",
    usageInstructions: "",
    ageGroup: [],
    inStock: true,
    stockQuantity: 0,
    images: [],
    features: [],
    ingredients: [],
    allergens: [],
    safetyWarnings: [],
    compatibleWith: [],
    origin: "",
    tags: [],
  });

  const [currentTag, setCurrentTag] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setProduct((prev) => ({ ...prev, [name]: checked }));
  };

  const handleArrayInputChange = (name: string, value: string) => {
    if (value.trim()) {
      setProduct((prev) => ({
        ...prev,
        [name]: Array.isArray(prev[name as keyof PetProduct])
          ? [...(prev[name as keyof PetProduct] as string[]), value.trim()]
          : [value.trim()],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
    // Here you would typically send the product data to your backend or perform other actions
  };

  return (
    <Sheet>
      <div className="h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-8 flex w-full flex-col">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold">Edit Pet Product</h1>
            <p className="mt-2 text-sm text-gray-600">
              Manage your pet product catalog effortlessly.
            </p>
            <div className="mt-4 h-1 w-32 rounded-xl bg-blue-900"></div>
          </header>

          <div className="mt-6 flex flex-col space-y-9">
            <SheetTrigger asChild>
              <Button className="w-48 bg-blue-900 text-base hover:bg-blue-950">
                Add Pet Product
              </Button>
            </SheetTrigger>
            {/* render product cards here */}
          </div>
        </div>
      </div>
      <SheetContent
        side={"bottom"}
        className="h-[90vh] overflow-scroll overflow-x-hidden pb-12"
      >
        <SheetHeader>
          <SheetTitle className="w-full text-center">
            Add Pet Product Details
          </SheetTitle>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center justify-center space-y-6"
          >
            <InputField
              label="Product Name"
              id="name"
              name="name"
              type="text"
              placeholder="Enter the product name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
            <InputField
              label="Brand"
              id="brand"
              name="brand"
              type="text"
              placeholder="Enter the brand name"
              value={product.brand}
              onChange={handleInputChange}
              required
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="description" className="pl-1.5 text-base">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Provide a description of the product"
                className="resize-none"
                value={product.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <InputField
              label="Price"
              id="price"
              name="price"
              type="number"
              placeholder="Enter the price"
              value={product.price.toString()}
              onChange={handleInputChange}
              required
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="category" className="pl-1.5 text-base">
                Category
              </Label>
              <Select
                onValueChange={(value) => handleSelectChange("category", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Toys",
                    "Accessories",
                    "Grooming",
                    "Healthcare",
                    "Bedding",
                    "Training",
                    "Food",
                    "Treats",
                    "Other",
                  ].map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="petType" className="pl-1.5 text-base">
                Pet Type
              </Label>
              <Select
                onValueChange={(value) => handleSelectChange("petType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a pet type" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Dog",
                    "Cat",
                    "Bird",
                    "Small Animal",
                    "Reptile",
                    "Fish",
                  ].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <InputField
              label="Material"
              id="material"
              name="material"
              type="text"
              placeholder="Enter the material"
              value={product.material}
              onChange={handleInputChange}
            />
            <InputField
              label="Color"
              id="color"
              name="color"
              type="text"
              placeholder="Enter the color"
              value={product.color}
              onChange={handleInputChange}
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="size" className="pl-1.5 text-base">
                Size
              </Label>
              <Select
                onValueChange={(value) => handleSelectChange("size", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {["X-Small", "Small", "Medium", "Large", "X-Large"].map(
                    (size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <InputField
              label="Weight"
              id="weight"
              name="weight"
              type="text"
              placeholder="Enter the weight (e.g., 500g, 2kg)"
              value={product.weight}
              onChange={handleInputChange}
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="usageInstructions" className="pl-1.5 text-base">
                Usage Instructions
              </Label>
              <Textarea
                id="usageInstructions"
                name="usageInstructions"
                rows={3}
                placeholder="Provide usage instructions"
                className="resize-none"
                value={product.usageInstructions}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex w-8/12 flex-col space-y-1">
              <Label className="pl-1.5 text-base">Age Group</Label>
              {["Puppy/Kitten", "Adult", "Senior", "All Ages"].map((age) => (
                <div key={age} className="flex items-center space-x-2">
                  <Checkbox
                    id={age}
                    checked={product.ageGroup.includes(age)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setProduct((prev) => ({
                          ...prev,
                          ageGroup: [...prev.ageGroup, age],
                        }));
                      } else {
                        setProduct((prev) => ({
                          ...prev,
                          ageGroup: prev.ageGroup.filter((a) => a !== age),
                        }));
                      }
                    }}
                  />
                  <Label htmlFor={age}>{age}</Label>
                </div>
              ))}
            </div>
            <div className="flex w-8/12 items-center space-x-2">
              <Checkbox
                id="inStock"
                checked={product.inStock}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("inStock", checked as boolean)
                }
              />
              <Label htmlFor="inStock">In Stock</Label>
            </div>
            <InputField
              label="Stock Quantity"
              id="stockQuantity"
              name="stockQuantity"
              type="number"
              placeholder="Enter the stock quantity"
              value={product.stockQuantity.toString()}
              onChange={handleInputChange}
              required
            />
            <div className="flex w-8/12 flex-col space-y-1">
              <Label htmlFor="tags" className="pl-1.5 text-base">
                Tags
              </Label>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  id="tags"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  className="border p-2"
                  placeholder="Add a tag"
                />
                <Button
                  type="button"
                  onClick={() => {
                    handleArrayInputChange("tags", currentTag);
                    setCurrentTag("");
                  }}
                  className="border bg-slate-50 text-black hover:bg-slate-100"
                >
                  Add
                </Button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="mt-1.5 rounded bg-slate-200 px-2 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              className="w-8/12 bg-[#FF560E] hover:bg-[#f4733b]"
            >
              Submit
            </Button>
          </form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default PetProductDashboard;
