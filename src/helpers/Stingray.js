import Card from '../components/Card';
import { useEffect, useState } from 'react';
import '../components/styles/Stingray.css';
import axios from 'axios';

const Stingray = () => {
  const [query, setQuery] = useState('');
  const handleClick = (id, amount) => {
    console.log(id, amount)
    post_kraben(id,amount)
  }
  const post_kraben = (id,amount) => {
    axios({
      method:'POST',
      url: 'http://localhost:8000/api/orderitem/',
      data:{
        product_id:id,
        quantity:amount
      }
    })
  }
  

  const [kraben, setKraben] = useState([]);

  const get_kraben = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/product/?format=json');
      const kraben_data = await res.json();
      setKraben(kraben_data);
      console.log(kraben);
      //console.log('success');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_kraben();
  }, []);

  return (
    <div className="stingray">
      <div className="col-15">
        <input
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <br />
      </div>

      <div className="krabenList">
        {kraben
          .filter((n) => n.title.toLowerCase().includes(query))
          .map((item) => {
            return (
              <Card
                key={item.id}
                image={item.img}
                name={item.title}
                description={item.description}
                price={item.price}
                id={item.id}
                amount={item.amount}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Stingray;
