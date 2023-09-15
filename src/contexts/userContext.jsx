import {createContext, useState, useEffect} from 'react';
import {onAuthStateChangedListener, signOutUser} from "../utils/firebase/fireBase";
//as the actual value you want ot access
export const UserContext = createContext({
currentUser:null,
setCurrentUser:()=> null,
})

export const UserProvider=({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    signOutUser();

    useEffect(()=>{
       const unsubcribe= onAuthStateChangedListener((user)=>{
           console.log(user)
       })
        return unsubcribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}