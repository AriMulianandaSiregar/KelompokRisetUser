import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import imgCarousel1 from "../assets/images/carousel1.jpg";
import imgkelompok1 from "../assets/images/kelompok1.jpg";
import imgkelompok2 from "../assets/images/kelompok2.jpg";
import imgkelompok3 from "../assets/images/kelompok3.jpg";
import imgkelompok4 from "../assets/images/kelompok3.jpg";
import imgkelompok5 from "../assets/images/kelompok2.jpg";
import imgkelompok6 from "../assets/images/kelompok1.jpg";
import imgkelompok7 from "../assets/images/kelompok2.jpg";
import "../assets/css/Homepage.css";
const images = [
  {
    img: imgCarousel1,
    title: "DEPARTMENT INFORMATIKA UAJY",
    description: "“Founded to give you more knowledge, developed to enable you to work anything, anytime and anywhere.“",
  },
];

const researchGroups = [
  {
    title: "Software and Data Engineering (SDE) Research Group",
    image: imgkelompok1,
    link: "#",
  },
  {
    title: "Grup Riset Sistem Cerdas",
    image: imgkelompok2,
    link: "#",
  },
  {
    title: "IT and Human Behavior Research Group",
    image: imgkelompok3,
    link: "#",
  },
  {
    title: "Tranformasi Digital Riset Group",
    image: imgkelompok4,
    link: "#",
  },
  {
    title: "SmartApp Innovations Research Group",
    image: imgkelompok5,
    link: "#",
  },
  {
    title: "EduTech Research Group",
    image: imgkelompok6,
    link: "#",
  },
  {
    title: "Computational Science Research Group",
    image: imgkelompok7,
    link: "#",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  // const maxIndex = Math.ceil(researchGroups.length / cardsPerPage) - 1;
  const maxIndex = researchGroups.length;
  const prevCard = () => {
    // setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setCurrentIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev;
      }
    });
  };

  const nextCard = () => {
    // setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setCurrentIndex((prev) => {
      if (prev < maxIndex - cardsPerPage) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };
  return (
    <>
      <ImageCarousel images={images} />
      <Container className=" mt-5" id="informasi">
        <h1 className="fw-bold text-center">
          <strong>Selamat Datang di Kelompok Riset Department Informatika Universitas Atma Jaya Yogyakarta</strong>
        </h1>
        <Row className="mt-5 mb-4">
          <Col md={2} className="profil-md-2">
            <h2 className="fw-normal" style={{ color: "#1464C4" }}>
              <strong>Profil</strong>
            </h2>
          </Col>
          <Col md={10} className="garis-md-2">
            <hr className="my-3" style={{ height: "4px", backgroundColor: "#ffac24", border: "none", opacity: "100%" }} />
          </Col>
        </Row>

        <Row className="mb-4">
          <h5 className="deskripsi-md-2 fw-normal">
            Teknologi Informasi telah menjadi bagian integral dari kehidupan manusia, memicu permintaan tenaga kerja yang berkualitas di bidang ini. Program Studi Sarjana Informatika Universitas Atma Jaya Yogyakarta hadir untuk memenuhi
            kebutuhan dengan menawarkan pilihan peminatan studi dalam Soft Computing (Intelligence System Developer), Mobile Computing (Software Engineer dan Network System Supervisor), dan Enterprise Information System (Data Scientist dan
            Database Administrator). Kurikulum MBKM INF UAJY 2021 dirancang untuk diselesaikan dalam waktu 8 semester dengan beban studi minimal 144 SKS jika mahasiswa mengambil jalur reguler atau jalur merdeka. Gelar yang didapat setelah
            lulus adalah Sarjana Komputer (S.Kom.)
          </h5>
          <h5 className="deskripsi2-md-2 fw-normal">
            Program Studi S1 Informatika (sebelumnya bernama Teknik Informatika) didirikan pada tahun 1993 berdasarkan keputusan Dirjen Pendidikan Tinggi Departemen Pendidikan dan Kebudayaan Republik Indonesia dengan nomor
            131/Dikti/Kep/1993. Berdasarkan Surat Keputusan Badan Akreditasi Nasional No. 1111/SK/BAN-PT/Akred/S/VII/2016, tertanggal 14 Juli 2016, Program Studi Informatika telah dinyatakan terakreditasi A (Sangat Baik) dan telah
            diperpanjang akreditasinya melalui SK No. 9496/SK/BAN-PT/Ak-PPJ/S/VII/2021.
          </h5>
          <h5 className="deskripsi2-md-2 fw-normal">
            Kurikulum MBKM INF UAJY 2021 dirancang untuk diselesaikan dalam waktu 8 semester dengan beban studi minimal 144 SKS jika mahasiswa mengambil jalur reguler atau jalur merdeka. Gelar yang didapat setelah lulus adalah Sarjana
            Komputer (S.Kom.)
          </h5>
          <h5 className="deskripsi3-md-2 fw-normal">“Founded to give you more knowledge, developed to enable you to work anything, anytime and anywhere.“</h5>
        </Row>

        <Row className="pt-5 pb-5 d-flex justify-content-center w-100 mx-0" style={{ backgroundColor: "#D9D9D9" }}>
          {/* Bagian Kiri (Blue Section) */}
          <Col md={5} className="p-4 text-white d-flex align-items-start justify-content-center flex-column" style={{ backgroundColor: "#1E5BB8", minHeight: "100%" }}>
            <h3 className="fw-bold">Pekerjaan Kami</h3>
            <p className="mt-3">
              Kami adalah kelompok riset di Departemen Informatika yang berfokus pada eksplorasi dan pengembangan berbagai inovasi di dunia digital. Dengan semangat belajar dan kolaborasi, kami berusaha menciptakan solusi yang bermanfaat
              bagi masyarakat serta berkontribusi dalam kemajuan teknologi.
            </p>
          </Col>

          {/* Bagian Kanan (White Section) */}
          <Col md={7} className="bg-white p-4 shadow">
            <Row>
              <Col xs={6} className="mb-3">
                <h2 className="fw-bold">20+</h2>
                <p>Total Kelompok Penelitian</p>
              </Col>
              <Col xs={6} className="mb-3">
                <h2 className="fw-bold">80+</h2>
                <p>Total Hibah</p>
              </Col>
              <Col xs={6} className="mb-3">
                <h2 className="fw-bold">50+</h2>
                <p>Total Dosen Terlibat</p>
              </Col>
              <Col xs={6} className="mb-3">
                <h2 className="fw-bold">35+</h2>
                <p>Total Pengabdian Masyarakat</p>
              </Col>
              <Col xs={6} className="mb-3">
                <h2 className="fw-bold">100+</h2>
                <p>Total Publikasi</p>
              </Col>
              <Col xs={6} className="mb-3">
                <h2 className="fw-bold">28+</h2>
                <p>Total Haki</p>
              </Col>
              <Col xs={6} className="mb-3">
                <h2 className="fw-bold">128+</h2>
                <p>Total Penelitian</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5 mb-4">
          <h3 className="fw-bold text-center">Kelompok Riset Kami</h3>

          <Carousel
            className="mt-1 mb-4 "
            // interval={3000}
            indicators={false}
            controls={true}
            prevIcon={<span onClick={prevCard} className="carousel-control-prev-icon" style={{ filter: "invert(1)" }} />}
            nextIcon={<span onClick={nextCard} className="carousel-control-next-icon" style={{ filter: "invert(1)" }} />}
          >
            <Carousel.Item>
              <div className="row row-cols-1 row-cols-md-2 g-4 pb-4 d-flex justify-content-center ">
                {researchGroups.slice(currentIndex, currentIndex + 4).map((group, index) => (
                  <Card key={index} className="m-2 mt-5 ps-0 pe-0 shadow" style={{ width: "15rem", height: "100%", maxHeight: "400px", minHeight: "320px" }}>
                    <Card.Img variant="top" src={group.image} style={{ height: "150px", objectFit: "cover" }} />
                    <Card.Body className="text-center d-flex flex-column justify-content-between">
                      <Card.Title>{group.title}</Card.Title>
                      <Button variant="primary" href={group.link}>
                        Selengkapnya
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
