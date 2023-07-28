import { ProcesosList } from "../components/ProcesosList";

// STYLES COMPONENTS
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
export const ProcesosPage = () => {
  return (
    <>
      <div>
        <h1>Procesos page</h1>
        <Container>
          <Row>
            <Col md={{ offset: 10 }}>
              <Link to="/admin/procesos-create">
                <Button variant="primary float-right">Crear Proceso</Button>{" "}
              </Link>
            </Col>
          </Row>
        </Container>
        <ProcesosList />
      </div>
    </>
  );
};
