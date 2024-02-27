import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: localStorage.getItem("selectedProducts") === null ? [] :
   JSON.parse(localStorage.getItem("selectedProducts")),
    
    selectedProductsID:localStorage.getItem("selectedProductsID") === null ? [] :
    JSON.parse(localStorage.getItem("selectedProductsID")),
};

export const counterSlice = createSlice({
    name: "cart",
    initialState,
      // action.payload => product From API => القيمة التى بداخل الاقواس
    reducers: {
      addToCart: (state, action) => {
    // action.payload => product From API => القيمة التى بداخل الاقواس
        const productWithQuantity = {...action.payload, "quantity":1}
        state.selectedProducts.push(productWithQuantity)
        state.selectedProductsID.push(productWithQuantity.id)
       localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts));
       localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID));
      },
  
      increaseQuantity: (state, action) => {
        // action.payload => product From user 
        const increaseProduct = state.selectedProducts.find((item) => { 
            return item.id === action.payload.id;
         })

          increaseProduct.quantity +=1;

         localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts));
      },
  
      decreaseQuantity: (state, action) => {
    // action.payload => product From user 
    const decreaseQuantity = state.selectedProducts.find((item) => { 
        return item.id === action.payload.id;
     })
     decreaseQuantity.quantity -=1
     if (decreaseQuantity.quantity === 0) {
        // delete the selected product
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const newArr1 = state.selectedProductsID.filter((item) => {
            return item !== action.payload.id;
          });
        state.selectedProducts = newArr;
        state.selectedProductsID = newArr1;
        

      }
      localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts));
      localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID));
      },
  
      deleteProduct: (state, action) => {
    // action.payload => product From user 
        const deleteProduct = state.selectedProducts.filter((item) => { 
            return item.id !== action.payload.id;
         })
        state.selectedProducts = deleteProduct;
        state.selectedProductsID = deleteProduct;
         localStorage.setItem("selectedProducts",JSON.stringify(state.selectedProducts));
        localStorage.setItem("selectedProductsID",JSON.stringify(state.selectedProductsID));
      },
    },
  });
  export const {deleteProduct, addToCart, increaseQuantity, decreaseQuantity } = counterSlice.actions;

export default counterSlice.reducer;