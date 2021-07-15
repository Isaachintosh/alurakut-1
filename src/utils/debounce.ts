let timeout: NodeJS.Timeout;

export function debounce(func: () => void, time: number) {
  clearTimeout(timeout);
  timeout = setTimeout(func, time);
}
