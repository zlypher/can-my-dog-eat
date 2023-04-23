import { useState } from "react";
import { QuestionSection } from "./components/question-section";
import { ResultSection } from "./components/result-section";
import { MoreInfoSection } from "./components/more-info-section";
import { LegalSection } from "./components/legal-section";

function App() {
  const [food, setFood] = useState<string>("Äpfel");
  const [result, setResult] = useState<string>("unset");
  const [message, setMessage] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50">
      <div className="h-screen">
        <QuestionSection food={food} setFood={setFood} />
        <ResultSection result={result} message={message} />
      </div>
      <MoreInfoSection />
      <LegalSection />
    </div>
  );
}

export default App;
