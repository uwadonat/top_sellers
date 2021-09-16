import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { loadData } from '../redux/details/details';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import './Seller.css';

const Seller = ({ seller }) => {
  const dispatch = useDispatch();
  return (
    <div key={seller.symbol} className="seller-card seller-info col-6 col-lg-3">
      <div>
        <Link to={`/DetailsPage/${seller.id}`}>
          <ArrowForwardIcon className="arrow-forward" />
        </Link>
      </div>
      <div className="seller-main-info">
        <h2 className="seller-name">
          <span>Name:</span>
          {seller.name}
        </h2>
        <p className="sellet-price">
          <span>Price:$</span>
          {seller.price}
        </p>
        <p className="seller-exchange">
          <span>Exchange:</span>
          {seller.exchange}
        </p>
      </div>
    </div>
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
