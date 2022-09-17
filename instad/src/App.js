import './App.css';

import Button from './components/button/button.js';
import InputField from './components/inputField/inputField.js';
import MainText from './components/mainText/mainText.js';

function App() {

  return (

    <div className="App">
        <MainText></MainText>
        <InputField text="Product Name" preview="ex. HydrateIt"></InputField>
        <InputField text="Product Type" preview="ex. water bottle"></InputField>
        <InputField text="Genre" preview="ex. Enthusiastic"></InputField>
        <InputField text="Keywords" preview="ex. flavorful, accessible, affordable"></InputField>
        <Button text="CREATE" handleClick={() => {window.alert('create')}}></Button>
    </div>
  );
}

export default App;
