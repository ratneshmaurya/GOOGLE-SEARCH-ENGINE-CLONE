import React ,{useState,useEffect}from 'react'
import Links from './Links'
import {useDebounce} from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';


const Search = () => {


    //here text is defined , now whenevr the input field value changes this 'text' value changes and debouncedValue changes and if debouncedValue changes then setSearchTerm of context called and it calls the API . (as our context contains the setSearched function that helps taking the searched word which use type to get searched)
    const[text,setText]=useState('');
    const{setSearchTerm}=useResultContext();
    const[debouncedValue]=useDebounce(text,300); //specifying debounce value and debouncing every 300 milli-sec

    useEffect(()=>{
        //console.log(debouncedValue +" debouncded");
        setSearchTerm(debouncedValue);

    },[debouncedValue]); //this useEffect only run when debounced value changes , which changes only after 300 milli sec

    const[formValue,setFormValue]=useState('');

    return (


        <div className='relative sm:ml-48  md:ml-72 sm:-mt-10 mt-3'>
        <form onSubmit={(e)=>{ 
            e.preventDefault()
            setText(formValue)}}>
        <input value={formValue} type="text" className="sm:w-96 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg" placeholder="Search" onChange={(e)=>setFormValue(e.target.value)} />
        </form>
            


            {/* if text aajaye then cross ka marks bhi ho , to remove text and make empty if user wants */}
            {text &&(
                <button type="button" className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={()=>{
                    setFormValue('') //so that whatever written on input become null
                    setText('') //so that api ki searchTerm null ho jaae , not making any request
                    }}>
                    X
                </button>
            )}

            
            
            {/* now adding NAVLINKS to change respective URL on clicking the options */}
            <Links/>
        </div>
    )
}

export default Search
