
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './Components/MainRoute';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className = "header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>Harrison Packer</Link>} waterfall>
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/resume">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>My Portfolio</Link>}>
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/resume">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
