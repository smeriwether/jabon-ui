export function formatMilliseconds(milli) {
  const date = new Date(milli);
  const minutes = date.getUTCMinutes() || 0;
  const seconds = date.getUTCSeconds() || 0;
  const milliseconds = date.getUTCMilliseconds() || 0;
  const roundedMilliseconds = Math.round(milliseconds / 1000 * 100) / 100;
  const displaySeconds = seconds + roundedMilliseconds;

  if (minutes) {
    return minutes + ' minutes ' + displaySeconds + ' seconds';
  }

  if (seconds) {
    return displaySeconds + ' seconds';
  }

  return milliseconds + ' milliseconds';
}
