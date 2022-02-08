import React, { useEffect } from "react";
import {useState} from "react";
import {Dropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Chart from "react-google-charts";
import "antd/dist/antd.css";
import { Table, Breadcrumb } from "antd";
import { SideNavBarCustom, SideNavBarCustomClosed } from ".";
import SideNavCustomMain from "./SideNavCustomMain";
import SideNavCustomMainMob from "./SideNavCustomMainMob";
import TopNavBarCustom from "./TopNavBar";


const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};
function Dashboard() {
    const [sidenav,setsidenav] = useState(false);
    const [sidenavsales, setsidenavsales] = useState(false);
    const [openproj, setopenproj] = useState(false);
    const [proj,setproj] = useState('');
    const [chartdata, setchartdata] = useState([]);
    const [chartdataContentWordCount, setchartdataContentWordCount] = useState([]);
    const [healthaudit, sethealthaudit] = useState([]);
    const [healthauditcol, sethealthauditcol] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [ticketmin, setticketmin] = useState(true);
    const [ticketstable, setticketstable] = useState([]);
    const [ticketscol, setticketscol] = useState([]);
    const [ticketstableWait, setticketstableWait] = useState([]);
    const [ticketscolWait, setticketscolWait] = useState([]);

    useEffect(()=>{
      var data = [
        ['x', 'totalClicks', 'totalImp','organicUsers', 'newUsers', 'organicSessions'],
        ["24/1/2021", 0,10,20,30,40],
        ["25/1/2021", 10,20,30,40,50],
        ["26/1/2021", 23,33,43,53,63],
        ["27/1/2021", 17,27,37,47,57],
        ["28/1/2021", 18,28,38,48,58],
      ]
      setchartdata(data);
      setchartdataContentWordCount(data);
      data = [
        {
          title:"",
          dataIndex:"projects",
          key:"projects"
        },
        {
          title:"Compliance %",
          dataIndex:"comp",
          key:"comp"
        },
        {
          title:"Health Score",
          dataIndex:"healthscore",
          key:"healthscore",
        },
        {
          title:"Total Score",
          dataIndex:"totalscore",
          key:"totalscore"
        }
      ]
      sethealthauditcol(data);
      data = [
        {
          projects:"Myntra Shoes",
          comp:"90%",
          healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
          totalscore:<i class="fa fa-star"></i>
        },
        {
          projects:"Myntra Loafers",
          comp:"90%",
          healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
          totalscore:<i class="fa fa-star"></i>
        },
        {
          projects:"Amazon Fashion",
          comp:"90%",
          healthscore:<div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>,
          totalscore:<i class="fa fa-star"></i>
        }
      ]
      sethealthaudit(data);
      data = [
        {
          title:"Ticket #",
          dataIndex:"ticketno",
          key:"ticketno"
        },
        {
          title:"Status",
          dataIndex:"status",
          key:"status"
        },
        {
          title:"Priority",
          dataIndex:"priority",
          key:"priority"
        },
        {
          title:"Raised On",
          dataIndex:"raisedon",
          key:"raisedon"
        }
      ]
      setticketscol(data);
      setticketscolWait(data);
      data = [
        {
          ticketno: <Link to={{pathname: "/Tickets",search: `?id=1`,state: { detail: "1" },}}>1</Link>,
          status:"open",
          priority:<div class="high">High</div>,
          raisedon:<div class="today">Today</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=2`,state: { detail: "2" },}}>2</Link>,
          status:"open",
          priority:<div class="Low">Low</div>,
          raisedon:<div class="today">Today</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=3`,state: { detail: "3" },}}>3</Link>,
          status:"open",
          priority:<div class="Medium">Medium</div>,
          raisedon:<div>20-09-2021</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=4`,state: { detail: "4" },}}>4</Link>,
          status:<div class="OverDue">OverDue</div>,
          priority:<div class="Medium">Medium</div>,
          raisedon:<div>18-09-2021</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=5`,state: { detail: "5" },}}>5</Link>,
          status:<div class="Inprogress">Inprogress</div>,
          priority:<div class="Low">Low</div>,
          raisedon:<div>15-09-2021</div>
        }
      ]
      setticketstable(data);
      data = [
        {
          ticketno: <Link to={{pathname: "/Tickets",search: `?id=11`,state: { detail: "11" },}}>11</Link>,
          status:"open",
          priority:<div class="high">High</div>,
          raisedon:<div class="today">Today</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=12`,state: { detail: "12" },}}>12</Link>,
          status:"open",
          priority:<div class="Low">Low</div>,
          raisedon:<div class="today">Today</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=13`,state: { detail: "13" },}}>13</Link>,
          status:"open",
          priority:<div class="Medium">Medium</div>,
          raisedon:<div>20-09-2021</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=14`,state: { detail: "14" },}}>14</Link>,
          status:<div class="OverDue">OverDue</div>,
          priority:<div class="Medium">Medium</div>,
          raisedon:<div>18-09-2021</div>
        },
        {
          ticketno:<Link to={{pathname: "/Tickets",search: `?id=15`,state: { detail: "15" },}}>15</Link>,
          status:<div class="Inprogress">Inprogress</div>,
          priority:<div class="Medium">Medium</div>,
          raisedon:<div>15-09-2021</div>
        }
      ]
      setticketstableWait(data);
    },[])
    function sidenavtoggle(){
      setsidenavsales(!sidenavsales)
    }
    const [sidenavToggle, setSidenavToggle] = useState(true);
  
  return (
    <>
      <section class="outer-wrapper">
        <TopNavBarCustom />

        <div className="Common-Row-Div">
    
          <SideNavCustomMain />
          <div className="Common-mt-64">
            <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                <a href="/dashboard">Dashboard</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">Dashboard</div>
              </div>
            </div>
            
            <div class="row">
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                    <div class="rsnap-lft">
                      <span class="rsnap-title">Clients</span>
                      <span class="rsnap-count">100</span>
                    </div>
                    <div class="rsnap-rgt">
                      
                      <div class="text-success">+11%</div>
                    </div>
                    <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Projects</span>
                    <span class="rsnap-count">24</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-success">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Members</span>
                    <span class="rsnap-count">54</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-success">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-sm-3 col-6">
                <div class="common-wcard resource-snap">
                  <div class="rsnap-lft">
                    <span class="rsnap-title">Reports</span>
                    <span class="rsnap-count">12</span>
                  </div>
                  <div class="rsnap-rgt">
                    
                    <div class="text-decline">+11%</div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="row">
            <div class="col-sm-6 col-12">
              <div class="common-wcard">
                <div class="rd-title">Clients</div>
                <img className="Image-Dashboard"  src="images/graph1.png" alt="" />
              </div>
            </div>
            <div class="col-sm-6 col-12">
              <div class="common-wcard">
                <div class="rd-title">Reports</div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <img className="Image-Dashboard" src="images/graph2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Dashboard;