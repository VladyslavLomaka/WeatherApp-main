export const useDebounceWithCallback = <T>(
  initialValue: T,
  delay: number,
  cb: (state: T) => void | undefined
) => {
  let timeout: NodeJS.Timeout;
  return (value = initialValue) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (typeof cb === "function") {
        cb(value);
      }
    }, delay);
  };
};
