import React from "react";
import Chart from "react-google-charts";
import { useState, useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Modal } from "react-bootstrap";
import { default as ReactSelect, createFilter } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Breadcrumb, Menu, Checkbox, Dropdown as Drop } from "antd";
import { Dropdown, Card } from "react-bootstrap";
import { ModuleExpandTickets } from "./index";
import { DateObject } from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import SideNavCustomMain from "./SideNavCustomMain";
import SideNavCustomMainMob from "./SideNavCustomMainMob";
import TopNavBarCustom from "./TopNavBar";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const filterOption = createFilter({});

function ModuleExpandRankTracking() {
  const [checkedColumns, setcheckedColumns] = useState([]);
  const [initialColumns, setinitialColumns] = useState([]);
  const onChange = (e) => {
    var checkedColumnsLocal = checkedColumns;
    if (e.target.checked) {
      checkedColumnsLocal = checkedColumnsLocal.filter((id) => {
        return id !== e.target.id;
      });
    } else if (!e.target.checked) {
      console.log(checkedColumnsLocal);
      checkedColumnsLocal.push(e.target.id);
    }

    var filtered = initialColumns;
    for (var i = 0; i < checkedColumnsLocal.length; i++)
      filtered = filtered.filter((el) => {
        return el.dataIndex !== checkedColumnsLocal[i];
      });
    setteamcol(filtered);
    setcheckedColumns(checkedColumnsLocal);
  };

  const u = localStorage.getItem("state");
  const [usertype, setusertype] = useState(u);
  const [allOptions, setallOptions] = useState([]);
  const filterAllOptions = (rawInput) => {
    const filteredOptions = allOptions.filter((o) => filterOption(o, rawInput));

    if (filteredOptions.length === 0) {
      filteredOptions.push({ value: rawInput, label: rawInput });
    }

    setcolor(filteredOptions);
  };

  const [allOptions1, setallOptions1] = useState([]);
  const filterAllOptions1 = (rawInput) => {
    const filteredOptions = allOptions1.filter((o) =>
      filterOption(o, rawInput)
    );

    if (filteredOptions.length === 0) {
      filteredOptions.push({ value: rawInput, label: rawInput });
    }

    setcolor1(filteredOptions);
  };

  const [urlSelectbottom, seturlSelectbottom] = useState(null);
  function handleChangeURLSelectedBottom(selected) {
    seturlSelectbottom(selected);
  }
  const [UrloptionBottom, setUrloptionBottom] = useState([]);

  const [DomainUrlSelected, setDomainUrl] = useState(null);
  function handleChangeDomainUrl(selected) {
    setDomainUrl(selected);
  }
  const [DomainUrlOption, setDomainUrlOption] = useState([]);

  const [optionSelected1, setoptionSelected1] = useState(null);
  function handleChange1(selected) {
    setoptionSelected1(selected);
    setDomainUrlOption(selected);
  }
  const [colourOptions1, setcolor1] = useState([]);

  const [optionSelected, setoptionSelected] = useState(null);
  function handleChange(selected) {
    setoptionSelected(selected);
  }
  const [colourOptions, setcolor] = useState([]);
  const [sidenav, setsidenav] = useState(false);
  const [teamlist, setteamList] = useState([]);
  const [selectionType, setSelectionType] = useState("checkbox");
  const [teamcol, setteamcol] = useState([]);
  const [show, setshow] = useState(false);
  const [keytablelist, setkeytablelist] = useState([]);
  const [selectionTypeKeyTable, setSelectionTypeKeyTable] =
    useState("checkbox");
  const [keyTableCol, setkeyTableCol] = useState([]);
  const [chartdata, setchartdata] = useState([]);
  const [URL, setURL] = useState([]);
  const [displayTable, setDisplayTable] = useState(false);

  useEffect(() => {
    var data = [];
    var color = [
      { value: "Shoes", label: "Shoes" },
      { value: "Rainy Shoes", label: "Rainy Shoes" },
      { value: "Formal Shoes for Men", label: "Formal Shoes for Men" },
      { value: "Casual Shoes", label: "Casual Shoes" },
    ];
    setallOptions(color);
    setcolor(color);
    setUrloptionBottom(color);
    color = [
      {
        value: "https://www.metroshoes.net/",
        label: "https://www.metroshoes.net/",
      },
      {
        value: "https://www.mochishoes.com/",
        label: "https://www.mochishoes.com/",
      },
      { value: "https://www.myntra.com/", label: "https://www.myntra.com/" },
      { value: "https://www.amazon.in/", label: "https://www.amazon.in/" },
    ];
    setcolor1(color);
    setallOptions1(color);
    var columns = [
      {
        title: "List of Keywords",
        dataIndex: "keyword",
        key: "keyword",
      },
    ];
    setteamcol(columns);
    setinitialColumns(columns);
    columns = [
      {
        title: "URL",
        dataIndex: "url",
        key: "url",
        // fixed:"left"
      },
      {
        title: "1 Aug",
        dataIndex: "aug1",
        key: "aug1",
      },
      {
        title: "8 Aug",
        dataIndex: "aug8",
        key: "aug8",
      },
      {
        title: "16 Aug",
        dataIndex: "aug16",
        key: "aug16",
      },
    ];
    setkeyTableCol(columns);

    data = [
      ["x", "Shoes"],
      ["Aug 1", 1],
      ["Aug 8", 3],
      ["Aug 16", 5],
    ];
    setchartdata(data);
    setteamList([
      {
        key: 0,
        keyword: "Shoes",
      },
    ]);
    setkeytablelist([
      {
        url: "Shoes",
        aug1: "25",
        aug8: "36",
        aug16: "47",
      },
    ]);
    setDisplayTable(true);
  }, []);
  function handleModal() {
    setshow(!show);
  }
  function generatereport1() {
    if (optionSelected1 && optionSelected) {
      var a = [
        {
          title: "List of Keywords",
          dataIndex: "keyword",
          key: "keyword",
          width: "1%",
        },
      ];
      var b = [];

      seturlSelectbottom(optionSelected);
      optionSelected1.map((i) => {
        a.push({
          title: `Position - ${i.value}`,
          dataIndex: i.value,
          key: i.value,
          width: "5%",
        });
      });
      var x = optionSelected1.length * 5 + 1;
      if (x < 100) {
        x = 100 - x;
      } else {
        x = 5;
      }
      a.push({
        title: "",
        dataIndex: "",
        key: "",
        width: x + "%",
      });
      setteamcol(a);
      setinitialColumns(a);
      var data = [];
      optionSelected.map((i, index) => {
        data.push({
          key: index,
          keyword: i.value,
        });
        b.push({
          url: i.value,
          aug1: "25",
          aug8: "36",
          aug16: "47",
        });
      });
      data.map((i, index) => {
        optionSelected1.map((j) => {
          var x = j.value;
          data[index][x] = (
            <div>
              5{" "}
              <i
                class="fa fa-info-circle"
                title={`${j.value}/${data[index].keyword}`}
              ></i>
            </div>
          );
        });
      });
      setkeytablelist(b);
      setteamList(data);
      setDisplayTable(true);
    } else {
      alert("please choose url and fields");
    }
  }
  function generatereport2() {
    var b = [];
    urlSelectbottom.map((i) => {
      b.push({
        url: i.value,
        aug1: "25",
        aug8: "36",
        aug16: "47",
      });
    });
    setkeytablelist(b);
    console.log(b);
    var data = [];
  }
  const [fre, setfre] = useState(false);
  const [clientchosen, setclientchosen] = useState([
    {
      projname: "Myntra - Shoes",
    },
    {
      projname: "Myntra - Loafers",
    },
  ]);
  const [projectslisttop, setprojectslisttop] = useState([
    {
      title: "Myntra",
      projects: [
        {
          projname: "Myntra - Shoes",
        },
        {
          projname: "Myntra - Loafers",
        },
      ],
    },
    {
      title: "Amazon",
      projects: [
        {
          projname: "Amazon - Fashion",
        },
        {
          projname: "Amazon - Jewellery",
        },
      ],
    },
  ]);
  function showProjects(a) {
    var proj = projectslisttop.filter((item) => item.title == a);
    console.log(proj[0].projects);
    setclientchosen(proj[0].projects);
  }
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  const [sidenavToggle, setSidenavToggle] = useState(true);
  const [values, setValues] = useState([
    new DateObject().setDay(4).subtract(1, "month"),
    new DateObject().setDay(4).add(1, "month"),
  ]);
  const [headValues, setHeadValues] = useState([
    new DateObject().setDay(4).subtract(1, "month"),
    new DateObject().setDay(4).add(1, "month"),
  ]);
  const [open, setOpen] = useState(false);
  const [head1, setHead1] = useState(headValues[0].format());
  const [head2, setHead2] = useState(headValues[1].format());
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  function setheadvalues() {
    setHead1(values[0].format());
    setHead2(values[1].format());
  }
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);
  return (
    <>
      <section class="outer-wrapper module-expand-site-uptime module-rank dashboard-seo dashboard-seo-bradcrumb">
        <TopNavBarCustom />
        {/* {usertype == "SEO" ? (
          <div class="top-nav-bar">
          <div className="Ham">
              <SideNavCustomMainMob />
              <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
              <div className="wrapper dashboard-seo-dropdown" ref={ref}>
                  <button
                      className="button"
                      onClick={() => setIsMenuOpen(oldState => !oldState)}
                  >
                      All data View <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </button>
                  {isMenuOpen && (
                      <div className="row">
                          <div className="col-md-6" style={{borderRight:'1px solid rgba(0,0,0,.15)'}}>
                              
                              <ul className="Clients-list">
                                  <li  onClick={()=>{showProjects("Myntra")}}><span>Myntra</span> <i class="fa fa-angle-right"></i></li>
                                  <li  onClick={()=>{showProjects("Amazon")}}><span>Amazon</span> <i class="fa fa-angle-right"></i></li>
                              </ul>
                          </div>
                          <div className="col-md-6">
                              <ul class="projectsList">
                              {clientchosen.map((i)=>{
                                  return(
                                      <li onClick={()=>{setIsMenuOpen(false)}}><a style={{color:"inherit"}} href={`dashboard-seo?id=${i.projname}`}>{i.projname}</a></li>
                                  )
                              })}
                              </ul>
                          </div>
                      </div>

                  )}
                  </div>
              </div> 
          </div>
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
                      <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                          <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                          <span class="profile-name">SEO</span>
                      </button>



                      <ul style={{display:sidenav?"block":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a href="/profile">Profile</a></li>

                          <li><a href="/">Log Out</a></li>
                      </ul>

                  </li>
              </ul>
          </div>
          <div class="clearfix"></div>
      </div> 
        ) : (
          <div class="top-nav-bar">
            <div className="Ham">
              <SideNavCustomMainMob />
              <div class="logo">
                <a href="">
                  <img src="images/infidigit-logo.png" />
                </a>{" "}
                <span>Growth</span>
              </div>
            </div>
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
                      <Dropdown.Item
                        href=""
                        style={{ backgroundColor: "#85C1E9" }}
                      >
                        <div className="notification-item">
                          <h4>Notification 2!!</h4>
                          <p>8 hours ago..</p>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li class="dropdown">
                  <button
                    onClick={() => {
                      setsidenav(!sidenav);
                    }}
                    class="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                  >
                    <span class="profile-pic">
                      <img src="images/profile-pic.jpeg" alt="" />
                    </span>
                    <span class="profile-name">Director</span>
                  </button>

                  <ul
                    style={{ display: sidenav ? "block" : "none" }}
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a href="/profile">Profile</a>
                    </li>

                    <li>
                      <a href="/">Log Out</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        )} */}
        <div className="Common-Row-Div">
          <SideNavCustomMain />
          <div className="Common-mt-64">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/sub-projects">Projects</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/module-expand-rank-tracking">Rank Tracking</a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div ref={ref} class="calendar-main">
              <div className="add-new-btnw">
                <button
                  className="outline-btn-boderless"
                  style={{ width: "250px" }}
                  onClick={() => setOpen(!open)}
                >
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
                          onChange={(e) => {
                            setValues(e);
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
                            <label>Date Range</label>
                          </div>
                          <div className="col-5">
                            <select>
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
                            <input type="text" value={values[0].format()} />
                          </div>
                          <div className="col-1"></div>
                          <div className="col-5">
                            {values.length == 2 ? (
                              <input type="text" value={values[1].format()} />
                            ) : (
                              <input type="text" value={"select"} />
                            )}
                          </div>
                          <div className="col-1"></div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-6 ">
                            <input
                              type="checkbox"
                              onChange={() => {
                                setCheckBoxValue(!checkBoxValue);
                              }}
                            />
                            <label className="lable-compare">Compare to</label>
                          </div>
                          <div className="col-5">
                            <select>
                              <option value="All">previous period</option>
                              <option>yesterday</option>
                              <option>last week</option>
                            </select>
                          </div>
                          <div className="col-1"></div>
                        </div>
                        {checkBoxValue ? (
                          <div className="row mt-3">
                            <div className="col-5">
                              <input type="text" value={head1} />
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5">
                              <input type="text" value={head2} />
                            </div>
                            <div className="col-1"></div>
                          </div>
                        ) : (
                          <div className="row mt-3">
                            <div className="col-5">
                              <input type="text" disabled value={head1} />
                            </div>
                            <div className="col-1">
                              <h6 className="pt-2">-</h6>
                            </div>
                            <div className="col-5">
                              <input type="text" disabled value={head2} />
                            </div>
                            <div className="col-1"></div>
                          </div>
                        )}
                        <hr />
                        <div className="row mt-3">
                          <div className="col-6">
                            <button
                              onClick={() => {
                                setheadvalues();
                                setOpen(!open);
                              }}
                              className="outline-btn"
                            >
                              Apply
                            </button>
                          </div>
                          <div className="col-6">
                            <buton
                              onClick={() => setOpen(!open)}
                              className="outline-btn"
                            >
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
            <Tabs>
              <TabList>
                <Tab>Rank Tracking</Tab>
                <Tab>Tickets</Tab>
              </TabList>

              <TabPanel>
                <div
                  className="Rank-track-top"
                  style={{
                    display: "flex",
                    float: "right",
                    marginBottom: 24 + "px",
                  }}
                >
                  <label
                    className="common-label"
                    style={{ marginRight: 24 + "px", marginTop: 5 + "px" }}
                  >
                    Update Frequency
                  </label>
                  <select
                    className="common-height-30-padding"
                    name=""
                    id="device-type"
                    style={{ marginRight: 24 + "px" }}
                    disabled
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Fornightly">Fornightly</option>
                  </select>
                  <i
                    class="fa fa-edit"
                    style={{ marginTop: 10 + "px", marginRight: 24 + "px" }}
                    onClick={() => {
                      document.getElementById("device-type").disabled = !fre;
                      setfre(!fre);
                    }}
                  ></i>
                  <div>
                    <select
                      className="common-height-30-padding"
                      id="export"
                      name="export"
                    >
                      <option value="Export">Export</option>
                      <option value="PDF">Excel</option>
                      <option value="WORD">CSV</option>
                      <option value="Sheets">Sheets</option>
                    </select>
                  </div>
                </div>
                <br />
                <div
                  className="row rank-tracking-top-select"
                  style={{ marginTop: 48 + "px" }}
                >
                  <div className="col-lg-3 my-2 col-sm-6 col-md-6">
                    <label className="common-label">Device Type</label>
                    <select
                      name=""
                      id="device-type"
                      className="device-type-rank-choose common-height-30-padding"
                    >
                      <option value="Mobile">Mobile</option>
                      <option value="Desktop">Desktop</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <label className="common-height-30-padding">Location</label>
                    <select
                      name=""
                      id="device-type"
                      className="device-type-rank-choose common-height-30-padding"
                    >
                      <option value="Chennai">Chennai</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                  </div>
                  <div className="col-lg-3 add-new-btnw">
                    <button
                      style={{ height: 38 + "px" }}
                      class="outline-btn common-height-30-padding"
                      onClick={generatereport1}
                    >
                      Generate
                    </button>
                  </div>
                </div>
                <div className="row rank-tracking-top-select">
                  <div
                    className="col-lg-3 col-sm-6 col-md-6"
                    style={{ display: "flex" }}
                  ></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                </div>

                <hr />

                {displayTable ? (
                  <>
                    <div
                      className="rank-track-graph"
                      style={{
                        display: "flex",
                        marginTop: 24 + "px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          width: "90%",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <label
                            className="common-label"
                            htmlFor=""
                            style={{
                              marginRight: 24 + "px",
                              marginTop: 5 + "px",
                            }}
                          >
                            Keyword
                          </label>
                          <ReactSelect
                            className="da-pa-search"
                            options={UrloptionBottom}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{
                              Option,
                            }}
                            onChange={handleChangeURLSelectedBottom}
                            allowSelectAll={true}
                            value={urlSelectbottom}
                          />
                        </div>

                        <div
                          style={{ display: "flex" }}
                          className="rank-track-graph-input-2"
                        >
                          <label
                            className="common-label"
                            htmlFor=""
                            style={{
                              marginRight: 24 + "px",
                              marginTop: 5 + "px",
                              marginLeft: 24 + "px",
                            }}
                          >
                            Competitor
                          </label>
                          <select className="common-height-30-padding">
                            <option value="https://www.metroshoes.net/">
                              https://www.metroshoes.net/
                            </option>
                            <option value="https://www.mochishoes.com/">
                              https://www.mochishoes.com/
                            </option>
                            <option value="https://www.myntra.com/">
                              https://www.myntra.com/
                            </option>
                            <option value="https://www.amazon.in/">
                              https://www.amazon.in/
                            </option>
                          </select>
                        </div>
                      </div>
                      <div style={{ textAlign: "end" }}>
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-basic">
                            <i className="fa fa-download"></i>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="">
                              Download All Charts
                            </Dropdown.Item>
                            <Dropdown.Item href="">
                              Download this only
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Chart
                          className="line-graph Graph-rank"
                          height={"400px"}
                          chartType="LineChart"
                          data={chartdata}
                          options={{
                            hAxis: {
                              title: "metroshoes.net",
                              baselineColor: "red",
                            },
                            vAxis: {
                              title: "Shoes",
                              minValue: 0,
                              maxValue: 100,
                            },
                            legend: {
                              position: "bottom",
                            },
                          }}
                          rootProps={{ "data-testid": "1" }}
                        />
                      </div>
                      <div className="col-md-12 table-graph-modules">
                        <Table
                          id="sample"
                          columns={keyTableCol}
                          dataSource={[...keytablelist]}
                          rowSelection={{
                            type: selectionTypeKeyTable,
                            ...rowSelection,
                          }}
                          pagination={{ position: [] }}
                        />
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-show-hide">
                            Competitors
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="">
                              <Menu>
                                <Menu.ItemGroup title="">
                                  {initialColumns.map((i, index) => {
                                    return (
                                      <>
                                        {index != initialColumns.length - 1 ? (
                                          <>
                                            <Menu.Item key={index}>
                                              <Checkbox
                                                id={i.key}
                                                onChange={onChange}
                                                defaultChecked
                                              >
                                                {i.title}
                                              </Checkbox>
                                            </Menu.Item>
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    );
                                  })}
                                </Menu.ItemGroup>
                              </Menu>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="col-md-6">
                        <div class="add-new-btnw">
                          <a href="#" class="outline-btn">
                            EXPORT
                          </a>
                        </div>
                      </div>
                    </div>

                    <Table
                      id="sample-module-expand"
                      columns={teamcol}
                      dataSource={teamlist}
                      rowSelection={{ type: selectionType, ...rowSelection }}
                      pagination={{ position: [] }}
                    />
                  </>
                ) : (
                  <></>
                )}
              </TabPanel>
              <TabPanel>
                <ModuleExpandTickets />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={() => handleModal()}
        className="edit-employee-modal"
      >
        <Modal.Header closeButton>Choose Data Range</Modal.Header>
        <Modal.Body>
          <div class="common-wrapper">
            <div class="common-wcard">
              <div class="common-form-fields">
                <div class="add-user">
                  <div class="form-wrappers">
                    <label>From Date</label>
                    <input type="date" name="" placeholder="" />
                  </div>

                  <div class="form-wrappers">
                    <label>To Date</label>
                    <input type="date" name="" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModal()}>Close</Button>
          <Button onClick={() => handleModal()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModuleExpandRankTracking;
