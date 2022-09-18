import './App.css';
import { useState } from 'react';

import Button from './components/button/button.js';
import InputField from './components/inputField/inputField.js';
import MainText from './components/mainText/mainText.js';

function App() {
  const API_URL = 'http://localhost:3001';

  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [genre, setGenre] = useState('');
  const [keyword, setKeyword] = useState('');

  // Update prompt variable when handleChange is called

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeProduct = (e) => {
    setProduct(e.target.value);
  };

  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(null);
    fetch(`${API_URL}/api?name=${name}&keyword=${keyword}&genre=${genre}&product=${product}`)
      .then((res) => res.json())
      .then((data) => {
        setData(`${data.slice(0, -2)}`);
        console.log(data);
      });
  };

  return (
    <div className="App">
        <div className="flex-left">
          <img src={process.env.PUBLIC_URL+"instAd logo white shadow.png"} className="App-logo"/>
        </div>
        <div className="flex-right">
          <MainText></MainText>
          <div className="flex-fields">
            <InputField text="Product Name" preview="ex. HydrateIt" value={name} onChange={handleChangeName}></InputField>
            <InputField text="Product Type" preview="ex. water bottle" value={product} onChange={handleChangeProduct}></InputField>
            <InputField text="Genre" preview="ex. enthusiastic" value={genre} onChange={handleChangeGenre}></InputField>
            <InputField text="Keywords" preview="ex. exciting, flavorful, affordable" value={keyword} onChange={handleChangeKeyword}></InputField>
          </div>
          <div className="flex-button">
            <Button className="flex-button" text="CREATE" handleClick={handleSubmit}></Button>
          </div>

        </div>
        
    </div>
  );
}

export default App;
