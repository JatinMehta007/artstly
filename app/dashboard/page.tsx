"use client";

import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from "@/components/UI/table";
import { Button } from "@/components/UI/button";
import { useState } from "react";

const dummyArtists = [
  {
    name: "Asha Rai",
    category: "Singer",
    location: "Mumbai",
    fee: "₹20,000–₹30,000",
  },
  {
    name: "Rohit Dance Crew",
    category: "Dancer",
    location: "Delhi",
    fee: "₹15,000–₹25,000",
  },
  {
    name: "DJ Nova",
    category: "DJ",
    location: "Bangalore",
    fee: "₹30,000–₹50,000",
  },
];

export default function DashboardPage() {
  const [artists, setArtists] = useState(dummyArtists);

  const handleRemove = (name: string) => {
    const filtered = artists.filter((artist) => artist.name !== name);
    setArtists(filtered);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {artists.map((artist) => (
            <TableRow key={artist.name}>
              <TableCell>{artist.name}</TableCell>
              <TableCell>{artist.category}</TableCell>
              <TableCell>{artist.location}</TableCell>
              <TableCell>{artist.fee}</TableCell>
              <TableCell className="text-right">
                <Button variant="destructive" onClick={() => handleRemove(artist.name)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}