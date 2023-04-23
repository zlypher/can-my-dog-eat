interface IQuestionSectionProps {
  food: string;
  setFood: (newFood: string) => void;
}

export function QuestionSection({ food, setFood }: IQuestionSectionProps) {
  return (
    <div className="bg-sky-100 text-center p-10 h-2/6">
      <h1 className="text-3xl text-slate-900 leading-10">
        Kann mein Hund{" "}
        <input
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="bg-sky-100 border-b-2 border-slate-900 mx-auto block"
        />{" "}
        essen?
      </h1>
    </div>
  );
}
