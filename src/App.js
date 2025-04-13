import './App.css';
import { AllRoute} from './Routes/AllRoute';
import { Header,Footer } from './components/index';

function App() {
  return (
    <div className='App bg-gray-900'>
      <Header />
      {/* <AllRoute /> */}
      <Footer/>
    </div>
  );
}

export default App;
