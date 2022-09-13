import ICON_FACEBOOK from '../images/icon-facebook.svg';
import ICON_TWITTER from '../images/icon-twitter.svg';
import ICON_PINTEREST from '../images/icon-pinterest.svg';
import ICON_SHARE from '../images/icon-share.svg';

const CardShare = () => {
  const handleOnClick = () => {
    if (document.querySelector('.Share').style.zIndex === "10") {
      document.querySelector('.Share').style.zIndex = 0;
      document.querySelector('.Author').style.zIndex = 10;
      document.querySelector('.Share').style.display = "none";
    }
    else {
      document.querySelector('.Share').style.zIndex = 10;
      document.querySelector('.Author').style.zIndex = 0;
      document.querySelector('.Share').style.display = "flex";
    }
  }

  return (
    <div className="Share">
      <h2>S H A R E</h2>
      <a href="/#"><img src={ICON_FACEBOOK} alt="Facebook"/></a>
      <a href="/#"><img src={ICON_TWITTER} alt="Twitter"/></a>
      <a href="/#"><img src={ICON_PINTEREST} alt="Pinterest"/></a>
      <button className="ShareBtn" onClick={handleOnClick}><img src={ICON_SHARE} alt="Share"/></button>
    </div>
  );
}

export default CardShare;