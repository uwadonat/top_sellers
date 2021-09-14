const ADD_DATA = 'top-sellers/details/ADD_DATA';
const DISPLAY_DATA = 'top-sellers/details/DISPLAY_DATA';


const defaultState = {};

const detailsReducer = (state = defaultState, action) => {
    switch( action.type) {
        case ADD_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const addData = (payload) => ({
    type:ADD_DATA,
    payload,
});

export const loadData = (symbol = 'Facebook') => (dispatch) => {
    fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=857a73104acc587cd3aba99c381d99c9`)
      .then((presponse) => presponse.json())
      .then((profile) => {
        fetch(`https://financialmodelingprep.com/api/v3/historical-chart/1hour/${symbol}?apikey=857a73104acc587cd3aba99c381d99c9`)
          .then((cresponse) => cresponse.json())
          .then((chart) => {
            const detailsData = {
              profileData: profile[0],
              chartData: chart,
            };
            dispatch(addData(detailsData));
          });
      });
  };
  
  export default detailsReducer;
  