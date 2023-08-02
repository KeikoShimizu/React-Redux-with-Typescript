import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';


function App() {

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1 className="text-4xl my-5">React Redux with Typescript</h1>
      <h2 className="text-5xl font-semibold my-5">{amount}</h2>
      <div className="flex flex-row flex-wrap gap-x-2 justify-around my-5" >
        <button onClick={() => depositMoney(1000)}
                className="bg-green-700 btn">
          Deposit
        </button>
        <button onClick={() => withdrawMoney(500)}
                className="bg-green-600 btn">
          Withdraw
        </button>
        <button onClick={() => bankruptMoney()} 
                className="bg-green-500 btn">
          Buncrupt
        </button>
      </div>
    </div>
  );
}

export default App;
