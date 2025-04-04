export const isMobileDevice = (): boolean => {
    if (typeof navigator === 'undefined') return false;

     // 스마트폰인 경우만 true
  return /Mobi|iPhone|iPod|Android.*Mobile|Windows Phone/i.test(navigator.userAgent);
}