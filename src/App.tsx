import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { appStore } from './app/store';
import List from './components/List';
import Details from './components/Details';
import Search from './components/Search';

function App() {
  const WrappedApp = () => {
    return (
      <>
        <Search />
        <List />
        <Details />
      </>
    );
  };

  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/search?/:keyword?/pokemon?/:pokemonId?" element={<WrappedApp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
