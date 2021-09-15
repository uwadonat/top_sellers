import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { loadData } from '../redux/details/details';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  Link,
} from 'react-router-dom';
import "./Seller.css";

const Seller = ({ seller }) => {
  const dispatch = useDispatch();
  return (
    <li key={seller.symbol} className="seller-info col-sm-6 col-lg-3" >
      <div>
        <Link to={`/DetailsPage/${seller.id}`} ><ArrowForwardIcon className="arrow-forward"/></Link>
        <h2 className="seller-name">{seller.name}</h2>
        <p className="sellet-price">{seller.price}</p>
        <p className="seller-exchange">{seller.exchange}</p>
      </div>
    </li>
  );
};

export default Seller;

Seller.propTypes = {
  seller: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
  }).isRequired,
};
