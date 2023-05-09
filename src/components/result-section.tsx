import { FOOD_NOT_FOUND, FoodData, FoodRating } from "../data/data";

interface IResultSectionProps {
  result: FoodData | null;
}

const getClassName = (rating: FoodRating | undefined) => {
  switch (rating) {
    case "very good":
      return "bg-green-700";
    case "good":
      return "bg-teal-700";
    case "medium":
      return "bg-cyan-700";
    case "bad":
      return "bg-yellow-700";
    case "very bad":
      return "bg-red-700";
    default:
      return "bg-neutral-700";
  }
};

export function ResultSection({ result }: IResultSectionProps) {
  return (
    <div className={`p-10 ${getClassName(result?.rating)}`}>
      {result?.id === FOOD_NOT_FOUND.id ? (
        <p>Not found</p>
      ) : (
        <p>Found: {result?.moreInfo}</p>
      )}
    </div>
  );
}
