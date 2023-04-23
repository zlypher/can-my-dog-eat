interface IResultSectionProps {
  result: string;
  message: string | undefined;
}

export function ResultSection({ result, message }: IResultSectionProps) {
  return <div className="p-10"></div>;
}
