import Article from './components/Article/index';
import Header from './components/Header';
import Footer from './components/Footer/index';
import Home from './Pages/Home';
import About from './Pages/About';
import Route from './components/Route';

export default function App() {
  const { pathname } = window.location;

  let namePath = 'post';

  function getPathId(name) {
    return pathname.replace(`/${name}/`, '');
  }

  return (
    <div className="App">
      <Header />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/post">
        <Article id={getPathId(namePath)} />
      </Route>

      <Route path="/about" exact>
        <About />
      </Route>

      <br />
      <Footer />
    </div>
  );
}
