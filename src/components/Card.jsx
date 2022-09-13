import IMG_DRAWER from '../images/drawers.jpg';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardAuthor from './CardAuthor';
import CardShare from './CardShare';

const Card = () => {
  return (
    <main className="Card">
      <img src={IMG_DRAWER} alt="Vase and pictures on top of a drawer"/>
      <div className="CardContent">
        <CardHeader />
        <CardBody />
        <CardAuthor />
        <CardShare />
      </div>
    </main>
  );
}

export default Card;