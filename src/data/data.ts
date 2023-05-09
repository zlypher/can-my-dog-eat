export type FoodData = {
  id: string;
  tags: string[];
  rating: "unavailable" | "very bad" | "bad" | "medium" | "good" | "very good";
  moreInfo: string;
};

export const data: FoodData[] = [
  {
    id: "apple",
    rating: "good",
    tags: ["apfel", "äpfel"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "pear",
    rating: "good",
    tags: ["birne"],
    moreInfo: "Lorem Ipsum",
  },
];

export const FOOD_NOT_FOUND: FoodData = {
  id: "not-found",
  rating: "unavailable",
  tags: [],
  moreInfo: "Lorem Ipsum, we don't know",
};
