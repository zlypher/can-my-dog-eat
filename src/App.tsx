import { useEffect, useState } from "react";
import { QuestionSection } from "./components/question-section";
import { ResultSection } from "./components/result-section";
import { MoreInfoSection } from "./components/more-info-section";
import { LegalSection } from "./components/legal-section";
import { findMatch } from "./data/data-utils";
import { FoodData } from "./data/data";

function App() {
  const [food, setFood] = useState<string>("Äpfel");
  const [result, setResult] = useState<FoodData | null>(null);

  useEffect(() => {
    if (!food) {
      setResult(null);
    }

    const foodItem = findMatch(food);
    console.log(foodItem);
    setResult(foodItem);
  }, [food]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50">
      <div className="h-screen">
        <QuestionSection food={food} setFood={setFood} />
        <ResultSection result={result} />
      </div>
      <MoreInfoSection />
      <LegalSection />
    </div>
  );
}

export default App;
