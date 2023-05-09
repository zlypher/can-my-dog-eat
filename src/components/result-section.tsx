import { FoodData } from "../data/data";

interface IResultSectionProps {
  result: FoodData | null;
}

export function ResultSection({ result }: IResultSectionProps) {
  return <div className="p-10"></div>;
}
