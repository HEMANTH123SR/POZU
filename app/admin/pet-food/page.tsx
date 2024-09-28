// "use client";
// import React, { useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { InputField } from "@/components/component/inputField";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";

// interface PetFoodProduct {
//   name: string;
//   brand: string;
//   description: string;
//   price: number;
//   category: string;
//   petType: string;
//   breedSize: string;
//   lifestage: string;
//   dietaryNeeds: string[];
//   flavorProfile: string[];
//   ingredients: string[];
//   nutritionFacts: {
//     calories: number;
//     proteinContent: string;
//     fatContent: string;
//     fiberContent: string;
//     moistureContent: string;
//     omega3: string;
//     omega6: string;
//     taurine: string;
//     glucosamine: string;
//     chondroitin: string;
//   };
//   guaranteedAnalysis: Map<string, string>;
//   packagingSize: string;
//   packagingType: string;
//   servingSize: string;
//   feedingInstructions: string;
//   shelfLife: string;
//   storageInstructions: string;
//   madeIn: string;
//   certifications: string[];
//   allergenInfo: string[];
//   inStock: boolean;
//   stockQuantity: number;
//   images: string[];
//   featuredProduct: boolean;
//   tags: string[];
// }

// const PetFoodEditor: React.FC = () => {
//   const [product, setProduct] = useState<PetFoodProduct>({
//     name: "",
//     brand: "",
//     description: "",
//     price: 0,
//     category: "",
//     petType: "",
//     breedSize: "All Sizes",
//     lifestage: "",
//     dietaryNeeds: [],
//     flavorProfile: [],
//     ingredients: [],
//     nutritionFacts: {
//       calories: 0,
//       proteinContent: "",
//       fatContent: "",
//       fiberContent: "",
//       moistureContent: "",
//       omega3: "",
//       omega6: "",
//       taurine: "",
//       glucosamine: "",
//       chondroitin: "",
//     },
//     guaranteedAnalysis: new Map(),
//     packagingSize: "",
//     packagingType: "",
//     servingSize: "",
//     feedingInstructions: "",
//     shelfLife: "",
//     storageInstructions: "",
//     madeIn: "",
//     certifications: [],
//     allergenInfo: [],
//     inStock: true,
//     stockQuantity: 0,
//     images: [],
//     featuredProduct: false,
//     tags: [],
//   });

// //   const [currentTag, setCurrentTag] = useState("");
//   const [currentIngredient, setCurrentIngredient] = useState("");
//   const [currentFlavor, setCurrentFlavor] = useState("");
// //   const [currentAllergen, setCurrentAllergen] = useState("");
// //   const [currentCertification, setCurrentCertification] = useState("");
// //   const [currentGuaranteedAnalysis, setCurrentGuaranteedAnalysis] = useState({
// //     key: "",
// //     value: "",
// //   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setProduct((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSelectChange = (name: string, value: string) => {
//     setProduct((prev) => ({ ...prev, [name]: value }));
//   };

// //   const handleCheckboxChange = (name: string, checked: boolean) => {
// //     setProduct((prev) => ({ ...prev, [name]: checked }));
// //   };

// //   const handleArrayInputChange = (name: string, value: string) => {
// //     if (value.trim()) {
// //       setProduct((prev) => ({
// //         ...prev,
// //         [name]: [...prev[name as keyof PetFoodProduct], value.trim()],
// //       }));
// //     }
// //   };

//   const handleNutritionFactsChange = (name: string, value: string | number) => {
//     setProduct((prev) => ({
//       ...prev,
//       nutritionFacts: { ...prev.nutritionFacts, [name]: value },
//     }));
//   };

// //   const handleGuaranteedAnalysisChange = () => {
// //     if (currentGuaranteedAnalysis.key && currentGuaranteedAnalysis.value) {
// //       setProduct((prev) => ({
// //         ...prev,
// //         guaranteedAnalysis: new Map(prev.guaranteedAnalysis).set(
// //           currentGuaranteedAnalysis.key,
// //           currentGuaranteedAnalysis.value
// //         ),
// //       }));
// //       setCurrentGuaranteedAnalysis({ key: "", value: "" });
// //     }
// //   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(product);
//     // Here you would typically send the product data to your backend or perform other actions
//   };

//   return (
//     <Sheet>
//       <div className="h-full w-full overflow-y-auto overflow-x-hidden">
//         <div className="m-8 flex w-full flex-col">
//           <header className="mb-8">
//             <h1 className="text-4xl font-extrabold">Edit Pet Food Product</h1>
//             <p className="mt-2 text-sm text-gray-600">
//               Manage your pet food product catalog effortlessly.
//             </p>
//             <div className="mt-4 h-1 w-32 rounded-xl bg-blue-900"></div>
//           </header>

//           <div className="mt-6 flex flex-col space-y-9">
//             <SheetTrigger asChild>
//               <Button className="w-48 bg-blue-900 text-base hover:bg-blue-950">
//                 Add Pet Food Product
//               </Button>
//             </SheetTrigger>
//           </div>
//         </div>
//       </div>
//       <SheetContent
//         side={"bottom"}
//         className="h-[90vh] overflow-scroll overflow-x-hidden pb-12"
//       >
//         <SheetHeader>
//           <SheetTitle className="w-full text-center">
//             Add Pet Food Product Details
//           </SheetTitle>
//           <form
//             onSubmit={handleSubmit}
//             className="flex w-full flex-col items-center justify-center space-y-6"
//           >
//             <InputField
//               label="Product Name"
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Enter the product name"
//               value={product.name}
//               onChange={handleInputChange}
//               required
//             />
//             <InputField
//               label="Brand"
//               id="brand"
//               name="brand"
//               type="text"
//               placeholder="Enter the brand name"
//               value={product.brand}
//               onChange={handleInputChange}
//               required
//             />
//             <div className="flex w-8/12 flex-col space-y-1">
//               <Label htmlFor="description" className="pl-1.5 text-base">
//                 Description
//               </Label>
//               <Textarea
//                 id="description"
//                 name="description"
//                 rows={3}
//                 placeholder="Provide a description of the product"
//                 className="resize-none"
//                 value={product.description}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <InputField
//               label="Price"
//               id="price"
//               name="price"
//               type="number"
//               placeholder="Enter the price"
//               value={product.price.toString()}
//               onChange={handleInputChange}
//               required
//             />
//             <div className="flex w-8/12 flex-col space-y-1">
//               <Label htmlFor="category" className="pl-1.5 text-base">
//                 Category
//               </Label>
//               <Select
//                 onValueChange={(value) => handleSelectChange("category", value)}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {[
//                     "Dry Food",
//                     "Wet Food",
//                     "Raw Food",
//                     "Freeze-Dried",
//                     "Dehydrated",
//                     "Treats",
//                     "Supplements",
//                   ].map((category) => (
//                     <SelectItem key={category} value={category}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex w-8/12 flex-col space-y-1">
//               <Label htmlFor="petType" className="pl-1.5 text-base">
//                 Pet Type
//               </Label>
//               <Select
//                 onValueChange={(value) => handleSelectChange("petType", value)}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a pet type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {[
//                     "Dog",
//                     "Cat",
//                     "Bird",
//                     "Small Animal",
//                     "Reptile",
//                     "Fish",
//                   ].map((type) => (
//                     <SelectItem key={type} value={type}>
//                       {type}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex w-8/12 flex-col space-y-1">
//               <Label htmlFor="breedSize" className="pl-1.5 text-base">
//                 Breed Size
//               </Label>
//               <Select
//                 onValueChange={(value) =>
//                   handleSelectChange("breedSize", value)
//                 }
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a breed size" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {["All Sizes", "Small", "Medium", "Large", "Giant"].map(
//                     (size) => (
//                       <SelectItem key={size} value={size}>
//                         {size}
//                       </SelectItem>
//                     )
//                   )}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex w-8/12 flex-col space-y-1">
//               <Label htmlFor="lifestage" className="pl-1.5 text-base">
//                 Life Stage
//               </Label>
//               <Select
//                 onValueChange={(value) =>
//                   handleSelectChange("lifestage", value)
//                 }
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a life stage" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {[
//                     "All Life Stages",
//                     "Puppy/Kitten",
//                     "Adult",
//                     "Senior",
//                     "Pregnant/Nursing",
//                   ].map((stage) => (
//                     <SelectItem key={stage} value={stage}>
//                       {stage}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="flex w-8/12 flex-col space-y-1">
//               <Label className="pl-1.5 text-base">Dietary Needs</Label>
//               {[
//                 "Grain-Free",
//                 "High-Protein",
//                 "Low-Fat",
//                 "Weight Management",
//                 "Sensitive Stomach",
//                 "Hypoallergenic",
//                 "Limited Ingredient",
//                 "Organic",
//                 "Natural",
//                 "Prescription",
//               ].map((need) => (
//                 <div key={need} className="flex items-center space-x-2">
//                   <Checkbox
//                     id={need}
//                     checked={product.dietaryNeeds.includes(need)}
//                     onCheckedChange={(checked) => {
//                       if (checked) {
//                         setProduct((prev) => ({
//                           ...prev,
//                           dietaryNeeds: [...prev.dietaryNeeds, need],
//                         }));
//                       } else {
//                         setProduct((prev) => ({
//                           ...prev,
//                           dietaryNeeds: prev.dietaryNeeds.filter(
//                             (n) => n !== need
//                           ),
//                         }));
//                       }
//                     }}
//                   />
//                   <Label htmlFor={need}>{need}</Label>
//                 </div>
//               ))}
//             </div>
//             {/* <div className="flex w-8/12 flex-col space-y-1">
//               <Label htmlFor="flavorProfile" className="pl-1.5 text-base">
//                 Flavor Profile
//               </Label>
//               <div className="flex space-x-2">
//                 <Input
//                   type="text"
//                   id="flavorProfile"
//                   value={currentFlavor}
//                   onChange={(e) => setCurrentFlavor(e.target.value)}
//                   className="border p-2"
//                   placeholder="Add a flavor"
//                 />
//                 <Button
//                   type="button"
//                   onClick={() => {
//                     handleArrayInputChange("flavorProfile", currentFlavor);
//                     setCurrentFlavor("");
//                   }}
//                   className="border bg-slate-50 text-black hover:bg-slate-100"
//                 >
//                   Add
//                 </Button>
//               </div>
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.flavorProfile.map((flavor, index) => (
//                   <span
//                     key={index}
//                     className="mt-1.5 rounded bg-slate-200 px-2 py-1 text-sm"
//                   >
//                     {flavor}
//                   </span>
//                 ))}
//               </div>
//             </div> */}
//             {/* <div className="flex w-8/12 flex-col space-y-1">
//               <Label htmlFor="ingredients" className="pl-1.5 text-base">
//                 Ingredients
//               </Label>
//               <div className="flex space-x-2">
//                 <Input
//                   type="text"
//                   id="ingredients"
//                   value={currentIngredient}
//                   onChange={(e) => setCurrentIngredient(e.target.value)}
//                   className="border p-2"
//                   placeholder="Add an ingredient"
//                 />
//                 <Button
//                   type="button"
//                   onClick={() => {
//                     handleArrayInputChange("ingredients", currentIngredient);
//                     setCurrentIngredient("");
//                   }}
//                   className="border bg-slate-50 text-black hover:bg-slate-100"
//                 >
//                   Add
//                 </Button>
//               </div>
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.ingredients.map((ingredient, index) => (
//                   <span
//                     key={index}
//                     className="mt-1.5 rounded bg-slate-200 px-2 py-1 text-sm"
//                   >
//                     {ingredient}
//                   </span>
//                 ))}
//               </div>
//             </div> */}
//             <div className="flex w-8/12 flex-col space-y-1">
//               <Label className="pl-1.5 text-base">Nutrition Facts</Label>
//               <InputField
//                 label="Calories"
//                 id="calories"
//                 name="calories"
//                 type="number"
//                 placeholder="Enter calories"
//                 value={product.nutritionFacts.calories.toString()}
//                 onChange={(e) =>
//                   handleNutritionFactsChange("calories", Number(e.target.value))
//                 }
//               />
//             </div>
//           </form>
//         </SheetHeader>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default PetFoodEditor;

export default function PetFoodEditor() {
  return <section></section>;
}
