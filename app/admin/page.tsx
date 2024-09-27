"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DogIcon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
  CatIcon,
  FishIcon,
  BirdIcon,
  DollarSignIcon,
} from "lucide-react";

function PetAdmin() {
  return (
    <main className="grid pt-32 min-h-screen w-full ">
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSignIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-gray-500">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Orders</CardTitle>
                  <ShoppingCartIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-gray-500">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Products
                  </CardTitle>
                  <PackageIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-gray-500">+19% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <UsersIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-gray-500">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Dog Products
                  </CardTitle>
                  <DogIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,234</div>
                  <p className="text-xs text-gray-500">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Cat Products
                  </CardTitle>
                  <CatIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4,378</div>
                  <p className="text-xs text-gray-500">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Fish Products
                  </CardTitle>
                  <FishIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,567</div>
                  <p className="text-xs text-gray-500">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Bird Products
                  </CardTitle>
                  <BirdIcon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,055</div>
                  <p className="text-xs text-gray-500">+3% from last month</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="orders" className="space-y-4">
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">#3210</TableCell>
                    <TableCell>Olivia Martin</TableCell>
                    <TableCell>Dog Food</TableCell>
                    <TableCell className="text-right">$59.99</TableCell>
                    <TableCell>
                      <Badge>Shipped</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">#3209</TableCell>
                    <TableCell>William Kim</TableCell>
                    <TableCell>Cat Toy Set</TableCell>
                    <TableCell className="text-right">$29.99</TableCell>
                    <TableCell>
                      <Badge variant="outline">Processing</Badge>
                    </TableCell>
                  </TableRow>
                  {/* Add more table rows here */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="products" className="space-y-4">
            <h2 className="text-2xl font-bold">Product Management</h2>
            <p>
              Here you can manage your products, add new ones, or update
              existing inventory.
            </p>
          </TabsContent>
          <TabsContent value="customers" className="space-y-4">
            <h2 className="text-2xl font-bold">Customer Management</h2>
            <p>
              View and manage your customer information, orders, and
              preferences.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

export default PetAdmin;
