export function getContrastingTextColor(hexColor) {
  if (!hexColor) {
    return '#000000';
  }

  let cleanHex = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;

  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

  return luminance > 186 ? '#000000' : '#FFFFFF';
}
