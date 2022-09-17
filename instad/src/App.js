import './App.css';

import InputField from './components/inputField.js';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <InputField text="Product Name" preview="ex. HydrateIt"></InputField>
    </div>
  );
}

export default App;
