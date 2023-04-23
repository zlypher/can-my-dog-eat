export type FoodData = {
  id: string;
  names: string[];
  rating: "unavailable" | "very bad" | "bad" | "medium" | "good" | "very good";
  moreInfo: string;
};

export const data: FoodData[] = [
  {
    id: "apfel",
    rating: "good",
    names: ["apfel", "äpfel"],
    moreInfo: "Lorem Ipsum",
  },
];

export const FOOD_NOT_FOUND: FoodData = {
  id: "not-found",
  rating: "unavailable",
  names: [],
  moreInfo: "Lorem Ipsum, we don't know",
};
