import { Container, Accordion, Row, Col, Carousel, Breadcrumb, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import imgCarousel1 from "../assets/images/carousel1.jpg";
import imgKelompokRiset from "../assets/images/logo-ceeb.png";
import imgKetuaKelompokRiset from "../assets/images/head-photo.jpg";
import "../assets/css/researchgroup.css";

const teamMembers = [
  {
    name: "Dr. Adi Basukriadi, M.Sc.",
    job: "Associate Professor",
    expertise: "Ecology of Insect",
    image: imgKetuaKelompokRiset, // Ganti dengan path gambar
  },
  {
    name: "Prof. Dr. Noventia Dian Takarina, M.Sc.",
    job: "Associate Professor",
    expertise: "Aquatic Ecotoxicology",
    image: imgKetuaKelompokRiset,
  },
  {
    name: "Dr. Wisnu Wardhana, M.Si.",
    job: "Associate Professor",
    expertise: "Ecology of Plankton",
    image: imgKetuaKelompokRiset,
  },
  {
    name: "Dr. Erwin Nudin, M.Si.",
    job: "Associate Professor",
    expertise: "Ecology of Freshwater Fish",
    image: imgKetuaKelompokRiset,
  },
  {
    name: "Dimas Haryo Pradana, M.Si.",
    job: "Associate Professor",
    expertise: "Avian Ecology",
    image: imgKetuaKelompokRiset,
  },
  {
    name: "Dr. Riani Widiarti, M.Si.",
    job: "Associate Professor",
    expertise: "Ecology of Harmful Algae",
    image: imgKetuaKelompokRiset,
  },
];

const images = [
  {
    img: imgCarousel1,
    title: "DEPARTMENT INFORMATIKA UAJY",
    description: "“Founded to give you more knowledge, developed to enable you to work anything, anytime and anywhere.“",
  },
];

const sections = [
  {
    title: "Daftar Hibah",
    type: "hibah",
    items: [
      "Hibah Pengembangan Teknologi Big Data untuk Smart City",
      "Hibah Artificial Intelligence for Sustainable Agriculture",
      "Hibah Keamanan Siber dan Privasi Data untuk Fintech",
      "Hibah Pengembangan Sistem Rekomendasi Berbasis Deep Learning",
      "Hibah IoT dan Edge Computing untuk Monitoring Infrastruktur Kritis",
    ],
  },
  {
    title: "Daftar Penelitian",
    type: "penelitian",
    items: [
      "Hibah Pengembangan Teknologi Big Data untuk Smart City",
      "Hibah Artificial Intelligence for Sustainable Agriculture",
      "Hibah Keamanan Siber dan Privasi Data untuk Fintech",
      "Hibah Pengembangan Sistem Rekomendasi Berbasis Deep Learning",
      "Hibah IoT dan Edge Computing untuk Monitoring Infrastruktur Kritis",
    ],
  },
  {
    title: "Daftar Pengabdian Kepada Masyarakat",
    type: "pengabdian",
    items: [
      "Hibah Pengembangan Teknologi Big Data untuk Smart City",
      "Hibah Artificial Intelligence for Sustainable Agriculture",
      "Hibah Keamanan Siber dan Privasi Data untuk Fintech",
      "Hibah Pengembangan Sistem Rekomendasi Berbasis Deep Learning",
      "Hibah IoT dan Edge Computing untuk Monitoring Infrastruktur Kritis",
    ],
  },
  {
    title: "Daftar Publikasi",
    type: "publikasi",
    items: [
      "Hibah Pengembangan Teknologi Big Data untuk Smart City",
      "Hibah Artificial Intelligence for Sustainable Agriculture",
      "Hibah Keamanan Siber dan Privasi Data untuk Fintech",
      "Hibah Pengembangan Sistem Rekomendasi Berbasis Deep Learning",
      "Hibah IoT dan Edge Computing untuk Monitoring Infrastruktur Kritis",
    ],
  },
  {
    title: "Daftar Haki",
    type: "haki",
    items: [],
  },
];

const ResearchGroupPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleItemClick = (category, item) => {
    navigate(`/kelompokpenelitian/${category}`);
    // navigate(`/kelompokpenelitian/${category}/${item}`);
  };

  const navigate = useNavigate();
  return (
    <>
      <ImageCarousel images={images} />
      <Container className=" mt-5" id="informasi">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => navigate("/")} className="text-primary fs-4">
            Beranda
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="fs-4">
            Genesis
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="mt-5 mb-4 pb-5">
          <Col md={4} className="logoKelompok-md-2 d-flex flex-column  justify-content-center">
            <img alt="Logo Kelompok Riset" src={imgKelompokRiset} width="100%" height="auto" className="d-inline-block align-top" />
          </Col>
          <Col md={8} className="deskripsiKelompok-md-2 d-flex flex-column  justify-content-center ">
            <h2 className="fw-bold">Nama Kelompok Riset</h2>
            <br />
            <h5 className="fw-normal">
              Genesis is a research group focused on technological innovations in various fields, including renewable energy, artificial intelligence, and advanced materials. The primary goal of this group is to develop technology-based
              solutions to tackle global challenges in the future. Genesis adalah kelompok riset yang berfokus pada inovasi teknologi di berbagai bidang, seperti energi terbarukan, kecerdasan buatan, dan material maju. Tujuan utama kelompok
              ini adalah menciptakan solusi berbasis teknologi untuk menghadapi tantangan global di masa depan.
            </h5>
          </Col>
        </Row>
        <Row className="pt-5 pb-5 ps-5 pe-5 ms-5 me-5 mb-4" style={{ backgroundColor: "#246FC420", borderRadius: "16px" }}>
          <Col md={2} className="ketuaKelompok d-flex flex-column  justify-content-center">
            <img
              alt="Ketua Kelompok Riset"
              src={imgKetuaKelompokRiset}
              width="100%"
              height="auto"
              className="d-inline-block align-top"
              style={{
                borderRadius: "50%",
              }}
            />
          </Col>
          <Col md={10} className="deskripsiKetuaKelompok  d-flex flex-column justify-content-center">
            <h3 className="fw-bolder">Ketua Kelompok Riset</h3>

            <h4>
              <strong>Dr. rer. nat. Mufti Petala Patria, M.Sc.</strong>
            </h4>

            <h4>Bidang Keahlian: Ecophysiology of Marine Biota</h4>
          </Col>
        </Row>
        <Row className="pt-5 pb-5 text-center">
          <h2 className="fw-bolder">Members</h2>
        </Row>
        <Row className="gy-4">
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="text-center">
              <Card className="border-0">
                <div className="d-flex justify-content-center">
                  <img src={member.image} alt={member.name} className="rounded-circle" width="100" height="100" />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <Card.Text className="mb-1">Jabatan: {member.job}</Card.Text>
                  <Card.Text className="text-muted">Expertise: {member.expertise}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Accordion className="mt-5 mb-4">
          {sections.map((section, index) => (
            <Card key={index} className="border-0 pb-5" style={{ borderBottom: "0px solid blue" }}>
              <Card.Header className="d-flex border-0 justify-content-between align-items-center " style={{ cursor: "pointer", fontWeight: "bold", backgroundColor: "#ffffff" }} onClick={() => toggleSection(index)}>
                <h4 className="fw-bold">{section.title}</h4>
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </Card.Header>
              {/* Jika activeIndex === index, maka <Card.Body> akan dirender.
Jika tidak, maka <Card.Body> tidak akan muncul. */}
              {activeIndex === index && (
                <Card.Body>
                  <ul className="list-unstyled ps-3">
                    {section.items.length > 0 ? (
                      section.items.map((item, i) => (
                        <li key={i} className="text-primary" style={{ cursor: "pointer" }} onClick={() => handleItemClick(section.type, index)}>
                          • {item}
                        </li>
                      ))
                    ) : (
                      <li className="text-muted">Belum ada data</li>
                    )}
                  </ul>
                </Card.Body>
              )}
              <hr className="my-0" style={{ borderColor: "#ffac24", borderWidth: "3px", opacity: "100%" }} />
            </Card>
          ))}
        </Accordion>
      </Container>
    </>
  );
};

export default ResearchGroupPage;
