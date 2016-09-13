const React = require('react');
import MenuBar from "./MenuBar";

const Layout = (props) => (
  <div className="app-container">
    <MenuBar
        title="Title"
        menuItems= {[
          {name:"Home", action: function(){alert("hey")}},
          {name:"About", action: function(){alert("hey")}},
          {name:"Sign Up", action: function(){alert("hey")}}
        ]}/>
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element
}

module.exports = Layout