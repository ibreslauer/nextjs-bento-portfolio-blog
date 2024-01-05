export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  } as Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
