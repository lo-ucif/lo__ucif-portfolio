import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/app/ScrollToTop";
import { MainLayout } from "@/layouts/MainLayout";
import Home from "@/pages/Home";

const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDetail = lazy(() => import("@/pages/ProjectDetail"));
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail"));

const RouteFallback = () => <div className="min-h-screen bg-[#161513]" />;

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
