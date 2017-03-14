import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/leftnav.js'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      showLeftNav:false,
      title:'主页'
    }
  }
  componentWillReceiveProps(){
    this.setState({
      title:this.props.router.isActive('/',true)?"主页":
      this.props.router.isActive('/blog')?"博客":
      this.props.router.isActive('/work')?"工作":
      this.props.router.isActive('/about')?"关于":"文章"
    })
  }
  componentWillMount(){
    this.setLefNav()
    }
    setLefNav(){
      this.setState({showLeftNav:window.innerWidth>750?true:false})
    }
    componentDidMount(){
      window.onresize=this.setLefNav.bind(this)
    }

  render () {
    console.log(this.state.title);
    return(
      <div className='root'>
        {this.state.showLeftNav?<LeftNav/>:<Header/>}
          <div className='mywrap'>
            {this.props.children}
          </div>
        {this.state.showLeftNav?null:<Footer/>}
      </div>
    )
  }
 }

export default App;
