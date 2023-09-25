// export const scrollIntoTheView = (id) => {
//   if (typeof window !== 'undefined') {
//     // browser code
//     let element = document.getElementById(id);
//     if (!element) return;

//     element.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'nearest',
//     });
//   }
// };
const timeStamp = new Date().getTime();

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '') + timeStamp;

export const shortenNumber = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
};
