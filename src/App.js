import './App.css';
import CreateCustomer from './components/CreateCustomer';
import CustomerList from './components/CustomerList';
import Footer from './components/Footer';
import Header from './components/Header';
import DetailCustomer from './components/DetailCustomer';
import EditCustomer from './components/EditCustomer';
import {Route, Routes} from 'react-router-dom'

function App() {
  const title = "그린고객관리";
  return (
    <div className="App">
      <Header title={title} />
      <div className='contents'>
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/create" element={<CreateCustomer />} />
          <Route path="/customer/:id" element={<DetailCustomer />} />
          <Route path="/update" element={<EditCustomer />}/>
        </Routes>
      </div>
      <Footer title={title} />
    </div>
  );
}

export default App;
