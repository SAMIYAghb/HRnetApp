import { Outlet } from "react-router-dom";
// import { Col, Row } from "antd";
import '../../App.css'

const BaseLayout = () => {
  return (
    <main className="main">
      <Outlet/>
    </main>
  );
};

export default BaseLayout;
