import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from 'react-router-dom';
import Home from '../components/home/Home';
import Contact from '../components/contact/Contact';
import More from '../components/more/More';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
	}

	toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/contact">Contact Us</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/more">Make an appointment</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/more" component={More} />
          </main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Add footer over here
          </Footer>
        </Layout>
      </div>
    );
	}
}
