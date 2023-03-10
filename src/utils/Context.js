// import { createContext, useState } from "react";

// export const Context = createContext();

// const AppContext = ({ childern }) => {
//   const [categories, setCategories] = useState();
//   const [products, setProducts] = useState();

//   return (<Context.Provider  value={{ categories, setCategories, products, setProducts }}>{childern}</Context.Provider>);
// };

// export default AppContext;

// import React from "react";

// import { createContext, useState } from "react";

// export const Contexxt = createContext(null);

// const UserContextProvider = (props) => {
//   const [categories, setCategories] = useState();
//   const [products, setProducts] = useState();
//   return (
//     <>
//       <Contexxt.Provider value={{ categories }}>
//         <>{props.childern}</>
//       </Contexxt.Provider>
//     </>
//   );
// };

// export default UserContextProvider;

// test 3

import { createContext, useState } from "react";
export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [user, setUser] = useState(null); // user value can be used anywhere
  console.log(props);
  return (
    <>
      <UserContext.Provider value={{ categories, setCategories,products, setProducts }}>
        {/* <>{props.children}</> */}
        <>{props.children}</>
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
