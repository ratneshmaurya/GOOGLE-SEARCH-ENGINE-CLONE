import React ,{useState}from 'react'
import Navbar from './components/Navbar'
import Router from './components/Router'
import Footer from './components/Footer'

function App() {
    const [darkTheme,setDarkTheme]=useState(false);
    return (
        <div className={darkTheme? 'dark':''}>
            <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 min-h-screen">
               <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
               <Router/>
               <Footer/>
            </div>
        </div>
    )
}

export default App
