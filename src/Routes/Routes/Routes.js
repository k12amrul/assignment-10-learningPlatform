import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import CategoryDetails from "../../Pages/CategoryDetails/CategoryDetails";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import CourseItem from "../../Pages/CourseItem/CourseItem";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import RightSaideNav from "../../Shared/RightSaideNav/RightSaideNav";
import Test from "../../test/Test";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

 export const routes=createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        children : [
            {
              path : '/',
              element:<Home></Home> ,
               loader : () =>fetch('https://assignment-tenserver.vercel.app/')
            },
            {
              path : '/login',
              element:<Login/> ,
            //   loader : () =>fetch('https://assignment-tenserver.vercel.app/')
            },
            {
              path : '/register',
              element:<Register></Register> ,
            },
            {
              path :   '/course',
              element: <PrivateRoute>  <Courses/></PrivateRoute>   ,
              loader :  () => fetch('https://assignment-tenserver.vercel.app/category')
            },
            {
              path : '/t',
              element:<Test></Test> ,
            },
            {
              path : '/Category/:id',
              element: <PrivateRoute> <Category/></PrivateRoute> ,
              loader: ({params}) => fetch(`https://assignment-tenserver.vercel.app/category/${params.id}`)
           
            },
            {
              path : '/courseItem/:id',
              element:<CourseItem></CourseItem> ,
           
            },

            {
              path : '/categoryDetails/:id',
              element: <PrivateRoute> <CategoryDetails></CategoryDetails> </PrivateRoute>     ,
              loader: ({params}) => fetch(`https://assignment-tenserver.vercel.app/category/${params.id}`)
           
            },
            
            
        ]
    }

 ])