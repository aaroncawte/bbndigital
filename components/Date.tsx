import { format, parseISO } from "date-fns";

type DateArgs = {
  dateString: string;
};

export default function Date({ dateString }: DateArgs) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "do LLLL yyyy")}</time>;
}
