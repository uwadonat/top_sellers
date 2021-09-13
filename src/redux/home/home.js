const FETCH_SELLERS = 'top_sellers/home/FETCH_SELLERS';

const initialState = [];

export const fetchSellers = () => async (dispatch) => {
  const fetched = await fetch('https://financialmodelingprep.com/api/v3/stock/list?apikey=857a73104acc587cd3aba99c381d99c9');
  const list = await fetched.json();
  const sellers = [];
  list.map((seller) => sellers.push({
    id: seller.symbol,
    name: seller.name,
    price: seller.price,
    exchange: seller.exchange,
  }));
  dispatch({
    type: FETCH_SELLERS,
    payload: sellers.slice(0, 100),
  });
};

const homeReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SELLERS:
            return[...action.payload];
        default:
            return state;  
       }
};

export const sellers = (state) => state.sellers;
export default homeReducer;