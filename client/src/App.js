import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/appNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal'
import { Provider } from 'react-redux'
import store from './store'



function App() {
  return (
    <Provider store={store}>
     <div className="App">
       <AppNavbar />
       <div className="container">
        <ItemModal />
        <ShoppingList />
       </div>
     </div>
    </Provider>
  );
}

export default App;
