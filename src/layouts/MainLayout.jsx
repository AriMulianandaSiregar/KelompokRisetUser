import { Outlet } from "react-router-dom";

import TopNavbar from "../components/TopNavbar";
import DynamicPageTitle from "../components/DynamicPageTitle";
import "../assets/images/logo uajy.png";
import "../assets/css/footer.css";

import { Container, Row, Col } from "react-bootstrap";
const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/kelompokriset",
    name: "kelompok Riset",
  },
];

import logo from "../assets/images/logo uajy.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const MainLayout = ({ children }) => {
  return (
    <div className="mt-0 pt-0">
      <DynamicPageTitle />
      <TopNavbar routes={routes} />
      {/* Jika children (konten yang diteruskan ke MainLayout) ada, maka konten tersebut akan dirender. Jika tidak ada, maka <Outlet /> akan digunakan untuk merender child route yang sesuai dengan URL saat ini. */}
      {children ? children : <Outlet />}
      {/* <footer className="container mt-4 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">@ 2023 by Grand Atma</span>
        </div>
      </footer> */}
      <footer className="footer" id="footer">
        <div className="footer-top">
          <Container>
            <Row className="align-items-center text-white py-4">
              <Col md={3} className="d-flex flex-column align-items-center text-center">
                <img src={logo} alt="UAJY Logo" width="160" height="120" />
                <p className="mt-2 mb-0 text-center">
                  Kampus I Gedung Thomas Aquinas
                  <br /> Jalan Babarsari 44 Yogyakarta
                  <br /> 0274-487711
                  <br /> humas@uajy.ac.id
                </p>
              </Col>
              <Col md={1} className="d-flex align-items-center justify-content-center">
                <div className="garis"></div>
              </Col>
              <Col md={4} className="d-flex flex-column align-items-center text-center">
                <h5 className="fw-bold">About Us</h5>
                <p className="mb-0">
                  Universitas Atma Jaya Yogyakarta (UAJY) is a private university founded by the laity and managed by Slamet Rijadi Foundation - Yogyakarta, under the patronage of Saint Albert Magnus. UAJY was established on September 27,
                  1965, aiming to participate in educating the nation with a local dimension and global orientation.
                </p>
              </Col>
              <Col md={1} className="d-flex align-items-center justify-content-center">
                <div className="garis"></div>
              </Col>

              <Col md={3} className="d-flex flex-column align-items-center text-center">
                <h5 className="fw-bold">Our Social Media</h5>
                <div className="social-icons">
                  <FaFacebookF className="me-3" size={24} />
                  <FaInstagram className="me-3" size={24} />
                  <FaTwitter size={24} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom text-center py-2 text-black fw-bold">
          &copy; 2025. <i>Universitas Atma Jaya Yogyakarta</i>. Semua Hak Dilindungi. | All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
