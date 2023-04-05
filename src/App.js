import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";
import Checkout from "./routes/checkout/Checkout.component";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { USER_ACTION_TYPES } from "./store/user/user.types";
// import Directory from "./components/directory/Directory.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
      // dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
  // const categories = [
  //   {
  //     "id": 1,
  //     "title": "hats",
  //     "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  //   },
  //   {
  //     "id": 2,
  //     "title": "jackets",
  //     "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  //   },
  //   {
  //     "id": 3,
  //     "title": "sneakers",
  //     "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  //   },
  //   {
  //     "id": 4,
  //     "title": "womens",
  //     "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  //   },
  //   {
  //     "id": 5,
  //     "title": "mens",
  //     "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  //   }
  // ]

  // return (
  //   <>
  //   <Directory categories={categories} />

  //   </>
  // );
};

export default App;
