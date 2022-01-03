import React,{useEffect} from 'react'
import { useLocation } from 'react-router'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from '../components/Loading'
import MainPage from './MainPage'

const Results = () => {

    //taking values from useResultContext in the destructured variables so that we get values separately
    const {results,searchTerm ,getResults , isLoading}=useResultContext();

    const location=useLocation();

    //making request here , it then make request from context
    useEffect(() => {
        if(searchTerm){

            //as videos pathway url is little bit different (it starts with '/search' in our API )
            //and after calling it gives results in result variable (becoz in our context we are setting result variable value by setResult function)
            if(location.pathname==='/videos'){
                getResults(`/search/q=${searchTerm} videos`);
            }
            else{
                getResults(`${location.pathname}/q=${searchTerm}&num=40`);
            }
        }
    }, [searchTerm,location.pathname])

    if(isLoading) return <Loading/>

    //now we have to return the iframes based on search url
    if(searchTerm){
        switch (location.pathname) {
            case '/search':
                return (
                    <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                        {
                            results?.map(({link,title,description},index)=>(
                               <div key={index} className='md:w-2/5 w-full'>
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <p className='text-sm'>
                                            {link?.length>30?link.substring(0,30):link}
                                        </p>
                                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700' >
                                            {title}
                                        </p>
                                    </a>
                                    <p>
                                        {description?.length>100?description.substring(0,120):description}......
                                    </p>
                               </div>
                            ))
                        }
                    </div>
                );
    
    
            case '/images':
                return (
                    <div className='flex flex-wrap justify-center items-center'>
                        {results?.map(({image,link},index)=>(
                            <a className='sm:p-3 p-5' href={link?.href} target="_blank" rel="noreferrer">
                                <img src={image?.src} alt={link?.title} loading='lazy'/>
                                <p className='w-36 break-words'>
                                    {link?.title}
                                </p>
                            </a>
                        ))}
                    </div>
                )
            case '/news':
                return (
                    <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
                    {
                        results?.map(({links,id,source,title})=>(
                           <div key={id} className='md:w-2/5 w-full'>
                                <a href={links?.[0].href} target="_blank" rel="noreferrer" className='hover:underline'>
                                    <p className='text-lg dark:text-blue-300 text-blue-700' >
                                        {title}
                                    </p>
                                </a>
                                <div className='fles gap-4'>
                                    <a href={source?.href} target="_blank" rel="noreferrer">
                                        {source?.href}
                                    </a>
                                </div>
                           </div>
                        ))
                    }
                </div>
                )
            case '/videos':
                return (
                    <div className='flex flex-wrap'>
                        {results.map((videos,index)=>(
                            <div key={index} className='p-2'>
                                {videos?.additional_links?.[0]?.href && <ReactPlayer url={videos.additional_links?.[0].href} controls width="355px" height="200px"/>}
                            </div>
                        ))}
                    </div>
                )
        
            default:
                return 'error'
        }
    }
    else{
        return(
            <MainPage/>
        )
    }
}

export default Results
