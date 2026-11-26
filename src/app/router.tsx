import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/app/ScrollToTop";
import { MainLayout } from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import CaseStudyDetail from "@/pages/CaseStudyDetail";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
