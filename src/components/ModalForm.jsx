import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";

const ModalForm = ({ showModal, handleCloseModal, onFormSubmit, editData }) => {
  const [formData, setFormData] = useState({
    roomName: "",
    tipeKamar: "",
    harga: "",
    desc: "",
  });

  const modalTitle = editData ? "Edit Kamar" : "Tambah Kamar";

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleClose = () => {
    handleCloseModal();
    setFormData({
      roomName: "",
      tipeKamar: "",
      harga: "",
      desc: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (!formData.roomName || !formData.tipeKamar || !formData.harga || !formData.desc) {
      toast.error("Semua form harus diisi");
      return;
    }

    onFormSubmit(formData);
    handleCloseModal();
    setFormData({
      roomName: "",
      tipeKamar: "",
      harga: "",
      desc: "",
    });
  };
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formRoomName">
          <Form.Label>Nama Kamar</Form.Label>
          <Form.Control type="text" name="roomName" value={formData.roomName} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formTipeKamar">
          <Form.Label>Tipe Kamar</Form.Label>
          <Form.Control as="select" name="tipeKamar" value={formData.tipeKamar} onChange={handleInputChange}>
            <option value="">Pilih Tipe Kamar</option>
            <option value="Standard">Standard</option>
            <option value="Superior">Superior</option>
            <option value="Luxury">Luxury</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mt-3" controlId="formHarga">
          <Form.Label>Harga Kamar</Form.Label>
          <Form.Control type="text" name="harga" value={formData.harga} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formDesc">
          <Form.Label>Deskripsi Kamar</Form.Label>
          <Form.Control as="textarea" rows={3} name="desc" value={formData.desc} onChange={handleInputChange} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faFloppyDisk} /> Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
