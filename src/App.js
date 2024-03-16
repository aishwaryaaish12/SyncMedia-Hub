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
import Socialmedia from './pages/Socialmedia/Socialmedia';
import Analytics from './pages/Analytics/Analytics';
import Facebookconnect from './pages/Auth/Facebookconnect/Facebookconnect';
import EmailCampaign from './pages/EmailCampaign/EmailCampaign';
import CreateEmailCampaign from './pages/CreateEmailCampaign/CreateEmailCampaign';
import ContentLibrary1 from './pages/ContentLibrary1/ContentLibrary1';
import ContentLibrary2 from './pages/ContentLibrary2/ContentLibrary2';
import Postpopup from './pages/Postpopup/Postpopup';
import Account from './pages/Account/Account';
import Update from './pages/Update/Update';
import EmailcampaignTemplate from './pages/EmailcampaignTemplate/EmailcampaignTemplate';
import EmailcampaignPopup from './pages/EmailcampaignPopup/EmailcampaignPopup';
import AllCampaigns from './pages/AllCampaigns/AllCampaigns';
import Whatsappcampaign from './pages/Whatsappcampaign/Whatsappcampaign';
import Createwhatsappcampaign from './pages/Createwhatsappcampaign/Createwhatsappcampaign';
import Draft from './pages/Draft/Draft';
import Schedule from './pages/Schedule/Schedule';

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
    path: "/Business",
    element:<Business/>,
  },
  {
    path: "/Analytics",
    element:<Analytics/>,
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
    path: "/ContentLibrary1",
    element:<ContentLibrary1/>,
  },
  {
    path: "/ContentLibrary2",
    element:<ContentLibrary2/>,
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
    path: "/Account",
    element:<Account/>,
  },
  {
    path: "/Update",
    element:<Update/>,
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
        <Route path='/Analytics' element={<Analytics/>}/>
        <Route path='/Facebookconnect' element={<Facebookconnect/>}/>
        <Route path='/ContentLibrary1' element={<ContentLibrary1/>}/>
        <Route path='/ContentLibrary2' element={<ContentLibrary2/>}/>
        <Route path='/Socialmedia' element={<Socialmedia/>}/>
        <Route path='/Analytics' element={<Analytics/>}/>
        <Route path='/Facebookconnect' element={<Facebookconnect/>}/>
        <Route path='/Postpopup' element={<Postpopup/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/Socialmedia' element={<Socialmedia/>}/>
        <Route path='/Analytics' element={<Analytics/>}/>
        <Route path='/Facebookconnect' element={<Facebookconnect/>}/>
        <Route path='/CreateEmailCampaign' element={<CreateEmailCampaign/>}/>
        <Route path='/EmailcampaignTemplate' element={<EmailcampaignTemplate/>}/>
        <Route path='/EmailcampaignPopup' element={<EmailcampaignPopup/>}/>
        <Route path='/AllCampaigns' element={<AllCampaigns/>}/>
        <Route path='/Whatsappcampaign' element={<Whatsappcampaign/>}/>
        <Route path='/Createwhatsappcampaign' element={<Createwhatsappcampaign/>}/>
        <Route path='/Draft' element={<Draft/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
      </Routes>
    </RouterProvider>
  );
}

export default App;
