import { imgUrl, fullAddress } from "./Utils";

export default function dataProcess(data) {
  return data.forEach((el) => {
    el.address = fullAddress(el.location.display_address);
    el.score = (el.review_count * el.rating) / (el.review_count + 1);
    el.score = el.score.toFixed(2);
    el.imageUrl = imgUrl(el.image_url);
    el.reviewCount = el.review_count ? el.review_count.toString() : "0";
  });
}
