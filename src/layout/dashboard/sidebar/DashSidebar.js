import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Sidebar.css";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

const DashSidebar = () => {
  const [inVisible, setInVisible] = useState(false);

  return (
    <SideNav expanded={inVisible} style={{ backgroundColor: "#C8E6C9" }}>
      <SideNav.Toggle
        onClick={() => {
          setInVisible(!inVisible);
        }}
      />
      <SideNav.Nav defaultSelected="home" style={{ color: "#000" }}>
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="placed orders">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>placed orders</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

// class DashSidebar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: true,
//     };
//   }

//   render() {
//     return (
//       <SideNav expanded={this.state.isVisible}>
//         <SideNav.Toggle
//           onClick={() => {
//             this.setState({ isVisible: !this.state.isVisible });
//           }}
//         />
//         <SideNav.Nav defaultSelected="home">
//           <NavItem eventKey="home">
//             <NavIcon>
//               <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
//             </NavIcon>
//             <NavText>Home</NavText>
//           </NavItem>
//           <NavItem eventKey="placed orders">
//             <NavIcon>
//               <i
//                 className="fa fa-fw fa-line-chart"
//                 style={{ fontSize: "1.75em" }}
//               />
//             </NavIcon>
//             <NavText>placed orders</NavText>
//           </NavItem>
//         </SideNav.Nav>
//       </SideNav>
//     );
//   }
// }

export default DashSidebar;
