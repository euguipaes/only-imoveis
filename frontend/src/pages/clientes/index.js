import { React, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Sidebar from "../../components/Sidebar";
import "../home/styles.css";
import "./index.css";
import axios from "axios";
import "react-toastify";
import Grid from "./grid";
import { toast } from "react-toastify";

function Clientes() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8081");
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <Container fluid className="dataContainer" id="clientes">
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <Container className="clientes">
            <div className="cabecalho">
              <h2>Clientes</h2>
            </div>
            <div className="list">
              <Grid users={users} />
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Clientes;
