import { createContext, useState } from "react";

// here first i will create constext

export const CreatedContext = createContext(null);

// create provider here

const AppContext = ( props ) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    return (
      <>
      <CreatedContext.Provider value={{categories,setCategories,products,setProducts}} >
        {props.children}
      </CreatedContext.Provider>
      </>
    )
};

export default AppContext;


