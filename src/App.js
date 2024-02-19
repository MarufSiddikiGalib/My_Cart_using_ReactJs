import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import React,{useState} from 'react';

function App() {
  let [productList, setProductList] = useState([
    {
      price: 999,
      name: "Iphone 15",
      quantity: 0,
    },

    {
      price: 9999,
      name: "GPX DEMON",
      quantity: 0,
    }

  ]);

    //let [productList, setProductList] = useState([])
    let [totalAmount, setTotalAmount] = useState(0);

    const incrementQuantity = (index) => {
      let newProductList = [...productList]
      let newTotalAmount = totalAmount
      newProductList[index].quantity++
      newTotalAmount += newProductList[index].price
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }

    // const decrementQuantity = (index) => {
    //   let newProductList = [...productList]
    //   newProductList[index].quantity > 0 ? newProductList[index].quantity-- : newProductList[index].quantity = 0;
    //   setProductList(newProductList);
    // }

    const decrementQuantity = (index) => {
      let newProductList = [...productList];
      let newTotalAmount = totalAmount
      if (newProductList[index].quantity > 0) {
        newProductList[index].quantity--;
        newTotalAmount -= newProductList[index].price
      } else {
        newProductList[index].quantity = 0;
      }
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }

   const resetQuantity = () =>{
     let newProductList = [...productList]
     newProductList.map((product)=>{
        product.quantity = 0
    })
    setProductList(newProductList);
   }

   const removeItem = (index) =>{
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index,1)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
   };


   const addItem = (name,price) =>{
    let newProductList = [...productList]
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    });
    
    setProductList(newProductList);
    
   };
    
  return (
    <>
    <Navbar/>

    <main className='container mt-5'>

    <AddItem AddItem = {addItem}/>

      <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity}
      removeItem = {removeItem}/>
    </main>

    <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity}/>
    </>
    
  );
}

export default App;
