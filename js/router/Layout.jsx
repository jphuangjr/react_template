const React = require('react');
import MenuBar from "../MenuBar";
const config = require("./../../config");

const checkMobile = () => {
  if(screen.width < 500){
    return true;
  }
}

const Layout = (props) => {
  if(checkMobile()){
    return <div className="app-container">{props.children}</div>;
  } else {
    return (
        <div className="app-container">
              <MenuBar
                  title={config.menu.title}
                  menuItems= {[
                    {name:"Home", action: function(){}, location:"/"},
                    {name:"About", action: function(){}, location: "/about"},
                    {name:"History", action: function(){}, location: "/chapters"},
                    {name:"Flyer", action: function(){}, location: "/RushSchedule"},
                    {name:"Contact", action: function(){}, location: "/contact"}
                  ]}/>
          {props.children}
        </div>
    )
  }
};

const { element } = React.PropTypes;

Layout.propTypes = {
  children: element
}

module.exports = Layout