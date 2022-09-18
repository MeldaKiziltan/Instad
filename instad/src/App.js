import './App.css';

import Button from './components/button/button.js';
import InputField from './components/inputField/inputField.js';
import MainText from './components/mainText/mainText.js';

function App() {

  return (
    <div className="App">
        <div className="flex-left">
          <img src={process.env.PUBLIC_URL+"instAd logo white.png"} className="App-logo"/>
        </div>
        <div className="flex-right">
          <MainText></MainText>
          <div className="flex-fields">
            <InputField text="Product Name" preview="ex. HydrateIt"></InputField>
            <InputField text="Product Type" preview="ex. water bottle"></InputField>
            <InputField text="Genre" preview="ex. enthusiastic"></InputField>
            <InputField text="Keywords" preview="ex. exciting, flavorful, affordable"></InputField>
          </div>
          <div className="flex-button">
            <Button className="flex-button" text="CREATE" handleClick={() => {window.alert('create')}}></Button>
          </div>

        </div>
        
    </div>
  );
}

export default App;
