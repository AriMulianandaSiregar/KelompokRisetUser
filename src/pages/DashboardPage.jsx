import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalForm from "../components/ModalForm";
import { faTrash, faPenToSquare, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";

import imgHotelSuperior from "../assets/images/Hotel_Superior.jpg";
import imgHotelStandard from "../assets/images/Hotel_Standard.jpg";
import imgHotelLuxury from "../assets/images/Hotel_Luxury.jpg";

const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  // Kodingan ini digunakan untuk mengambil data pengguna yang tersimpan di localStorage, lalu mengubahnya dari format string JSON menjadi objek JavaScript.
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    // ode ini digunakan untuk mengubah nilai date menjadi format tanggal yang lebih mudah dibaca, menggunakan pengaturan lokal Indonesia (id-ID) dan opsi format tertentu.
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditData(null);
  };

  const handleForm = (newKamar) => {
    if (editData !== null) {
      setData((prevData) => {
        const newData = [...prevData];
        newData[editData.index] = { ...newKamar, roomName: `${newKamar.roomName} (Update)`, desc: `${newKamar.desc} (Update)`, isUpdated: true };
        return newData;
      });
      setEditData(null);
      toast.success(`Berhasil Update Data Kamar ${newKamar.roomName} (Update)!`);
    } else {
      // Kode berikut digunakan untuk memperbarui state bernama data dengan cara menambahkan item baru ke dalam array yang sudah ada sebelumnya.
      setData((prevData) => [...prevData, { ...newKamar, isUpdated: false }]);
      toast.success(`Berhasil Tambah Data Kamar ${newKamar.roomName}!`);
    }
  };

  const handleEdit = (index) => {
    // Fungsi ini berasal dari state React (useState), digunakan untuk memperbarui state editData.
    // editData akan menjadi objek yang berisi data yang dipilih untuk diedit, beserta informasi indeksnya.
    setEditData({
      ...data[index],
      index: index,
    });
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const deletedItem = data[index];
    // Kode ini digunakan untuk menghapus elemen tertentu dari array prevData berdasarkan indeks yang diberikan.
    setData((prevData) => [...prevData.slice(0, index), ...prevData.slice(index + 1)]);
    toast.success(`Berhasil Hapus Data Kamar ${deletedItem.roomName}!`);
  };

  const renderKamarList = () => {
    // merupakan method map dalam JavaScript yang digunakan untuk melakukan iterasi terhadap setiap elemen dalam array data.
    return data.map((item, index) => (
      <Row className="mt-2">
        <Col md={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <div style={{ width: "100%", height: "100%" }}>
                    {/* Conditional rendering: Based on the value of item.tipeKamar, a different image is displayed: */}
                    {item.tipeKamar === "Standard" && <img src={imgHotelStandard} className="img-fluid rounded" alt="Tidak Ada Gambar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                    {item.tipeKamar === "Superior" && <img src={imgHotelSuperior} className="img-fluid rounded" alt="Tidak Ada Gambar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                    {item.tipeKamar === "Luxury" && <img src={imgHotelLuxury} className="img-fluid rounded" alt="Tidak Ada Gambar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                  </div>
                </Col>
                <Col md={9}>
                  <div key={index}>
                    <h3>{item.roomName}</h3>
                    <p>{item.desc}</p>
                    <div className="border-bottom mb-3"></div>
                    <p>
                      Tipe Kamar: <strong>{item.tipeKamar}</strong> Harga: <strong>Rp {item.harga}</strong>
                    </p>
                    <Button className="btn-danger" onClick={() => handleDelete(index)} style={{ marginRight: "10px" }}>
                      <FontAwesomeIcon icon={faTrash} /> Hapus Kamar
                    </Button>
                    <Button className="btn-primary" onClick={() => handleEdit(index)}>
                      <FontAwesomeIcon icon={faPenToSquare} /> Edit Kamar
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    ));
  };
  return (
    <Container className="mt-5">
      <h1 className="mb-3 border-bottom fw-bold">Dashboard</h1>
      <Row className="mb-4">
        <Col md={10}>
          <Card className="h-100 justify-content-center">
            <Card.Body>
              <h4>Selamat datang,</h4>
              <h1 className="fw-bold display-6 mb-3">{user?.username}</h1>
              <p className="mb-0">Kamu sudah login sejak:</p>
              <p className="fw-bold lead mb-0">{formatDate(user?.loginAt)}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card>
            <Card.Body>
              <p>Bukti sedang ngantor:</p>
              <img src="https://via.placeholder.com/150" className="img-fluid ronded" alt="Tidak Ada Gambar" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 className="mb-3 border-bottom fw-bold">Daftar Kamar</h1>
      <p>
        Grand Atma saat ini memiliki <strong>{data.length}</strong> jenis kamar yang eksotis
      </p>
      <Button className="btn-success" onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faSquarePlus} /> Tambah Data
      </Button>
      <ModalForm showModal={showModal} handleCloseModal={handleCloseModal} onFormSubmit={handleForm} editData={editData} />
      {renderKamarList()}
    </Container>
  );
};

export default DashboardPage;
