import Fuse from "fuse.js";
import { FOOD_NOT_FOUND, FoodData, data as foodList } from "./data";

const fuse = new Fuse(foodList, {
  includeScore: true,
  minMatchCharLength: 3,
  threshold: 0.2,
  keys: ["tags"],
});

export function findMatch(food: string): FoodData {
  const result = fuse.search(food);
  if (!result || result.length === 0) {
    return FOOD_NOT_FOUND;
  }

  return result[0].item;
}
