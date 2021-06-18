import StudentPage from "./Student";
import { Layout } from "antd";

const { Header, Content } = Layout;

export default function Home() {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }} />

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div className="site-layout-container">{<StudentPage />}</div>
        </Content>
      </Layout>
    </>
  );
}
