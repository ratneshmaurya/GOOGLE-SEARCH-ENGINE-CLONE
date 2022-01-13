import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Results from './Results'

const Router = () => {
    return (
        <div className='p-3'>
            <Routes>
                {/* navigate to search url when home url comes , means we will always be on search path url*/}
                <Route exact path='/' element={<Navigate to='/search'/>}/>
                <Route exact path='/GOOGLE-SEARCH-ENGINE-CLONE' element={<Navigate to='/search'/>}/>
               

                {/* now every time render the result page on each of the path name */}
                <Route exact path='/images' element={<Results/>}/>
                <Route exact path='/search' element={<Results/>}/>
                <Route exact path='/news' element={<Results/>}/>
                <Route exact path='/videos' element={<Results/>}/>
            </Routes>
        </div>
    )
}

export default Router
