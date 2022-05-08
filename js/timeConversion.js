function getTimeAgo(date) {
  const now = Date.parse(new Date()) / 1000;
  const start = Date.parse(date) / 1000;

  const seconds = now - start;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  let resultStr = "";

  if (weeks > 4) {
    resultStr = new Date(start * 1000).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } else if (weeks > 1) {
    resultStr = weeks + " weeks ago";
  } else if (weeks === 1) {
    resultStr = weeks + " week ago";
  } else if (days > 1) {
    resultStr = days + " days ago";
  } else if (days === 1) {
    resultStr = days + " day ago";
  } else if (hours > 1) {
    resultStr = hours + " hours ago";
  } else if (hours === 1) {
    resultStr = hours + " hour ago";
  } else if (minutes > 1) {
    resultStr = minutes + " minutes ago";
  } else if (minutes === 1) {
    resultStr = minutes + " minute ago";
  } else {
    resultStr = "just now";
  }

  return resultStr;
}

module.exports = getTimeAgo;
