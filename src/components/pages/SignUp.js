import React, { useState, useEffect } from 'react';
import '../styles/SignUp.css';
import bg from '../../images/BG.jpg';
import { UserAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [userid, setUserid] = useState(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postal, setPostal] = useState('');
  const [accType, setAccType] = useState('C');

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  function createWebUser(event) {
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/user/',
      data: {
        username: email,
        password: password,
      },
    });
    event.preventDefault();
  }
  function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password)
        .then(createWebUser(e))
        .then(sleep(1000))
        .then(getUser())
        .then(createAppUser(e));
      navigate('/login');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  function createAppUser(event) {
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/appuser/',
      data: {
        user: userid,
        user_type: accType,
        first_name: firstName,
        last_name: lastName,
        email: email,
        address: address,
        district: district,
        province: province,
        pincode: postal,
      },
    }).then((response) => {
      getUser();
    });
    event.preventDefault();
  }
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/api/user/',
    })
      .then((response) => {
        const data = response.data;
        setUserid(
          data
            .filter((e) => e.username == email)
            .map((test) => test.id)
            .at(0)
        );
        console.log(data);
        console.log(data.filter((e) => e.username == email));
        console.log(
          data.filter((e) => e.username == email).map((test) => test.id)[0]
        );
        console.log(
          data
            .filter((e) => e.username == email)
            .map((test) => test.id)
            .at(0)
        );
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  return (
    <div className="signUpBg" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="header">
        <br />
        Sign Up
        <br />
      </h1>
      <div
        className="mt-5 mx-auto p-3"
        style={{ background: '#cee', width: 700, minHeight: '515px' }}
      >
        <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col-6">
            <label for="inputUsername" class="form-label">
              Firstname
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              class="form-control"
              id="inputFirstname"
            />
          </div>
          <div class="col-6">
            <label for="inputUsername" class="form-label">
              Lastname
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              class="form-control"
              id="inputLastname"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="xxx@yyy.zzz"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="inputPassword4"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              District
            </label>
            <input
              onChange={(e) => setDistrict(e.target.value)}
              type="text"
              class="form-control"
              id="inputCity"
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Province
            </label>
            <select
              id="inputState"
              class="form-select"
              onChange={(e) => setProvince(e.target.value)}
            >
              <option selected>Choose...</option>
              <option>กรุงเทพมหานครฯ</option>
              <option>จังหวัด ก</option>
              <option>จังหวัด ข</option>
              <option>จังหวัด ค</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Postal Code
            </label>
            <input
              onChange={(e) => setPostal(e.target.value)}
              type="text"
              class="form-control"
              id="inputZip"
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Account Type
            </label>
            <select
              id="inputState"
              class="form-select"
              onChange={(e) => setAccType(e.target.value.charAt(0))}
            >
              <option selected>Customer</option>
              <option>Seller</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
        <div className="signin">
          <div>
            Already have account? <Link to="../login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
