import React,{useRef} from 'react'
import {firestore} from "../firebase.js"
import {getFirestore, addDoc, collection} from "@firebase/firestore";

export default function TestFirebase(){

    const messageRef=useRef();
    const ref=collection(firestore,"messages");

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(messageRef.current.value);
        let data={
            message:messageRef.current.value,
        }

        try{
            addDoc(ref,data)
        }catch{
            console.log(e);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Message</label>
                <input type="test" ref={messageRef} />
                <button type="submit">Test</button>
            </form>
        </div>
    )
}