import React from 'react';
import MainNavBar from './navbar';
import HomePage from './home_page';
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './footer'
import AnnouncePostDetails from './home_page/dashboard/post_details/announcePostDetails'
import profilePostDetails from './home_page/dashboard/post_details/profilePostDetails'
import LoginPage from './home_page/auth/signIn'
import SignupPage from './home_page/auth/signUp'
import CreateAnnounce from './user/announce/createAnnounce'
import ListAllAnnounce from './user/announce/listUserAnnounces'

const Components = () => {
    return(
        <BrowserRouter>
        <div className="Components">
            <MainNavBar/>
            <Route path="/" exact key="1" component={()=><HomePage/>}/>
            <Route path="/post/anno/:id" exact key="2" component={()=><AnnouncePostDetails/>}/>
            <Route path="/post/pro/:id" exact key="3" component={()=><profilePostDetails/>}/>
            <Route path="/signin" exact key="4" component={()=><LoginPage/>}/>
            <Route path="/signup" exact key="5" component={()=><SignupPage/>}/>
            <Route path="/post/anno" exact key="6" component={()=><CreateAnnounce/>}/>
            <Route path="/posts" exact key="7" component={()=><ListAllAnnounce/>}/>
            <Route path="/posts/:id" exact key="8" component={()=><ListAllAnnounce/>}/>
            <Footer/>
        </div>
        </BrowserRouter>
    )
};

export default Components