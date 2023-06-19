import { useEffect, useState } from "react";

import Category from "../types/Category";

// Temporary mock API call
const getCategories = async (): Promise<Category[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return [
    { id: 1, name: "Built-in objects" },
    { id: 2, name: "Expressions & operators" },
    { id: 3, name: "Statements & declarations" },
    { id: 4, name: "Functions" },
    { id: 5, name: "Classes" },
    { id: 6, name: "Regular expressions" },
    { id: 7, name: "Errors" },
    { id: 8, name: "Misc" },
  ];
};

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const response = await getCategories()
      setCategories(response);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  return { isLoading, categories };
};
