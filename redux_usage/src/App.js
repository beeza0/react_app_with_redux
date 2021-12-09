import './App.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

function App(props) {

  const {newValue, clickButton} = props

  const [inputValue, setInputValue] = useState(newValue)

  const inputChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <div className="App">
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' onChange={inputChange}  value={inputValue}/>
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
