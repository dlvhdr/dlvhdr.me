import { parseISO, format } from "date-fns";
import { he } from "date-fns/locale";

type DateProps = {
  dateString: string;
};

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d/M/yyyy", { locale: he })}
    </time>
  );
}
