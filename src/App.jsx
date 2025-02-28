import Layout from "./Layout";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/page";
import Events from "./pages/events/page";
import Classes from "./pages/classes/page";
import Teachers from "./pages/teachers/page";
import Contact from "./pages/contact/page";
import About from "./pages/about/page";
import Schedule from "./pages/schedule/Page";
import NotFound from "./NotFound";
import EventSingle from "./pages/event single/Page";
import ClassSingle from "./pages/class single/page";
import TeacherSingle from "./teacher single/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/eventSingle",
          element: <EventSingle />,
        },
        {
          path: "/classes",
          element: <Classes />,
        },
        {
          path: "/class-single",
          element: <ClassSingle />,
        },
        {
          path: "/teachers",
          element: <Teachers />,
        },
        {
          path: "/teacher-single",
          element: <TeacherSingle />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/schedule",
          element: <Schedule />,
        },
      ],
    },
    {
      path: "/404",
      element: <NotFound />,
    },
  ]);
  useEffect(() => {
    // Initialize AOS with settings
    AOS.init({
      duration: 1000, // Customize the animation duration
      easing: "ease-in-out", // Customize the easing type
      once: true, // Animation will only trigger once (when the element is scrolled into view)
      offset: 200, // Offset to trigger the animation earlier or later
    });
  }, []);
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== "/") {
      document.querySelector(".header-container").style.position = "relative";
      document.querySelector(".join-form").setAttribute("data-aos-delay", "0");
      document
        .querySelector(".join-form")
        .setAttribute("data-aos-duration", "700");
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
