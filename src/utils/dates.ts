export function getDayAbbreviationFromTimestamp(timestamp: number): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(timestamp * 1000);
  const dayIndex = date.getUTCDay();
  return days[dayIndex];
}

export function getDayOfMonthFromTimestamp(timestamp: number): number {
  const date = new Date(timestamp * 1000);
  return date.getUTCDate();
}

export function formatDateFromTimestamp(timestamp: number): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const dayOfWeek = days[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate().toString().padStart(2, "0");
  return `${dayOfWeek} ${dayOfMonth}`;
}

export function getMonthAbbreviationFromTimestamp(timestamp: number): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const monthIndex = date.getUTCMonth();
  return months[monthIndex];
}
