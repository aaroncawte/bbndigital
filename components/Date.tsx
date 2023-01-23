import { parseISO, format } from "date-fns";

type DateArgs = {
  dateString: string;
};

export default function Date({ dateString }: DateArgs) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
