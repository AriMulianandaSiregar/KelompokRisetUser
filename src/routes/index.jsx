import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ResearchGroupPage from "../pages/ResearchGroupPage";
import HibahPage from "../pages/HibahPage";
import PenelitianPage from "../pages/PenelitianPage";
import PengabdianPage from "../pages/PengabdianPage";
import PublikasiPage from "../pages/PublikasiPage";
import HakiPage from "../pages/HakiPage";
const router = createBrowserRouter([
  {
    // Rute ini adalah fallback atau wildcard route (*), yang mencocokkan semua URL yang tidak terdefinisi dalam rute lainnya.
    path: "*",
    element: <div>Routes Not Found</div>,
  },
  {
    // Rute ini memiliki elemen MainLayout sebagai tata letak utama.
    element: <MainLayout />,
    // Rute ini memiliki beberapa child routes:
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/kelompokpenelitian",
        element: <ResearchGroupPage />,
      },
      {
        path: "/kelompokpenelitian/hibah",
        element: <HibahPage />,
      },
      {
        path: "/kelompokpenelitian/penelitian",
        element: <PenelitianPage />,
      },
      {
        path: "/kelompokpenelitian/pengabdian",
        element: <PengabdianPage />,
      },
      {
        path: "/kelompokpenelitian/publikasi",
        element: <PublikasiPage />,
      },
      {
        path: "/kelompokpenelitian/haki",
        element: <HakiPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
