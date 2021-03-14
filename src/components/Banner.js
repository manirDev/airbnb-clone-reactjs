import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import "./Banner.css"
import Search from "./Search"
function Banner() {
    const history= useHistory();
    const [showSearch, setShowSearch]= useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search />}
                <Button onClick={()=>
                    setShowSearch(!showSearch)
                  }
                className="banner_searchButton"
                variant='outlined'
                >
                    {showSearch ? "Hide": "Search Date" }
             
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your
                     imagination</h1>
                <h5>
                    Plan a differnt kind of gateaway to uncover
                    the hidden gems near you
                </h5>     
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
