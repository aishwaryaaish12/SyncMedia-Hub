import './App.css';
import { createBrowserRouter, Route,Routes, RouterProvider,} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Emailverification from './pages/Auth/Emailverification';
import FrontPage from './pages/FrontPage/FrontPage';
import Emailconfirm from './pages/Emailconfirm/Emailconfirm';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import Verifyemail from './pages/Auth/Verifyemail';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import Services from './pages/Services/Services';
import ContactUs from './pages/ContactUs/ContactUs';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Loghome from './pages/Loghome/Loghome';
import Formcomplete from './pages/Formcomplete/Formcomplete';
import ContentLibrary from './pages/ContentLibrary/ContentLibrary';
import Business from './pages/Auth/Business/Business';
import ContentLibrary1 from './pages/ContentLibrary1/ContentLibrary1';
import ContentLibrary2 from './pages/ContentLibrary2/ContentLibrary2';
import Socialmedia from './pages/Socialmedia/Socialmedia';
import Analytics from './pages/SocialConnect/SocialConnect.js';
import Facebookconnect from './pages/Auth/Facebookconnect/Facebookconnect';
import EmailCampaign from './pages/EmailCampaign/EmailCampaign';
import CreateEmailCampaign from './pages/CreateEmailCampaign/CreateEmailCampaign';
import Postpopup from './pages/Postpopup/Postpopup';
import Update from './pages/Update/Update';
import Whatsappcampaign from './pages/Whatsappcampaign/Whatsappcampaign';
import Createwhatsappcampaign from './pages/Createwhatsappcampaign/Createwhatsappcampaign';
import Draft from './pages/Draft/Draft';
import Contentcalendar from './pages/Contentcalendar/Contentcalendar.js';
import EmailcampaignTemplate from './pages/EmailcampaignTemplate/EmailcampaignTemplate';
import EmailcampaignPopup from './pages/EmailcampaignPopup/EmailcampaignPopup';
import AllCampaigns from './pages/AllCampaigns/AllCampaigns';
import WhatsappCampainTemplate from './pages/WhatsappCampaignTemplate/WhatsappCampaignTemplate';
import WhatsapPopup from './pages/WhatsapPopup/WhatsapPopup';
import Whatsappallcampaign from './pages/Whatsappallcampaign/Whatsappallcampaign';
import Adminhome from './pages/Adminhome/Adminhome.js';
import TotalUsers from './pages/Adminhome/TotalUsers.js';
import ActiveUsers from './pages/Adminhome/ActiveUsers.js';
import InactiveUsers from './pages/Adminhome/InactiveUsers.js';
import BlockedUsers from './pages/Adminhome/BlockedUsers.js';
import  Feedback  from './pages/Adminhome/Feedback.js';
import SubscribedUsers from './pages/Adminhome/SubscribedUsers.js';
import Dashboard from './pages/Adminhome/Dashboard.js';
import Schedule from './pages/Schedule/Schedule';
import Subscription from './pages/Subscription/Subscription';
import TrailEnded from './pages/TrailEnded/TrailEnded';
import EditProfile from './pages/EditProfile/EditProfile.js';
import SocialConnect from './pages/SocialConnect/SocialConnect.js';




const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Emailverification",
    element: <Emailverification />,
  },
  {
    path: "/Emailconfirm",
    element: <Emailconfirm />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/Verifyemail",
    element: <Verifyemail />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
  {
    path: "/ContactUs",
    element: <ContactUs/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/Loghome",
    element: <Loghome/>,
  },
  {
    path: "/Contact",
    element:<Contact/>,
  },
  {
    path: "/Formcomplete",
    element:<Formcomplete/>,
  },
  {
    path: "/ContentLibrary",
    element:<ContentLibrary/>,
  },
  {
    path: "/ContentLibrary1",
    element:<ContentLibrary1/>,
  },
  {
    path: "/ContentLibrary2",
    element:<ContentLibrary2/>,
  },

  {
    path: "/Business",
    element:<Business/>,
  },
  {
    path: "/SocialConnect",
    element:<SocialConnect/>,
  },
  {
    path: "/Facebookconnect",
    element:<Facebookconnect/>,
  },
  {
    path: "/EmailCampaign",
    element:<EmailCampaign/>,
  },
  {
    path: "/CreateEmailCampaign",
    element:<CreateEmailCampaign/>,
  },
  {
    path: "/Socialmedia",
    element:<Socialmedia/>,
  },
  {
    path: "/Postpopup",
    element:<Postpopup/>,
  },
  {
    path: "/EmailcampaignTemplate",
    element:<EmailcampaignTemplate/>,
  },
  {
    path: "/EmailcampaignPopup",
    element:<EmailcampaignPopup/>,
  },
  {
    path: "/AllCampaigns",
    element:<AllCampaigns/>,
  },
  {
    path: "/Whatsappcampaign",
    element:<Whatsappcampaign/>,
  },
  {
    path: "/Createwhatsappcampaign",
    element:<Createwhatsappcampaign/>,
  },
  {
    path: "/Draft",
    element:<Draft/>,
  },
  {
    path: "/Schedule",
    element:<Schedule/>,
  },
  {
    path: "/Contentcalendar",
    element:<Contentcalendar/>,
  },
  {
    path: "/WhatsappCampaignTemplate",
    element:<WhatsappCampainTemplate/>,
  },
  {
    path: "/WhatsapPopup",
    element:<WhatsapPopup/>,
  },
  {
    path: "/Whatsappallcampaign",
    element:<Whatsappallcampaign/>,
  },
  {
    path: "/Schedule",
    element:<Schedule/>,
  },
  {
    path: "/Subscription",
    element:<Subscription/>,
  },
  {
    path: "/TrailEnded",
    element:<TrailEnded/>,
  },

  {
    path: "/Adminhome",
    element:<Adminhome/>,
  },
  {
    path: "/TotalUsers",
    element:<TotalUsers/>,
  },
  {
    path: "/ActiveUsers",
    element:<ActiveUsers/>,
  },
  {
    path: "/InactiveUsers",
    element:<InactiveUsers/>,
  },
  {
    path: "/BlockedUsers",
    element:<BlockedUsers/>,
  },
  {
    path: "/Feedback",
    element:<Feedback/>,
  },
  {
    path: "/SubscribedUsers",
    element:<SubscribedUsers/>,
  },

  {
    path: "/Dashboard",
    element:<Dashboard/>,
  },


  {
    path: "/Update",
    element: <Update />,
  },
  {
    path: "/EditProfile",
    element: <EditProfile />,
  },

]);

function App() {
  
  return (
    <RouterProvider router={router}>
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontPage />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Emailverification' element={<Emailverification />}/>
        <Route path='/Emailconfirm' element={<Emailconfirm/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/Verifyemail' element={<Verifyemail/>}/>
        <Route path='/ResetPassword' element={<ResetPassword/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Loghome' element={<Loghome/>}/>
        <Route path='/Formcomplete' element={<Formcomplete/>}/>
        <Route path='/Analytics' element={<Analytics/>}/>
        <Route path='/Facebookconnect' element={<Facebookconnect/>}/>
        <Route path='/ContentLibrary1' element={<ContentLibrary1/>}/>
        <Route path='/ContentLibrary2' element={<ContentLibrary2/>}/>
        <Route path='/Socialmedia' element={<Socialmedia/>}/>
        <Route path='/SocialConnect' element={<SocialConnect/>}/>
        <Route path='/Facebookconnect' element={<Facebookconnect/>}/>
        <Route path='/ContentLibrary1' element={<ContentLibrary1/>}/>
        <Route path='/ContentLibrary2' element={<ContentLibrary2/>}/>
        <Route path='/Socialmedia' element={<Socialmedia/>}/>
        <Route path='/Facebookconnect' element={<Facebookconnect/>}/>
        <Route path='/ContentLibrary1' element={<ContentLibrary1/>}/>
        <Route path='/ContentLibrary2' element={<ContentLibrary2/>}/>
        <Route path='/Socialmedia' element={<Socialmedia/>}/>
        <Route path='/Postpopup' element={<Postpopup/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>

        <Route path='/Whatsappcampaign' element={<Whatsappcampaign/>}/>
        <Route path='/Createwhatsappcampaign' element={<Createwhatsappcampaign/>}/>
        <Route path='/Draft' element={<Draft/>}/>
        <Route path='/Contentcalendar' element={<Contentcalendar/>}/>
        <Route path='/CreateEmailCampaign' element={<CreateEmailCampaign/>}/>
        <Route path='/EmailcampaignTemplate' element={<EmailcampaignTemplate/>}/>
        <Route path='/EmailcampaignPopup' element={<EmailcampaignPopup/>}/>
        <Route path='/AllCampaigns' element={<AllCampaigns/>}/>
        <Route path='/Draft' element={<Draft/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/WhatsappCampaignTemplate' element={<WhatsappCampainTemplate/>}/>
        <Route path='/WhatsapPopup' element={<WhatsapPopup/>}/>
        <Route path='/Whatsappallcampaign' element={<Whatsappallcampaign/>}/>
        <Route path='/Whatsappcampaign' element={<Whatsappcampaign/>}/>
        <Route path='/Createwhatsappcampaign' element={<Createwhatsappcampaign/>}/>
        <Route path='/Draft' element={<Draft/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/Subscription' element={<Subscription/>}/>
        <Route path='/TrailEnded' element={<TrailEnded/>}/>
        <Route path='/TotalUsers' element={<TotalUsers/>}/>
        <Route path='/ActiveUsers' element={<ActiveUsers/>}/>
        <Route path='/InactiveUsers' element={<InactiveUsers/>}/>
        <Route path='/BlockedUsers' element={<BlockedUsers/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        <Route path='/Adminhome' element={<Adminhome/>}/>
        <Route path='/SubscribedUsers' element={<SubscribedUsers/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Subscription' element={<Subscription/>}/>
        <Route path='/TrailEnded' element={<TrailEnded/>}/>












      </Routes>
    </RouterProvider>
  );
}

export default App;
