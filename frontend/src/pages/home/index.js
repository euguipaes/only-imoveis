import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Pie } from "../../components/Charts/Pie";
import { Bar } from "../../components/Charts/Bar";
import Sidebar from "../../components/Sidebar";
import "./styles.css";

function Home() {
  return (
    <Container fluid className="dataContainer">
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <Container className="chartsContainer">
            <div className="charts">
              <Row className="row1">
                <Col>
                  <Card>
                    <Card.Body>
                      <h2 className="totalNumber">350</h2>
                      <h5 className="chartDescription">
                        Quantidade de Imóveis
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <h2 className="totalNumber">192,2 Mil</h2>
                      <h5 className="chartDescription">
                        Valor Total com Imóveis Ocupados
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <h2 className="totalNumber">10,30%</h2>
                      <h5 className="chartDescription">
                        Retorno sobre investimento
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="row2">
                <Col>
                  <Card>
                    <Card.Body>
                      <h2 className="totalNumber">130</h2>
                      <h5 className="chartDescription">Imóveis Ocupados</h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <h2 className="totalNumber">427,3 Mil</h2>
                      <h5 className="chartDescription">
                        Valor de Todos Imóveis
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <h2 className="totalNumber">1,48 Mil</h2>
                      <h5 className="chartDescription">
                        Média entre os imóveis alugados
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="row3">
                <Col>
                  <Card xs={6}>
                    <Card.Body>
                      <Bar />
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Body>
                      <Pie />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
