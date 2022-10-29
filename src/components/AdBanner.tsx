const IMAGE_URL =
  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

const IMAGE_ALT = 'ad link';
const AD_URL = 'https://www.wanted.co.kr/';
export default function AdBanner() {
  return (
    <a href={AD_URL}>
      <img src={IMAGE_URL} alt={IMAGE_ALT} />
    </a>
  );
}
