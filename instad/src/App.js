import './App.css';

import InputField from './components/inputField/inputField.js';

function App() {
  return (
    <div className="App">
        <InputField text="Product Name" preview="ex. HydrateIt"></InputField>
        <InputField text="Product Type" preview="ex. water bottle"></InputField>
        <InputField text="Genre" preview="ex. Enthusiastic"></InputField>
        <InputField text="Keywords" preview="ex. flavorful, accessible, affordable"></InputField>
    </div>
  );
}

export default App;
