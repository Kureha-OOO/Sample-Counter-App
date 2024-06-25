import { Provider } from 'react-redux';
import './App.css';
import CounterApp from './components/pages/top';
import { store } from './reducks/store';

function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );

}

export default App;
