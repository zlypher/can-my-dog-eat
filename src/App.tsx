import { useState } from "react";

interface IResultSectionProps {
  result: string;
  message: string | undefined;
}

function ResultSection({ result, message }: IResultSectionProps) {
  return <div className="p-10"></div>;
}

function App() {
  const [food, setFood] = useState<string>("Äpfel");
  const [result, setResult] = useState<string>("unset");
  const [message, setMessage] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-sky-100 text-center p-10">
        <h1 className="text-3xl text-slate-900 leading-10">
          Kann mein Hund{" "}
          <input
            value={food}
            onChange={(e) => setFood(e.target.value)}
            className="bg-sky-100 border-b-2 border-slate-900"
          />{" "}
          essen?
        </h1>
      </div>
      <ResultSection result={result} message={message} />
    </div>
  );
}

export default App;
