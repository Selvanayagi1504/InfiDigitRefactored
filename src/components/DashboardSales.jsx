import React, { useEffect } from "react";
import {useState, useRef} from "react";
import {Dropdown, Card} from 'react-bootstrap'
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
// import Highcharts from 'highcharts';
import ReactApexChart  from 'react-apexcharts'


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { circularProgressClasses } from "@mui/material";
import { SideNavBarCustom, SideNavBarCustomClosed } from '.';


import DatePicker,{ DateObject } from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker"
import SideNavCustomMain from "./SideNavCustomMain";
import SideNavCustomMainMob from "./SideNavCustomMainMob";
import TopNavBarCustom from "./TopNavBar";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};


function CustomTextProgressbar(props) {
  const { children, ...otherProps } = props;

  return (
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
      }}
    >
      <div style={{ position: 'absolute' }}>
        <CircularProgressbar {...otherProps} />
      </div>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.children}
      </div>
    </div>
  );
}


function DashboardSales() {
  const ref = useRef()
  const [sidenav,setsidenav] = useState(false);
  const [sidenavsales, setsidenavsales] = useState(false);
  const [proj,setproj] = useState('Dashboard');
  const [chartdata, setchartdata] = useState([]);
  const [chartdataContentWordCount, setchartdataContentWordCount] = useState([]);
  const [healthaudit, sethealthaudit] = useState([]);
  const [healthauditcol, sethealthauditcol] = useState([]);
  const [ticketmin, setticketmin] = useState(true);
  const [ticketstable, setticketstable] = useState([]);
  const [ticketscol, setticketscol] = useState([]);
  const [ticketstableWait, setticketstableWait] = useState([]);
  const [ticketscolWait, setticketscolWait] = useState([]);
  // const [series, setseries] = useState([])
  useEffect(()=>{
    // highChartsRender(127);
    var data = [
      ['x', 'totalClicks', 'totalImp','organicUsers', 'newUsers'],
      ["24/1/2021", 5,10,20,30],
      ["25/1/2021", 10,20,30,40],
      ["26/1/2021", 23,33,43,53],
      ["27/1/2021", 17,27,37,47],
      ["28/1/2021", 18,28,38,48],
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
        ticketno: <Link to={{pathname: "/tickets-sales",search: `?id=1`,state: { detail: "1" },}}>1</Link>,
        status:"open",
        priority:<div class="high">High</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=2`,state: { detail: "2" },}}>2</Link>,
        status:"open",
        priority:<div class="Low">Low</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=3`,state: { detail: "3" },}}>3</Link>,
        status:"open",
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>20-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=4`,state: { detail: "4" },}}>4</Link>,
        status:<div class="OverDue">OverDue</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>18-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=5`,state: { detail: "5" },}}>5</Link>,
        status:<div class="Inprogress">Inprogress</div>,
        priority:<div class="Low">Low</div>,
        raisedon:<div>15-09-2021</div>
      }
    ]
    setticketstable(data);
    data = [
      {
        ticketno: <Link to={{pathname: "/tickets-sales",search: `?id=11`,state: { detail: "11" },}}>11</Link>,
        status:"open",
        priority:<div class="high">High</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=12`,state: { detail: "12" },}}>12</Link>,
        status:"open",
        priority:<div class="Low">Low</div>,
        raisedon:<div class="today">Today</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=13`,state: { detail: "13" },}}>13</Link>,
        status:"open",
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>20-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=14`,state: { detail: "14" },}}>14</Link>,
        status:<div class="OverDue">OverDue</div>,
        priority:<div class="Medium">Medium</div>,
        raisedon:<div>18-09-2021</div>
      },
      {
        ticketno:<Link to={{pathname: "/tickets-sales",search: `?id=15`,state: { detail: "15" },}}>15</Link>,
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
  const [chartseries, setchartseries] = useState([
		{
			name: "Sales Revenue",
			type: "column",
			data: [100,200,300,400,500]
		},
		{
			name: "Sales Target",
			type: "line",
			data: [10,20,30,40,50]
		}
	]);
	const [chartoptions, setchartoptions] = useState({
		chart: {
			height: 350,
			type: "line"
		},
		stroke: {
			width: [0, 4]
		},
		title: {
			text: ""
		},
		dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		},
		labels: [
			"01 Jan 2001",
			"02 Jan 2001",
			"03 Jan 2001",
			"04 Jan 2001",
			"05 Jan 2001",
		],
		xaxis: {
			type: "datetime"
		},
		yaxis: [
			{
				title: {
					text: "Incremental Sales Revenue",
				}
			},
			{
				opposite: true,
				title: {
					text: "Sales Target"
				}
			}
		],
    legend: {
      show: false
    },
    colors : ['#4e73df', '#a5c559'],
	});
  const [chartseriesSecond, setchartseriesSecond] = useState([
		{
			name: "Revenue Generated",
			type: "column",
			data: [100,200,300,400,500]
		},
		{
			name: "Profitability",
			type: "line",
			data: [10,20,30,40,50]
		}
	]);
	const [chartoptionsSecond, setchartoptionsSecond] = useState({
		chart: {
			height: 350,
			type: "line"
		},
		stroke: {
			width: [0, 4]
		},
		title: {
			text: ""
		},
		dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		},
		labels: [
			"01 Jan 2001",
			"02 Jan 2001",
			"03 Jan 2001",
			"04 Jan 2001",
			"05 Jan 2001",
		],
		xaxis: {
			type: "datetime"
		},
		yaxis: [
			{
				title: {
					text: "Revenue Generated",
				}
			},
			{
				opposite: true,
				title: {
					text: "Profitability"
				}
			}
		],
    legend: {
      show: false
    },
    colors : ['#4e73df', '#a5c559'],
	});
  const [values, setValues] = useState([
    new DateObject().setDay(4).subtract(1, "month"),
    new DateObject().setDay(4).add(1, "month")
  ])
const [headValues, setHeadValues] = useState([
    new DateObject().setDay(4).subtract(1, "month"),
    new DateObject().setDay(4).add(1, "month")
  ])
const [open, setOpen] = useState(false);
const [head1,setHead1]= useState(headValues[0].format())
const [head2,setHead2]= useState(headValues[1].format())
const [checkBoxValue,setCheckBoxValue]= useState(false)
function setheadvalues(){
    setHead1(values[0].format())
    setHead2(values[1].format())
}
useEffect(() => {
    const checkIfClickedOutside = e => {
    if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
    }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
    document.removeEventListener("mousedown", checkIfClickedOutside)
    }
}, [open])
return (
<>
<section class="outer-wrapper dashboard-sales">
  {/* <div class="top-nav-bar">
      <div className="Ham">
        <SideNavCustomMainMob />
        <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
      </div>
      </div>
      <div class="nav-bar-center">&nbsp;</div>
      <div class="nav-bar-right">
        <ul class="list-unstyled nav-right-menu">
          <li>
          <Dropdown id="notification-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                        <i class="fa fa-bell"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">
                                <div className="notification-item">
                                    <h4>Notification 1!!</h4>
                                    <p>21 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="" style={{backgroundColor:"#85C1E9"}}>
                                <div className="notification-item" >
                                    <h4>Notification 2!!</h4>
                                    <p>8 hours ago..</p>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    </li>
          <li class="dropdown">
            <button onClick={()=>{setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
            <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
            <span class="profile-name">Sales</span>
          </button>
            
              
              
              <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/">Log Out</a></li>
              </ul>
            
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div> */}
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
                <div class="main-title">{proj}</div>
              </div>
              <div className="col-sm-7 add-new-btnw">
               
                <div ref={ref} class="calendar-main" style={{marginTop:"unset"}}>
                        <div className="add-new-btnw">
                            <button className="outline-btn-boderless" style={{width:"250px"}} onClick={() => setOpen(!open)} >
                                {head1}&nbsp;-&nbsp;{head2}&nbsp;&nbsp;
                                <i class="fa fa-chevron-down drop"></i>
                            </button>
                        </div>
                        
                        {open && (
                            <div id="example-collapse-text-calendar">
                                <Card body className="daterange-picker-card  mt-2">
                                    <div className="row">
                                    
                                        <div className="col-lg-8 calendar-col">
                                            <Calendar
                                                className="custom-calendar"
                                                value={values}
                                                onChange={(e)=>{
                                                    setValues(e)
                                                }}
                                                range
                                                numberOfMonths={3}
                                                className="custom-calendar"
                                                showOtherDays
                                            />
                                        </div>
                                        <div className="col-lg-4 mt-3 mt-lg-0 text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <label >Date Range</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">custom</option>
                                                        <option value="Contains">today</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3 text-center">
                                                <div className="col-5">
                                                    <input type="text" value={values[0].format()}/>
                                                </div>
                                                <div className="col-1">
                                                
                                                </div>
                                                <div className="col-5">
                                                    {
                                                        values.length==2?
                                                        <input type="text" value={values[1].format()}/> : <input type="text" value={"select"}/>
                                                    }
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-6 ">
                                                    <input type="checkbox" onChange={()=>{setCheckBoxValue(!checkBoxValue)}}/>
                                                    <label className="lable-compare">Compare to</label>
                                                </div>
                                                <div className="col-5">
                                                    <select >
                                                        <option value="All">previous period</option>
                                                        <option>yesterday</option>
                                                        <option>last week</option>
                                                    </select>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                            {
                                            checkBoxValue?
                                                <div className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                                :
                                                <div  className="row mt-3">
                                                    <div className="col-5">
                                                    <input type="text" disabled value={head1}/>
                                                    </div>
                                                    <div className="col-1">
                                                    <h6 className="pt-2">-</h6>
                                                    </div>
                                                    <div className="col-5">
                                                        <input type="text" disabled value={head2}/>
                                                    </div>
                                                    <div className="col-1"></div>
                                                </div>
                                            }
                                            <hr/>
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <button onClick={()=>{setheadvalues();setOpen(!open)}}
                                                    className="outline-btn" >
                                                        Apply
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                <buton onClick={() => setOpen(!open)}
                                                className="outline-btn">
                                                        Cancel
                                                </buton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                        
                    </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-12" id={!ticketmin?"full":""}>
              <div className="add-new-btnw" style={{marginBottom:64+'px'}}>
                  
                    
                </div>
                {/* <div class={!ticketmin?"charts-flex":""}> */}
                <div class="charts-flex">
                  <div class="charts-main-box">
                    <div className="row">
                      <div className="col-lg-8 dashboard-sales-chart1">
                        <div className="dashboard-sales-chart1-inner" style={{marginLeft:7+'%'}}>
                          <span><i class="fa fa-user-plus"></i></span>
                          <span>
                            <h2>358</h2>
                            <p>New Customers</p>
                          </span>
                        </div>
                        <div className="dashboard-sales-chart1-inner">
                          <span><i class="fa fa-signal" aria-hidden="true"></i></span>
                          <span>
                            <h2>1180 357</h2>
                            <p>Incremental Sales Revenue</p>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 dashboard-sales-chart1 progress-bar-sales">
                        
                        <CircularProgressbar value="127" text="127%" />
                      </div>
                    </div>
                    <ReactApexChart
                      options={chartoptions}
                      series={chartseries}
                      type="line"
                      height={350}
                     
                      class="salesRevenue"
                    />
                    <div className="dashboard-sales-legend">
                        <div>
                          <span className="circle-legend"></span>
                          <span>Incremental Sales Revenue</span>
                        </div>
                        <div>
                          <span className="line-legend"></span>
                          <span>Sales Target</span>
                        </div>
                    </div>
                    <div className="full-report"><a>View full report</a></div>
                  </div>
                  <div class="charts-main-box">
                    <div className="row">
                      <div className="col-lg-6 dashboard-sales-chart1">
                      <div className="dashboard-sales-chart1-inner" style={{marginLeft:7+'%'}}>
                          <span>
                            <p>Total Clients</p>
                            <h2>358</h2>
                          </span>
                        </div>
                        <div className="dashboard-sales-chart1-inner">
                          <span>
                            <p>Total Team 2</p>
                            <h2>100</h2>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 dashboard-sales-chart1">
                        
                      </div>
                    </div>
                    <ReactApexChart
                      options={chartoptionsSecond}
                      series={chartseriesSecond}
                      type="line"
                      height={350}
                      
                      class="salesRevenue"
                    />
                    <div className="dashboard-sales-legend">
                        <div>
                          <span className="circle-legend"></span>
                          <span>Revenue Generated</span>
                        </div>
                        <div>
                          <span className="line-legend"></span>
                          <span>Profitability</span>
                        </div>
                    </div>
                    <div className="full-report"><a>View full report</a></div>
                  </div>
                  
                </div>
                
                <div class="charts-main-box" id={!ticketmin?"wi-50":""}>
                    <Chart
                      className="line-graph"
                     
                      height={'350px'}
                      chartType="ColumnChart"
                      data={chartdataContentWordCount}
                      
                      options={{
                          hAxis: {
                          title: "",
                          },
                          vAxis: {
                          title: "",
                          },
                          legend:{position:"none"},
                          colors:['#4e73df', '#008000', '#ffc107', '#5f9ea0']
                      }}
                      rootProps={{ 'data-testid': '1' }}
                    />
                    <div className="dashboard-sales-legend">
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(78, 115, 223)"}}></span>
                          <span>East</span>
                        </div>
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(0, 128, 0)"}}></span>
                          <span>West</span>
                        </div>
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(255, 193, 7)"}}></span>
                          <span>North</span>
                        </div>
                        <div>
                          <span className="square-legend" style={{backgroundColor:"rgb(95, 158, 160)"}}></span>
                          <span>South</span>
                        </div>
                    </div>
                    <div className="full-report"><a>View full report</a></div>
                  </div>
              </div>

              
              
            </div>
      </div>
    </div>
  

  
</section>
</>
);
}
function MyFDate() {
  var myCurrentDate = new Date();
  var date = myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate();
  let a =new Date(date)
  let longMonth = a.toLocaleString('en-us', { month: 'long' });
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  date = days[myCurrentDate.getDay()]+', ' +myCurrentDate.getDate()+' ' + longMonth;
  const newCurrentDate =date;
  return (
    <p>{newCurrentDate}</p>
  );
}

export default DashboardSales;