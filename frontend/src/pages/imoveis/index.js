import { React, useState, useRef, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Sidebar from "../../components/Sidebar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../home/styles.css";
import "./index.css";
import styled from "styled-components";
import axios from "axios";
import "react-toastify";
import Grid from "./grid";
import Form from "./form";
import { toast, ToastContainer } from "react-toastify";

function Imoveis() {
  const [show, setShow] = useState(false);
  const [imovel, setImovel] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getImoveis = async () => {
    try {
      const res = await axios.get("http://localhost:8081");
      setImovel(
        res.data.sort((a, b) => (a.val_imovel > b.val_imovel ? 1 : -1))
      );
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getImoveis();
  }, [setImovel]);

  return (
    <Container fluid className="dataContainer" id="imoveis">
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <Container className="imoveis">
            <div className="cabecalho">
              <h2>Imoveis</h2>
            </div>
            <div className="list">
              <Grid imovel={imovel} />
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Imoveis;
