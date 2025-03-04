import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Carousel, Breadcrumb } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import imgCarousel1 from "../assets/images/carousel1.jpg";
const images = [
  {
    img: imgCarousel1,
    title: "DEPARTMENT INFORMATIKA UAJY",
    description: "“Founded to give you more knowledge, developed to enable you to work anything, anytime and anywhere.“",
  },
];

const HibahPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <ImageCarousel images={images} />
      <Container className=" mt-5 mb-5" id="informasi">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => navigate("/")} className="text-primary fs-4">
            Beranda
          </Breadcrumb.Item>
          <Breadcrumb.Item onClick={() => navigate("/kelompokpenelitian")} className="fs-4">
            Genesis
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="fs-4">
            Hibah
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="text-2xl font-bold text-gray-800 mt-5 mb-4">Profil Hibah</h2>
        <h4 className="fw-normal text-gray-700 leading-relaxed mb-4">
          Tim kelompok penelitian Genesis berhasil mendapatkan Hibah Pengembangan Teknologi Big Data untuk Smart City 2025 dengan proposal inovatif mereka yang berfokus pada optimalisasi lalu lintas perkotaan menggunakan teknologi Big Data
          dan kecerdasan buatan (AI). Hibah ini memberikan pendanaan sebesar Rp800 juta untuk mendukung pengembangan sistem analisis data real-time yang membantu pemerintah kota dalam mengurangi kemacetan dan meningkatkan efisiensi
          transportasi publik.
        </h4>

        <div className="grids grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <h4 className="fw-normal">
              <strong>Judul Hibah:</strong> Hibah Pengembangan Teknologi Big Data untuk Smart City
            </h4>
          </div>
          <div>
            <h4 className="fw-normal">
              <strong>Penerima Hibah:</strong> Tim Riset Genesis
            </h4>
          </div>
          <div>
            <h4 className="fw-normal">
              <strong>Tanggal Diterima:</strong> 2025/6/10
            </h4>
          </div>
          <div>
            <h4 className="fw-normal">
              <strong>Institusi:</strong> Universitas Atma Jaya Yogyakarta
            </h4>
          </div>
        </div>
      </Container>
    </>
  );
};
export default HibahPage;
