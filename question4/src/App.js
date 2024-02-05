import "./App.css";
import {useState} from 'react';

function App() {
  const [showPara, setShowPara] = useState(false);
  // implemnt this function and create respective states that are required to you to hide and show the paragrah tag
  const onClickHandler = () => {
    setShowPara(!showPara);
  };

  return (
    <div className="App">
      <a href="/" onClick={onClickHandler}>
        want to buy a new car?
      </a>

      {/* the below paragrah showed be conditionaly rendered based on how many times the user the has clicked on above link */}
      {
        showPara &&  <p>call +11 22 33 44 now!</p>
      }
      
    </div>
  );
}

export default App;
