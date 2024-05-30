import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observe user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {

            // const userEmail = createUser?.email || user?.email;
            // const loggedUser = {email: userEmail};

            console.log("observer", createUser);
            setUser(createUser);
            setLoading(false)

            // if user exists then issue a token
            // if(createUser) {
            //     fetch("https://assignment-11-server-lac-beta.vercel.app/jwt", {
            //         method: "POST",
            //         credentials: "include",
            //         headers: {
            //             "content-type": "application/json"
            //         },
            //         body: JSON.stringify(loggedUser)
            //     })




                // axios.post("https://assignment-11-server-lac-beta.vercel.app/jwt", loggedUser, {withCredentials: true})
                // .then(res => {
                //     console.log("token response", res.data)
                // })




            // } else {
            //     axios.post("https://assignment-11-server-lac-beta.vercel.app/logout", loggedUser, {withCredentials: true})
            //     .then(res => {
            //         console.log(res.data);
            //     })
            // }
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {createUser, logOut, signInUser, loading, user, name, setName, setPhotoURL, photoURL}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider