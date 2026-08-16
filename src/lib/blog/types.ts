export type BlogCategory = 
  | "All"
  | "Pharmacy Management"
  | "Pharmacy Business"
  | "Healthcare Technology"
  | "Artificial Intelligence"
  | "Business Intelligence"
  | "Inventory Management"
  | "Customer Experience"
  | "Med4One Updates";

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content?: string;
  category: BlogCategory;
  author: Author;
  publishedDate: string;
  readingTime: string;
  image: string;
  isFeatured?: boolean;
}
