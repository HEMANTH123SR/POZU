// "use client";
// import React, { useState } from "react";
// import { X, Truck } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

// interface Pet {
//   id: string;
//   name: string;
//   breed: string;
//   species: string;
//   age: string;
//   price: number;
//   coverImage: string;
//   inStock: boolean;
// }

// const initialPets: Pet[] = [
//   {
//     id: "1",
//     name: "Buddy",
//     breed: "Golden Retriever",
//     species: "Dog",
//     age: "2 years",
//     price: 800,
//     coverImage:
//       "https://images.pexels.com/photos/28652501/pexels-photo-28652501/free-photo-of-portrait-of-a-small-brown-dog-on-a-porch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     inStock: true,
//   },
//   {
//     id: "2",
//     name: "Whiskers",
//     breed: "Siamese",
//     species: "Cat",
//     age: "1 year",
//     price: 500,
//     coverImage:
//       "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     inStock: false,
//   },
// ];

// export default function PetShopComponent() {
//   const [pets, setPets] = useState<Pet[]>(initialPets);

//   const removePet = (id: string) => {
//     setPets(pets.filter((pet) => pet.id !== id));
//   };

//   const subtotal = pets.reduce((sum, pet) => sum + pet.price, 0);
//   const shippingEstimate = 50;
//   const taxEstimate = subtotal * 0.08;
//   const orderTotal = subtotal + shippingEstimate + taxEstimate;

//   return (
//     <div className="container flex justify-center  mx-auto px-4 py-8 lg:min-h-screen">
//       <div className="flex flex-col lg:flex-row gap-8 w-full">
//         <div className="lg:w-2/3 space-y-4">
//           {pets.map((pet) => (
//             <div
//               key={pet.id}
//               className="flex items-center space-x-4 py-4 border-b border-gray-200"
//             >
//               <img
//                 src={pet.coverImage}
//                 alt={pet.name}
//                 className="w-20 h-20 object-cover"
//               />
//               <div className="flex-grow">
//                 <h2 className="text-lg font-semibold text-blue-900">
//                   {pet.name}
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   {pet.species} - {pet.breed}
//                 </p>
//                 <p className="text-sm text-gray-600">Age: {pet.age}</p>
//                 {pet.inStock ? (
//                   <p className="text-sm text-green-600">In stock</p>
//                 ) : (
//                   <p className="text-sm text-gray-600">Ships in 3-4 weeks</p>
//                 )}
//               </div>
//               <div className="flex flex-col items-end space-y-2">
//                 <button
//                   onClick={() => removePet(pet.id)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//                 <select className="border rounded px-2 py-1">
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                 </select>
//                 <p className="font-semibold text-blue-900">
//                   ${pet.price.toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="lg:w-1/3">
//           <Card className="bg-gray-50 border-gray-200">
//             <CardHeader>
//               <CardTitle className="text-xl font-semibold text-black">
//                 Order summary
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className=" text-black">${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600 flex items-center">
//                   <Truck className="mr-2 h-4 w-4" />
//                   Shipping estimate
//                 </span>
//                 <span className=" text-black">
//                   ${shippingEstimate.toFixed(2)}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-600">Tax estimate</span>
//                 <span className=" text-black">${taxEstimate.toFixed(2)}</span>
//               </div>
//               <Separator className="my-4" />
//               <div className="flex justify-between items-center text-lg ">
//                 <span className="text-black">Order total</span>
//                 <span className="text-black">${orderTotal.toFixed(2)}</span>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button className="w-full bg-blue-900 hover:bg-blue-900 text-white">
//                 Checkout
//               </Button>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Pet {
  id: string;
  name: string;
  breed: string;
  species: string;
  age: string;
  price: number;
  coverImage: string;
  inStock: boolean;
}

const initialPets: Pet[] = [
  {
    id: "1",
    name: "Buddy",
    breed: "Golden Retriever",
    species: "Dog",
    age: "2 years",
    price: 800,
    coverImage:
      "https://images.pexels.com/photos/28652501/pexels-photo-28652501/free-photo-of-portrait-of-a-small-brown-dog-on-a-porch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: true,
  },
  {
    id: "2",
    name: "Whiskers",
    breed: "Siamese",
    species: "Cat",
    age: "1 year",
    price: 500,
    coverImage:
      "https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inStock: false,
  },
];

export default function PetShopComponent() {
  const [pets, setPets] = useState<Pet[]>(initialPets);

  const removePet = (id: string) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  const subtotal = pets.reduce((sum, pet) => sum + pet.price, 0);
  const shippingEstimate = 50;
  const taxEstimate = subtotal * 0.08;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="container flex justify-center mx-auto px-4 py-8 lg:min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <div className="lg:w-2/3 space-y-6">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 py-6 border-b border-gray-200"
            >
              <img
                src={pet.coverImage}
                alt={pet.name}
                className="w-full sm:w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-grow w-full text-center sm:text-left">
                <h2 className="text-2xl font-semibold text-blue-900 mb-2">
                  {pet.name}
                </h2>
                <p className="text-lg text-gray-600 mb-1">
                  {pet.species} - {pet.breed}
                </p>
                <p className="text-md text-gray-600 mb-2">Age: {pet.age}</p>
                {pet.inStock ? (
                  <p className="text-md text-green-600 mb-4">In stock</p>
                ) : (
                  <p className="text-md text-gray-600 mb-4">
                    Ships in 3-4 weeks
                  </p>
                )}
                <p className="text-2xl font-bold text-blue-900 mb-4">
                  ${pet.price.toFixed(2)}
                </p>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-center sm:justify-start items-center space-x-4">
                  <button
                    onClick={() => removePet(pet.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
          <Card className="bg-gray-50 border-gray-200 sticky top-4">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-black">
                Order summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-black">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 flex items-center">
                  <Truck className="mr-2 h-4 w-4" />
                  Shipping estimate
                </span>
                <span className="text-black">
                  ${shippingEstimate.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax estimate</span>
                <span className="text-black">${taxEstimate.toFixed(2)}</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between items-center text-xl font-semibold">
                <span className="text-black">Order total</span>
                <span className="text-black">${orderTotal.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg py-6">
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
