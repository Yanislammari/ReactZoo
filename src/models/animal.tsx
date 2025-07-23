export interface Animal {
  _id: string;
  zoo: string;
  space: string;
  name: string;
  description: string;
  images: string[];           // Assuming array of image URLs or filenames
  species: string;            // ID of the species
  bornOn: string;             // ISO date string (you can convert to Date if needed)
  createdAt: string;
  updatedAt: string;
}