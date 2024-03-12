import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import { Box } from '@mui/material'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import Emailverification from '../Auth/Emailverification'
import FrontPage from '../FrontPage/FrontPage'
import Emailconfirm from '../Emailconfirm/Emailconfirm'
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword'
import Verifyemail from '../Auth/Verifyemail'
import ResetPassword from '../Auth/ResetPassword/ResetPassword'
import Services from '../Services/Services'
import ContactUs from '../ContactUs/ContactUs'
import AboutUs from '../AboutUs/AboutUs'
import Loghome from '../Loghome/Loghome'
import Contact from '../Contact/Contact'
import ContentLibrary from '../ContentLibrary/ContentLibrary'
import Business from '../Auth/Business/Business'
import ContentLibrary1 from '../ContentLibrary1/ContentLibrary1'
import ContentLibrary2 from '../ContentLibrary2/ContentLibrary2'
import Socialmedia from '../Socialmedia/Socialmedia'


function Home() {

  return (
    <Box>
        <Navbar />
        <Login />
        <SignUp/>
        <Emailverification/>
        <FrontPage/>
        <Emailconfirm/>
        <ForgotPassword/>
        <Verifyemail/>
        <ResetPassword/>
        <Services/>
        <ContactUs/>
        <Contact/>
        <AboutUs/>
        <Loghome/>
        <ContentLibrary/>
        <Business/>
        <ContentLibrary1/>
        <ContentLibrary2/>
        <Socialmedia/>
    </Box> 
  )
}

export default Home
