import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../redux/details/details';
import { useParams } from 'react-router-dom';
import { addData } from '../redux/details/details';


const DetailsPage = ({ symbol }) => {
  
  const detailsReducer = useSelector((state) => state.detailsReducer);

  // dispatch(addData(detailsData));
  
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const [ temp, setTemp ] = useState(null);
  useEffect(() => {
  loadData(id).then((data) => {
    dispatch(addData(data));
  });
   
  }, []);
 

  const { response1 } = detailsReducer
   
  const { response2 } = detailsReducer

  console.log(response2);

  

  return (
    
    <div>
       <div>
        <p>{response1 && response1[0].description}</p>
        <p>{response1 && response1[0].image}</p>
        <p>{response1 && response1[0].image}</p>
          <p>hello</p>

      </div>
      <div>
        
       
          {response2 && response2.map((res)  => {
            <div key={res.date}>
              <p>{res.date}</p>
              </div>
          })}
       
          
      </div>
    </div>
  );
};

export default DetailsPage;
