import React, { useCallback, useEffect, useState } from 'react'
import './search.css'
import SearchContent from './SearchContent'
import {FaSearch} from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const Search = () => {
    const [title, setTitle] = useState(null);
    const [show, setShow] = useState([]);
    const token = localStorage.getItem('token')
    axios.defaults.baseURL = 'http://localhost:8090'

    const handleSearch = useCallback(async() => {
        try {
            if(!token) return;
            const response = await axios.get(`/api/search/?title=${title}`,{
                headers: {
                    Authorization: token
                }
            })
            let {data} = response;
            setShow(data)
        } catch (error) {
            toast.error(error)
        }
    },[title])
    useEffect(()=>{
        handleSearch()
    },[])
    return (
        <div className='searchpage'>
            <div className='navbox'>
                <div className="nav-input">
                    <input type="text" placeholder='Search here' onChange={(e)=> setTitle(e.target.value)} />
                    <button onClick={handleSearch}><FaSearch /></button>
                </div>
                <div className="nav-logout">
                    <button>Log Out</button>
                </div>
            </div>
            <SearchContent data={show} />
        </div>
    )
}

export default Search
