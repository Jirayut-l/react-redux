import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { bindActionCreators } from 'redux';
import  {actionCreators} from './reducers/State'
function App() {

  const state = useSelector((state: RootState) => state.counters)
  const dispatch = useDispatch();

  const { increment, decrement } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => increment(1)}>plus</button>
      <button onClick={() => decrement(1)}>minus</button>

    </div>
  );
}

export default App;
