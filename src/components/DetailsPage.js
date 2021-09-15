import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../redux/details/details';
import { useParams } from 'react-router-dom';
import { addData } from '../redux/details/details';
import './DetailsPage.css';

const DetailsPage = ({ symbol }) => {
  const detailsReducer = useSelector((state) => state.detailsReducer);

  // dispatch(addData(detailsData));

  const { id } = useParams();
  const dispatch = useDispatch();
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    loadData(id).then((data) => {
      dispatch(addData(data));
    });
  }, []);

  const { response1 } = detailsReducer;

  const { response2 } = detailsReducer;

  // console.log(response2);

  return (
    <div className="details-container">
      <div>
        <h2 className="details-title text-center">
          Learn more about{" "}
          <span className="seller-name text-info">
            {response1 && response1[0].companyName}{" "}
          </span>
        </h2>
        <table class="table table-dark table-striped">
          <tbody>
            <tr>
              <th scope="row">Company Name:</th>
              <td>{response1 && response1[0].companyName}</td>
            </tr>
            <tr>
              <th scope="row">CEO:</th>
              <td>{response1 && response1[0].ceo}</td>
            </tr>
            <tr>
              <th scope="row">Phone:</th>
              <td>{response1 && response1[0].phone}</td>
            </tr>
            <tr>
              <th scope="row">country:</th>
              <td>{response1 && response1[0].country}</td>
            </tr>
            <tr>
              <th scope="row">Description:</th>
              <td>{response1 && response1[0].description}</td>
            </tr>
            <tr>
              <th scope="row">Website:</th>
              <td>{response1 && response1[0].website}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {response2 &&
          response2.map((res) => {
            <div key={res.date}>
              <p>{res.date}</p>
            </div>;
          })}
      </div>
    </div>
  );
};

export default DetailsPage;
