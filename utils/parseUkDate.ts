export const parseUKDate = (dateString: string) => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    timeZoneName: "long",
  });

  const parts = formatter.formatToParts(date);
  const timeZonePart = parts.find((p) => p.type === "timeZoneName");

  if (timeZonePart && timeZonePart.value.includes("Summer")) {
    date.setHours(date.getHours() - 1);
  }

  return date;
};
