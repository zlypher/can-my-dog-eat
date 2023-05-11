import { useState } from "preact/hooks";

interface IQuestionSectionProps {
  setFood: (newFood: string) => void;
}

export function QuestionSection({ setFood }: IQuestionSectionProps) {
  const [food, setInternalFood] = useState("Apfel");
  return (
    <div className="bg-sky-100 text-center p-10 h-2/6">
      <form
        onSubmit={(e) => {
          setFood(food);
          e.preventDefault();
        }}
      >
        <label htmlFor="food-input">
          <h1 className="text-3xl text-slate-900 leading-10 mb-4">
            Kann mein Hund das essen?
          </h1>
        </label>
        <input
          id="food-input"
          name="food-input"
          value={food}
          onChange={(e) => setInternalFood(e.target.value)}
          onSubmit={() => setFood(food)}
          className="border-2 border-slate-900 text-slate-900 mx-auto block mb-4 p-2 rounded"
        />
        <button
          type="submit"
          className="text-white py-2 px-4 border-2 border-slate-900 bg-slate-900 rounded"
        >
          Los!
        </button>
      </form>
    </div>
  );
}
