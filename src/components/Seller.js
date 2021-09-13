import { PropTypes } from 'prop-types';
// import { useDispatch } from 'react-redux';
import "./Seller.css";
const Seller = ({ seller }) => {
  return (
    <li key={seller.symbol} className="seller-info">
      <div>
        <button>details</button>
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
