import { useEffect, useState } from "preact/hooks";
import { QuestionSection } from "./components/question-section";
import { ResultSection } from "./components/result-section";
import { MoreInfoSection } from "./components/more-info-section";
import { LegalSection } from "./components/legal-section";
import { findMatch } from "./data/data-utils";
import { FOOD_NOT_FOUND, FoodData } from "./data/data";

function App() {
  const [result, setResult] = useState<FoodData>(FOOD_NOT_FOUND);

  const setFood = (food: string) => {
    if (!food) {
      setResult(FOOD_NOT_FOUND);
    }

    const foodItem = findMatch(food);
    setResult(foodItem);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50">
      <div className="">
        <QuestionSection setFood={setFood} />
        <ResultSection result={result} />
      </div>
      <LegalSection />
    </div>
  );
}

export default App;
