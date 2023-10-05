import { useEffect} from 'react';
import {useDispatch} from "react-redux";
import Home from "./routes/home/homeComponent";
import {  Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/fireBase";
import  {setCurrentUser} from "./store/user/userAction";


const App = () => {

const dispatch = useDispatch();

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unSubscribe;
    }, [dispatch]);

    return (
    <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
    </Routes>
  );
};
export default App;
