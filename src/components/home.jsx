import React, { useState } from 'react'
import AddSong from './addSong'
import Login from './login'
import SongList from './songList'

function Home() {


    const [loginOn, setLoginOn] = useState(false);
    const [choice, setChoice] = useState(false);


  return (

        <div className='container mt-5'>


            
            <div className='d-flex justify-content-end'>
             
                

            </div>

            <div>
            

            <div className='d-flex justify-content-between mb-3'>

                <div className='d-flex w-50'>
            
                    <button type="button" className="btn btn-primary mb-4 w-20 ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add Song
                    </button>
                    <a href className="btn btn-primary btn-rounded mb-4 w-20 mx-5" data-bs-toggle="modal" data-bs-target="#modalLoginForm">Login</a>

                </div>

                <form className="d-flex w-50 mb-4 ms-3 " role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
          


            </div>

          

            </div>

            <AddSong />
            <Login />
            <SongList />


            <p className='fw-bold fs-5'>Total Item : 3 </p>
        </div> 
    )
}

export default Home