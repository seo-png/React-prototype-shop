// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Prototypes from './components/Prototype';
import Orders from './components/Orders';
import Footer from './components/Footer';
import AppStateProvider from './providers/AppStateProvider';

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
    
  );
}

export default App;
