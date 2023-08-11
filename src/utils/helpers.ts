
export const calcDiscount = (price: number, percent: number): number => {
  return Math.floor(price * (percent / 100));
}

export function getRandomSlice(arr: any, len: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, len);
}

export function formatDate(date: Date): string {
  if (date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }
  return '';
} 

// add time
export function getSoonMinutes(minutes: number): any {
  const SOON_TIME = minutes * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfter = NOW_IN_MS + SOON_TIME;
  return dateTimeAfter;
}

// puase code execution
export function pause(milliseconds: number) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}