import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import { createRoot } from 'react-dom/client';

// class Input extends React.PureComponent {
//   render() {
//     let {forwardedRef, ...otherProps} = this.props; 
//     return <input {...otherProps} ref={forwardedRef} />;
//   }
// }

// const TextInput = React.forwardRef((props, ref) => {
//   return <Input {...props} forwardedRef={ref} />
// });

// class FocusableInput extends React.Component {
  
//   ref = React.createRef()

//   render() {
//     return <TextInput ref={this.ref} />;
//   }

//   // When the focused prop is changed from false to true, 
//   // and the input is not focused, it should receive focus.
//   // If focused prop is true, the input should receive the focus.
//   // Implement your solution below:
//   componentDidUpdate(prevProps) {}
  
//   componentDidMount() {}
// }

// FocusableInput.defaultProps = {
//   focused: false
// };

// const App = (props) => <FocusableInput focused={props.focused} />;

// document.body.innerHTML = "<div id='root'></div>";
// const root = createRoot(document.getElementById("root"));
// root.render(<App />);