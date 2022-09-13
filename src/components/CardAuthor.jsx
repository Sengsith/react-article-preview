import ICON_AVATAR from '../images/avatar-michelle.jpg';
import ICON_SHARE from '../images/icon-share.svg';

const CardAuthor = () => {
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
    <div className="Author">
      <img src={ICON_AVATAR} alt="Michelle Avatar"/>
      <div className="AuthorDesc">
        <p className="Name">Michelle Appleton</p>
        <p>28 Jun 2020</p>
      </div>
      <button className="ShareBtn" onClick={handleOnClick}><img src={ICON_SHARE} alt="Share"/></button>
    </div>
  );
}

export default CardAuthor;