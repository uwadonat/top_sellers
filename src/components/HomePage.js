import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellers } from '../redux/home/home';
import Seller from './Seller';
import './HomePage.css';

const HomePage = () => {
  const sellers = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!sellers.length > 0) {
      dispatch(fetchSellers());
    }
  }, []);
  return (
   
      
      <ul className="seller-container row">
        {sellers.map((seller) => (
          <Seller key={seller.symbol} seller={seller} />
        ))}
      </ul>
     
   
  );
};

export default HomePage;
