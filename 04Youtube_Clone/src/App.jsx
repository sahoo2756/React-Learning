import ErrorPage from "./page/ErrorPage.jsx";
import HomePage from "./page/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignupPage from "./Components/auth/Signup/SignupPage.jsx";
import SigninPage from "./Components/auth/Signin/SigninPage.jsx";

// Signup Sub Page
import Enter_Name_Page from "./Components/auth/Signup/01_Enter_Name_Page.jsx"
import Enter_Dob_Gender_Page from "./Components/auth/Signup/02_Enter_Dob_Gender_Page.jsx"
import Enter_Email from "./Components/auth/Signup/03_Enter_Email.jsx"
import Verify_Email_By_OTP from "./Components/auth/Signup/04_Verify_Email_By_OTP.jsx"
import Create_A_Password from "./Components/auth/Signup/05_Create_A_Password.jsx"
import Review_Account from "./Components/auth/Signup/06_Review_Account.jsx"
import Accept_Terms_and_Privacy from "./Components/auth/Signup/07_Accept_Terms_and_Privacy.jsx"

// Signin Sub Page
import Enter_Email_Signin from "./Components/auth/Signin/01_Enter_Email_Signin"
import Enter_Password_Signin from "./Components/auth/Signin/02_Enter_Password_Signin.jsx"
import Enter_Otp_Send_To_Your_Email_Signin from "./Components/auth/Signin/03_Enter_Otp_Send_To_Your_Email_Signin.jsx"
import Update_Password_Signin from "./Components/auth/Signin/04_Update_Password_Signin.jsx"
import FullVideoWatchPage from "./page/FullVideoWatchPage.jsx";
import YoutubeShortsPage from "./page/YoutubeShortsPage.jsx";
import VideoList from "./Components/video/videoList/VideoList.jsx";




const arrayOfObjectsToCreateBrowserRouter = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children : [
      {
        path : "result" , 
        element : <VideoList />
      },
    ]
  },
  {
    // youtube path looks ike for watch is = https://www.youtube.com/watch?v=dl0pxBVxLVo
    path : "/watch",
    element : <FullVideoWatchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/shorts" , 
    element : <YoutubeShortsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/signin",
    element : <SigninPage />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : "" , 
        element : <Enter_Email_Signin />
      },
      {
        path : "enter_password" , 
        element : <Enter_Password_Signin />
      }, 
      {
        path : "forgot_password",
        element : <Enter_Otp_Send_To_Your_Email_Signin />
      },  
      {
        path : "forgot_password/update_password",
        element : <Update_Password_Signin />
      }
    ]
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Enter_Name_Page />
      },
      {
        path: "enter_dob_gender" , 
        element : <Enter_Dob_Gender_Page />
      },
      {
        path : "enter_dob_gender/enter_email",
        element : <Enter_Email />
      },
      {
        path : "enter_dob_gender/enter_email/verify_email_address",
        element : <Verify_Email_By_OTP />
      },
      {
        path : "enter_dob_gender/enter_email/verify_email_address/create_a_password",
        element : <Create_A_Password />
      },
      {
        path : "enter_dob_gender/enter_email/verify_email_address/create_a_password/review_account",
        element : <Review_Account />,
      },
      {
        path : "enter_dob_gender/enter_email/verify_email_address/create_a_password/review_account/terms_&_privacy",
        element : <Accept_Terms_and_Privacy />
        // some work is pending when user click on I agree
      }
    ]
  },
  
]

const router = createBrowserRouter(arrayOfObjectsToCreateBrowserRouter);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

