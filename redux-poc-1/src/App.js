
import Title from './components/Title'
import Menu from './components/Menu'
import { Provider } from 'react-redux'
import store from "./store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Title />
      <Menu />
    </Provider>
  </>
  );
}

export default App;
