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

export const calculateRemainingDays = (epochTimestamp: number): string => {
  const currentTimeMilliseconds = Date.now();
  const epochMilliseconds = epochTimestamp * 1000;

  const differenceMilliseconds = epochMilliseconds - currentTimeMilliseconds;
  const remainingDays = Math.ceil(
    differenceMilliseconds / (1000 * 60 * 60 * 24),
  );

  const days = remainingDays == 1 ? " day" : " days";

  return remainingDays + days;
};

export const calculateTimePercentageComplete = (
  startEpochTimestamp: number,
  endEpochTimestamp: number,
): number => {
  const startMilliseconds = startEpochTimestamp;
  const endMilliseconds = endEpochTimestamp;
  const totalDurationMilliseconds = endMilliseconds - startMilliseconds;

  const currentTimeMilliseconds = Math.round(Date.now() / 1000);

  const elapsedMilliseconds = currentTimeMilliseconds - startMilliseconds;
  const percentageComplete =
    (elapsedMilliseconds / totalDurationMilliseconds) * 100;

  return Math.round(percentageComplete);
};
