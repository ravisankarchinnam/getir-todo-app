import {useHistory, useLocation} from "react-router-dom";
import {Button, Layout} from "antd";
import styles from "./PageLayout.module.scss";
const {Header, Content, Footer} = Layout;

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({children}: IPageLayoutProps) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}>
          <img src="logo.png" alt="logo" className={styles.img} />
        </div>
        {location?.pathname !== "/list" && (
          <Button onClick={() => history.push("/list")} shape="round">
            View Todos
          </Button>
        )}
      </Header>
      <Content className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </Content>
      <Footer className={styles.footer}>©2022 made with ♥️</Footer>
    </Layout>
  );
};

export default PageLayout;
