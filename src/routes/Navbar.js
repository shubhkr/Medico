import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from 'react-router-dom';
import Home from '../components/home/Home';
import Contact from '../components/contact/Contact';
import More from '../components/more/More';
import { BrowserRouter as Router, Route } from 'react-router-dom';

var defaultSelectedKeys = ['1']

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
    var location = (window.location.href).split('/').pop()
      , mapping = {
          home: ['1'],
          contact: ['2'],
          more: ['3']
        }
    defaultSelectedKeys = mapping[location] || defaultSelectedKeys

    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={defaultSelectedKeys}
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
            <Icon type="copyright" /> Copyright Medico 2018
          </Footer>
        </Layout>
      </div>
    );
	}
}
