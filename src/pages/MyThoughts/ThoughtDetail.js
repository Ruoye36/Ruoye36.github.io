import React,{useState,useRef} from  'react'
import { firestore } from '../../firebase.js';
import {getFirestore, addDoc, collection} from "@firebase/firestore";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function SingleThought(){

    const [value, setValue]=useState('');
    console.log(value);

    const commentTitleRef=useRef();
    const commentContentRef=useRef();
    const ref=collection(firestore,"comments");

    const handleSubmitComment=async (e)=>{
        e.preventDefault();
        console.log(commentTitleRef.current.value);
        console.log(commentContentRef.current.value);
        let data={
            commentTitle:commentTitleRef.current.value,
            commentContent:commentContentRef.current.value,
        }
        try{
            addDoc(ref,data)
        }catch{
            console.log(e)
        }
        
    }

    return(
        <div className="my substrated">
            <h1>Random thought 1</h1>
            <h3>Nov 17 2022 <span style={{color:"#6d99a0"}}>#anxiety#</span></h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
            </p>
            <h3>Comment</h3>
            <form onSubmit={handleSubmitComment}>
                <input type='text' placeholder='Title' ref={commentTitleRef}/>
                <ReactQuill className='editor' theme='snow' value={value} ref={commentContentRef}/>
                <button type="submit">Comment</button>
            </form>
        </div>
    )
}

export default SingleThought;