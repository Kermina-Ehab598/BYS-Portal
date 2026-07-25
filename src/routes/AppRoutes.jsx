import { Routes, Route } from "react-router-dom";
import MarketingLayout from "../components/Layout/MarketingLayout/MarketingLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Join from "../pages/Join";
import Impact from "../pages/Impact";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import VolunteerPortalPage from "../pages/VolunteerPortalPage";
// import Application from "../pages/Application";

export default function AppRoutes() {
  return (
    <Routes>
      {/* كل الصفحات جوه نفس الـ Layout — نفس الـ Header/Footer للجميع */}
      <Route path="/" element={<MarketingLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="join" element={<Join />} />
        <Route path="impact" element={<Impact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="login" element={<Login />} />
        <Route path="courses" element={<Courses />} />
        <Route path="volunteer" element={<VolunteerPortalPage />} />
        {/* <Route path="apply" element={<Application />} /> */}

        {/* لما تضيف صفحة جديدة تحطها هنا، مش في App.jsx */}
        {/* <Route path="tasks" element={<TasksPage />} /> */}
      </Route>
    </Routes>
  );
}
