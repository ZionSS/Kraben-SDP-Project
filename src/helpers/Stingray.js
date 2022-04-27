import Card from '../components/Card';
import { useEffect, useState } from 'react';
import '../components/styles/Stingray.css';

const Stingray = () => {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };
  /*
    const countNumber = (cart) => {
      return cart;
    };
  
    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    };*/
  const [kraben, setKraben] = useState([]);

  const get_kraben = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/product/?format=json');
      const kraben_data = await res.json();
      setKraben(kraben_data);
      console.log(kraben);
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    get_kraben();
  }, []);
  /*
  useEffect(() => {
    console.log('cart change');
  }, []);
*/
  console.log(query);
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
                price={'Price(Baht) : ' + item.price}
                id={item.amount}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Stingray;
