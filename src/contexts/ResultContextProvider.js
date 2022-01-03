import React,{createContext,useContext,useState}from 'react'


//we are creating context and context me hi API call function de rhe , thus we can call this api from any component and their childs.
const ResultContext=createContext(); //creating context
const baseUrl='https://google-search3.p.rapidapi.com/api/v1';

//creating context provider definition and setting API function in it.
//children is the prop that every react component has
export const ResultContextProvider = ({children}) => {
    const[results,setResults]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[searchTerm,setSearchTerm]=useState('  ');//to access the search term

    //now an async function to get results from api
    //type here is '/search' , '/images','/news' etc...
    const getResults=async(type)=>{
        setIsLoading(true); //to make loading 

        const response=await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers:{
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '3256d78c08msh5b1ee1c22d4e730p14b148jsn68c18cde7c1b',
            }
        });


        //now fetching data from response
        const data=await response.json();

        if(type.includes('/news')){
            setResults(data.entries);
        }else if(type.includes('/images')){
            setResults( data.image_results);
        }else{
            setResults(data.results);
        }

        setIsLoading(false); //stopping loading 
    }

    return(

        //ResultContext (which is the context box) taking provider , yaha define krr rhe (becoz children abhi diya nhi koi , we will use this context provider definition and will set the correct children)
        //now in any component we can access this ResultContext by using useContext HOOK.

        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </ResultContext.Provider>
    );

}

//exporting another function to use the value of our context easily ,(we have used here useContext , yahi prr hmm access krne lge context ko and ek varibale me store krr liya , and we will use this varibale from each component)
export const useResultContext=()=>useContext(ResultContext);
