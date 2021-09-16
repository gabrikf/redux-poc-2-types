import CurrentPage from './components/currentPage'
import store from './app/store'
import { Provider } from 'react-redux'
import Title from './components/title'

function App() {
  return (
    <Provider store={store}>
      <Title />
      <CurrentPage />
  </Provider>
  );
}

export default App;
