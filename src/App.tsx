import { useEffect, useState } from "preact/hooks";
import { QuestionSection } from "./components/question-section";
import { ResultSection } from "./components/result-section";
import { MoreInfoSection } from "./components/more-info-section";
import { LegalSection } from "./components/legal-section";
import { findMatch } from "./data/data-utils";
import { FOOD_NOT_FOUND, FoodData } from "./data/data";

function App() {
  const [food, setFood] = useState<string>("Äpfel");
  const [result, setResult] = useState<FoodData>(FOOD_NOT_FOUND);

  useEffect(() => {
    if (!food) {
      setResult(FOOD_NOT_FOUND);
    }

    const foodItem = findMatch(food);
    console.log(foodItem);
    setResult(foodItem);
  }, [food]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50">
      <div className="">
        <QuestionSection food={food} setFood={setFood} />
        <ResultSection result={result} />
      </div>
      <MoreInfoSection />
      <LegalSection />
    </div>
  );
}

export default App;
