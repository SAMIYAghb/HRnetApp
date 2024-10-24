import { Outlet } from "react-router-dom";
// import { Col, Row } from "antd";
import '../../App.css'

const BaseLayout = () => {
  return (
    <main className="main">
      <Outlet/>
    </main>
    // <Row justify="center" >
    //   <Col span={6}>
    //     <Outlet />
    //   </Col>
    // </Row>
  );
};

export default BaseLayout;
