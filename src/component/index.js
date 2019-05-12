import React from 'react';
import MainNavBar from './navbar';
import HomePage from './home_page';
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './footer'
import AnnouncePostDetails from './home_page/dashboard/post_details/announcePostDetails'
import profilePostDetails from './home_page/dashboard/post_details/profilePostDetails'

const Components = () => {
    return(
        <BrowserRouter>
        <div className="Components">
            <MainNavBar/>
            <Route path="/" exact key="1" component={()=><HomePage/>}/>
            <Route path="/post/anno/:id" exact key="2" component={AnnouncePostDetails}/>
            <Route path="/post/pro/:id" exact key="3" component={profilePostDetails}/>
            <Footer/>
        </div>
        </BrowserRouter>
    )
};

export default Components