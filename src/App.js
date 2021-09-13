import react from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, saveToStorage} from './actions';
import Bottom from './Bottom';

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counting {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(saveToStorage(counter))}>save to database</button>
      
      {isLogged ? <h3>i am logged in</h3> : ''}
      <Bottom />
    </div>
  );
}

export default App;
