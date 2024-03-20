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

import Analytics from '../Analytics/Analytics'
import Facebookconnect from '../Auth/Facebookconnect/Facebookconnect'
import EmailCampaign from '../EmailCampaign/EmailCampaign'
import CreateEmailCampaign from '../CreateEmailCampaign/CreateEmailCampaign'
import Postpopup from '../Postpopup/Postpopup'
import Account from '../Account/Account'
import Update from '../Update/Update'
import ContentLibrary1 from '../ContentLibrary1/ContentLibrary1'
import ContentLibrary2 from '../ContentLibrary2/ContentLibrary2'
import Socialmedia from '../Socialmedia/Socialmedia'
import Postpopup from '../Postpopup/Postpopup'
import Account from '../Account/Account'
import Update from '../Update/Update'
import EmailcampaignTemplate from '../EmailcampaignTemplate/EmailcampaignTemplate'
import EmailcampaignPopup from '../EmailcampaignPopup/EmailcampaignPopup'
import AllCampaigns from '../AllCampaigns/AllCampaigns'
import ContentLibrary1 from '../ContentLibrary1/ContentLibrary1'
import ContentLibrary2 from '../ContentLibrary2/ContentLibrary2'
import Socialmedia from '../Socialmedia/Socialmedia'
import Postpopup from '../Postpopup/Postpopup'
import Account from '../Account/Account'
import Update from '../Update/Update'
import Whatsappcampaign from '../Whatsappcampaign/Whatsappcampaign'
import Createwhatsappcampaign from '../Createwhatsappcampaign/Createwhatsappcampaign'
import Draft from '../Draft/Draft'
import Contentcalendar from '../Contentcalendar/Contentcalendar.js'
import Schedule from '../Schedule/Schedule'
import Contentcalendar from '../Contentcalendar/Contentcalendar'
import EmailcampaignTemplate from '../EmailcampaignTemplate/EmailcampaignTemplate'
import EmailcampaignPopup from '../EmailcampaignPopup/EmailcampaignPopup'
import AllCampaigns from '../AllCampaigns/AllCampaigns'
import WhatsappCampainTemplate from '../WhatsappCampaignTemplate/WhatsappCampaignTemplate'
import WhatsapPopup from '../WhatsapPopup/WhatsapPopup'
import Whatsappallcampaign from '../Whatsappallcampaign/Whatsappallcampaign'
import Schedule from '../Schedule/Schedule'
import Adminhome from '../Adminhome/Adminhome.js'
import TotalUsers from '../Adminhome/TotalUsers.js'
import ActiveUsers from '../Adminhome/ActiveUsers.js'
import InactiveUsers from '../Adminhome/InactiveUsers.js'
import BlockedUsers from '../Adminhome/BlockedUsers.js'
import  Feedback  from '../Adminhome/Feedback.js'
import SubscribedUsers from '../Adminhome/SubscribedUsers.js'
import  Dashboard  from '../Adminhome/Dashboard.js'



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
        <Analytics />
        <Facebookconnect />
        <EmailCampaign />
        <CreateEmailCampaign />
        <Postpopup/>
        <Account/>
        <Update/>
        <EmailcampaignTemplate />
        <EmailcampaignPopup />
        <AllCampaigns />
        <Whatsappcampaign/>
        <Createwhatsappcampaign/>
        <Draft/>
        <Whatsappcampaign/>
        <Createwhatsappcampaign/>
        <Draft/>
        <Schedule/>
        <Contentcalendar/>
        <EmailcampaignTemplate />
        <EmailcampaignPopup />
        <AllCampaigns />
        <WhatsappCampainTemplate />
        <WhatsapPopup />
        <Whatsappallcampaign />
        <Schedule/>
        <Adminhome />
        <TotalUsers />
        <ActiveUsers />
        <InactiveUsers />
        <BlockedUsers />
        <Feedback />
        <SubscribedUsers />
        <Dashboard />
    </Box> 
  )
}

export default Home
