import React, { useReducer, useEffect } from 'react';

import {onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import {auth, firestore} from '../firebase';

import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'

export const MainContext = React.createContext();

const INIT_STATE = {
    user: null,
    tasks: null
};

const reducer = (state, action) => {
    switch(action.type){
        case "CHEK_USER":
            return { ...state, user: action.payload}
        case "GET_TASKS":
            return { ...state, tasks: action.payload}    
        default:
            return state;
    }
}

const MainProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const checkUser = () => {
        onAuthStateChanged(auth, (user) => {
            let action = {
                type: "CHEK_USER",
                payload: user,
            };
            dispatch(action);
        })
    }
    
     const gogleProvider = new GoogleAuthProvider()

    const loginGoogle = async () => {
        try{
          await signInWithPopup(auth, gogleProvider)
          checkUser()
        } catch(error){
            console.log(error)
        }
    }

    const addTask = async (newTask) => {
        try{
       
           await addDoc(collection( firestore, "tasks"), {
               userId: state.user.uid,
               ...newTask
           })
        } catch(error){
            console.log(error)
        }
    }

    const getTasks = async () => {
        try{
            if(state.user){
            const data = await getDocs(query(collection(firestore, "tasks"), where("userId", "==", state.user.uid)))
            const tasks = [];
            data.forEach((doc) => {
                tasks.push({...doc.data(), docId: doc.id})
            })
            let action = {
                type: "GET_TASKS",
                payload: tasks,
            }
            dispatch(action)
        }
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
      checkUser()
    },[])
    return (
        <MainContext.Provider value={{
          
        }}>
            {props.children}
        </MainContext.Provider>
    );
};

export default MainProvider;