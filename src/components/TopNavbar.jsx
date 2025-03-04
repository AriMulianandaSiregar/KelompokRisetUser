import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { toast } from "sonner";
import "bootstrap-icons/font/bootstrap-icons.css"; // Pastikan Bootstrap Icons diimpor
import "../assets/css/Navbar.css";
import imgUAJY from "../assets/images/logo uajy.png";

const TopNavbar = ({ routes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isToggleOpen, setToggle] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1); // State untuk opacity navbar

  useEffect(() => {
    const handleScroll = () => {
      // Ubah opacity menjadi 0.9 jika user scroll lebih dari 50px
      if (window.scrollY > 20) {
        setNavbarOpacity(0.8);
      } else {
        // setNavbarOpacity(0, 8);
        // setNavbarOpacity(0.8);
        setNavbarOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      className="shadow p-0"
      style={{
        backgroundColor: `rgba(36, 111, 196, ${navbarOpacity})`, // Opacity hanya untuk background
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container fluid className="mt-2 mb-2 custom-container" style={{ width: "80%" }}>
        <Navbar.Brand style={{ width: "100%" }}>
          <div className="d-flex align-items-start">
            <img alt="Logo UAJY" src={imgUAJY} width="auto" height="80" className="d-inline-block align-top" />

            <div className="ms-2" style={{ width: "100%" }}>
              <div className="navbarAtas">
                <p className="mb-0 fs-4 fw-bold">Department Informatika Universitas Atma Jaya Yogyakarta</p>
                <hr className="my-1" style={{ borderColor: "#ffac24", borderWidth: "1px", opacity: "100%" }} />
              </div>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="navbar-toggler"
                onClick={() => {
                  if (isToggleOpen) {
                    setToggle(false);
                  } else {
                    setToggle(true);
                  }
                }}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <div className="navbarBawah w-100">
                  <Nav className="d-flex flex-column flex-lg-row p-0 m-0">
                    <Nav.Link onClick={() => navigate("/")} className="p-0 d-inline-flex">
                      <span className="text-black fw-normal cursor-pointer me-4">Beranda</span>
                    </Nav.Link>

                    {/* Dropdown untuk Kelompok Riset */}
                    <Dropdown className=" pe-4 p-0 d-inline-flex" style={{ position: "relative" }} onMouseEnter={() => setDropdownOpen(true)} show={isDropdownOpen}>
                      <span as="a" className="text-black fw-normal cursor-pointer nav-link p-0" style={{ paddingRight: isToggleOpen ? "80px" : "0px" }}>
                        Kelompok Riset
                        <i
                          // onClick={() => setDropdownOpen((prev) => !prev)}
                          onClick={() => setDropdownOpen(isDropdownOpen ? false : true)}
                          className="bi bi-chevron-down ms-2"
                          style={{
                            display: "inline-block",
                            transition: "transform 0.3s ease-in-out",
                            transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                            // marginRight: isDropdownOpen ? "320px" : "0px",
                            // transition: "margin-right 0.3s ease-in-out",
                          }}
                        ></i>
                      </span>

                      <Dropdown.Menu style={{ position: "absolute", zIndex: 1000 }} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                        <Dropdown.Item onClick={() => navigate("/kelompokpenelitian")}>Artificial Intelligence</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/kelompokpenelitian")}>Internet of Things</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/kelompokpenelitian")}>Cyber Security</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link onClick={() => document.getElementById("informasi").scrollIntoView({ behavior: "smooth" })} className="p-0 d-inline-flex">
                      <span className="text-black fw-normal cursor-pointer me-4">Tentang Kami</span>
                    </Nav.Link>
                    <Nav.Link className="p-0 d-inline-flex" onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}>
                      <span className="text-black fw-normal cursor-pointer">Kontak</span>
                    </Nav.Link>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
