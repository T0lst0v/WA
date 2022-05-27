export const imgUrl = (url) => (url ? url : "/noImage.svg");

export const fullAddress = (address) => (address ? address.join(" ") : "No address Provided");

export const sortDown = (arr) => arr.sort((a, b) => a.score - b.score);

export const sortUp = (arr) => arr.sort((a, b) => (a.score > b.score ? -1 : 1));
