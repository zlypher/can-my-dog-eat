export type FoodCategory = "unavailable" | "fruit" | "x";
export type FoodRating = "unavailable" | "very bad" | "bad" | "medium" | "good" | "very good";

export type FoodData = {
  id: string;
  category: FoodCategory;
  tags: string[];
  rating: FoodRating;
  moreInfo: string;
};

export const data: FoodData[] = [
  {
    id: "apple",
    category: "fruit",
    rating: "good",
    tags: ["apfel", "äpfel"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "pear",
    category: "fruit",
    rating: "good",
    tags: ["birne"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "pineapple",
    category: "fruit",
    rating: "unavailable",
    tags: ["ananas"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "orange",
    category: "fruit",
    rating: "unavailable",
    tags: ["orange"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "apricot",
    category: "fruit",
    rating: "unavailable",
    tags: ["aprikose"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "banana",
    category: "fruit",
    rating: "unavailable",
    tags: ["banane"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "blackberry",
    category: "fruit",
    rating: "unavailable",
    tags: ["brombeere"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "strawberry",
    category: "fruit",
    rating: "unavailable",
    tags: ["erdbeere"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "peanut",
    category: "fruit",
    rating: "unavailable",
    tags: ["erdnuss"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "pomegranate",
    category: "fruit",
    rating: "unavailable",
    tags: ["granatapfel"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "raspberry",
    category: "fruit",
    rating: "unavailable",
    tags: ["himbeere"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "cherry",
    category: "fruit",
    rating: "unavailable",
    tags: ["kirsche"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "kiwi",
    category: "fruit",
    rating: "unavailable",
    tags: ["kiwi"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "coconut",
    category: "fruit",
    rating: "unavailable",
    tags: ["kokusnuss"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "water melon",
    category: "fruit",
    rating: "unavailable",
    tags: ["wassermelone"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "grapefruit",
    category: "fruit",
    rating: "unavailable",
    tags: ["grapefruit", "pampelmuse"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "peach",
    category: "fruit",
    rating: "bad",
    tags: ["pfirsich"],
    moreInfo: "Die Frucht an sich ist nicht giftig, allerdings enthält der Kern für Hunde gefährliche Giftstoffe.",
  },
  {
    id: "plum",
    category: "fruit",
    rating: "unavailable",
    tags: ["pflaume"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "tomato",
    category: "fruit",
    rating: "unavailable",
    tags: ["tomate"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "walnut",
    category: "fruit",
    rating: "unavailable",
    tags: ["walnuss"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "grape",
    category: "fruit",
    rating: "unavailable",
    tags: ["weintraube"],
    moreInfo: "Lorem Ipsum",
  },
  {
    id: "lemon",
    category: "fruit",
    rating: "unavailable",
    tags: ["zitrone"],
    moreInfo: "Lorem Ipsum",
  },
];

export const FOOD_NOT_FOUND: FoodData = {
  id: "not-found",
  category: "unavailable",
  rating: "unavailable",
  tags: [],
  moreInfo: "Lorem Ipsum, we don't know",
};
