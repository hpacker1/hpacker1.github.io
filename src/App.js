
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './Components/MainRoute';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className = "header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>My Portfolio</Link>} waterfall>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>My Portfolio</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/resume">About Me</Link>
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
