import React from "react";
import { useState, useEffect } from "react";
import {  Modal } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "antd/dist/antd.css";
import { Table, Input, Drawer, Breadcrumb } from "antd";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { Dropdown } from "react-bootstrap";
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

function ViewClientDetailsSalesDir() {
  const [optionSelected, setoptionSelected] = useState(null);
  function handleChange(selected) {
    setoptionSelected(selected);
  }
  const [colourOptions, setcolor] = useState([
    { value: "Ankit", label: "Ankit" },
    { value: "Monal", label: "Monal" },
    { value: "Rahul", label: "Rahul" },
    { value: "Ravi", label: "Ravi" },
  ]);
  const [sidenavToggle, setSidenavToggle] = useState(true);
  const [sidenav, setsidenav] = useState(false);
  const [active, setactive] = useState(false);
  const [show, setshow] = useState(false);
  const [teamlist, setteamList] = useState([]); //team members list
  const [selectionType, setSelectionType] = useState("checkbox"); //team members selection checkbox
  const [teamcol, setteamcol] = useState([]); //team members column details
  const [searchdata, setsearch] = useState([]); //team members search box
  const [reportgentable, setreportgentable] = useState([]);
  const [reportgencol, setreportgencol] = useState([]);
  const [selectionTypeReport, setSelectionTypeReport] = useState("checkbox");
  const [reportgenurl, setreportgenurl] = useState("");
  const [chartdataCompetitor, setchartdatacomp] = useState([]);
  const [chartoption, setchartoption] = useState("da");
  const [timeperiod, settimeperiod] = useState("Weekly");
  function handleModal() {
    setshow(!show);
  }
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    var data = [];
    for (let i = 0; i < 2; i++) {
      data.push({
        id: i,
        name: "Raj",
        date: "17/05/2021",
        time: "16:57",
        description: `description ${i}`,
      });
    }
    setnotes(data);
    var columns = [
      {
        title: "Team Member",
        dataIndex: "teammember",
        key: "teammember",
        width: "20%",
      },
      {
        title: "Date Added",
        dataIndex: "date",
        key: "date",
        width: "20%",
      },
      {
        title: "",
        dataIndex: "",
        key: "",
        width: "50%",
      },
      {
        title: "Action",
        dataIndex: "delete",
        key: "delete",
        width: "10%",
      },
    ];
    setteamcol(columns);
    columns = [
      {
        title: "URL",
        dataIndex: "url",
        key: "url",
      },
      {
        title: "DA",
        dataIndex: "da",
        key: "da",
      },
      {
        title: "PA",
        dataIndex: "pa",
        key: "pa",
      },
      {
        title: "Spam %",
        dataIndex: "spam",
        key: "spam",
      },
      {
        title: "Date Updated",
        dataIndex: "date",
        key: "date",
      },
    ];
    setreportgencol(columns);
    data = [
      ["x", "myntra", "Indya"],
      [0, 0, 0],
      [1, 10, 5],
      [2, 23, 15],
      [3, 17, 9],
      [4, 18, 10],
      [5, 9, 5],
      [6, 11, 3],
      [7, 27, 19],
    ];
    setchartdatacomp(data);
    data = [
      {
        teammember: "Kiran",
        date: "02/05/2021",
        delete: (
          <a href="">
            <i class="fa fa-trash"></i>
          </a>
        ),
      },
    ];
    setteamList(data);
  }, []);
  function assign() {
    var data = JSON.parse(JSON.stringify(teamlist));
    optionSelected.map((i) => {
      data.push({
        teammember: `${i.value}`,
        date: "02/05/2021",
        delete: (
          <a href="">
            <i class="fa fa-trash"></i>
          </a>
        ),
      });
    });
    setteamList(data);
  }
  function handleurlInput() {
    var url = document.getElementById("inputurl-view-clinet").value;
    var data = [];
    data.push({
      url: `${url}`,
      da: "28",
      pa: "21",
      spam: "2%",
      date: "02/05/2021",
    });
    console.log(data);
    setreportgentable(data);
    console.log(reportgentable);
    setreportgenurl(url);
    document.getElementById("inputurl-view-clinet").value = "";
  }
  function addnote() {
    var note = document.getElementById("notes-input").value;
    var data = [];
    var id = 0;
    notes.map((i) => {
      data.push(i);
      id += 1;
    });
    data.push({
      id: id,
      name: "Raj",
      date: "17/05/2021",
      time: "16:57",
      description: `${note}`,
    });
    setnotes(data);
    console.log(notes);
    document.getElementById("notes-input").value = "";
  }
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <section class="outer-wrapper View-Client-Dir">
        <TopNavBarCustom />
        {/* <div class="top-nav-bar">
          <div className="Ham">
            <SideNavCustomMainMob />
            <div class="logo">
              <a href="">
                <img src="images/infidigit-logo.png" />
              </a>{" "}
              <span>Growth</span>
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
                    console.log("hiii");
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
        </div> */}

        <div className="Common-Row-Div">
          <SideNavCustomMain />
          <div className="Common-mt-64">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/dashboard">Dashboard</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/team-members-sales-dir">Team Members</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/project-list-sales-dir">Projects</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/view-client-sales-dir">Projects Details</a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div class="row">
              <div class="col-sm-5 pad-lzero">
                <div class="main-title">CLIENT DETAILS</div>
              </div>
              <div class="col-sm-7 add-new-btnw"></div>
            </div>

            <div className="row view-client">
              <div className="col-md-4">
                <div class="common-wrapper">
                  <div class="common-wcard">
                    <div class="common-form-fields">
                      <div class="add-user">
                        <div class="form-wrappers">
                          <label>Client</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Client"
                            value="Myntra"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="common-wrapper">
                  <div class="common-wcard">
                    <div class="common-form-fields">
                      <div class="add-user">
                        <div class="form-wrappers">
                          <label>Client Code</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Client Code"
                            value="10020"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="common-wrapper">
                  <div class="common-wcard">
                    <div class="common-form-fields">
                      <div class="add-user">
                        <div class="form-wrappers">
                          <label>POC</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter POC"
                            value="Raj"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Tabs className="tabs-inner-page-speed">
              <TabList style={{ padding: "unset", marginBottom: 24 + "px" }}>
                <Tab>Project Details</Tab>
                <Tab>Team Members</Tab>
              </TabList>
              <TabPanel>
                <div class="row">
                  <div class="col-sm-5 pad-lzero">
                    <div class="main-title">PROJECT DETAILS</div>
                  </div>
                  <div class="col-sm-7 add-new-btnw">
                    <a
                      style={{ color: "#0d6efd" }}
                      onClick={() => handleModal()}
                    >
                      View / Add Notes
                    </a>
                  </div>
                </div>

                <div class="common-wrapper">
                  <div class="common-wcard">
                    <div class="common-form-fields">
                      <div class="add-user">
                        <div class="form-wrappers">
                          <label>Project Code</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Project Code"
                          />
                        </div>

                        <div class="form-wrappers">
                          <label>Customer Name</label>
                          <select>
                            <option>Myntra</option>
                            <option>Infi</option>
                          </select>
                        </div>

                        <div class="form-wrappers">
                          <label>Start Date</label>
                          <input type="date" name="" />
                        </div>

                        <div class="form-wrappers">
                          <label>Estimated Completion Date</label>
                          <input type="date" name="" />
                        </div>

                        <div class="form-wrappers">
                          <label>Domain Name</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Domain Name"
                          />
                        </div>

                        <div class="form-wrappers">
                          <label>Cost</label>
                          <input type="text" name="" placeholder="Enter Cost" />
                        </div>

                        <div class="form-wrappers">
                          <label>Location</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Location"
                          />
                        </div>

                        <div class="form-wrappers">
                          <label>POC</label>
                          <input type="text" name="" placeholder="Enter POC" />
                        </div>

                        <div class="form-wrappers">
                          <label>Contact</label>
                          <input
                            type="text"
                            name=""
                            placeholder="Enter Contact"
                          />
                        </div>

                        <div class="form-wrappers">
                          <label>Schedule Remainder</label>
                          <br />
                          <label class="switch">
                            <input
                              type="checkbox"
                              id="toggle2"
                              onClick={() => {
                                setactive(!active);
                              }}
                            />
                            <span class="slider round"></span>
                          </label>
                        </div>

                        {active ? (
                          <>
                            <div class="row">
                              <div class="col-sm-5 pad-lzero">
                                <div class="main-title">REMAINDER DETAILS</div>
                              </div>
                              <div class="col-sm-7 add-new-btnw"></div>
                            </div>
                            {/* <div className="row view-client">
                                            <div className="col-md-4"> */}
                            <div class="common-wrapper">
                              <div class="common-wcard">
                                <div class="common-form-fields">
                                  <div class="add-user">
                                    <div class="form-wrappers">
                                      <label>Remainder Time</label>
                                      {/* <input type="date" name="" placeholder="Enter Date and time" /> */}
                                      <input
                                        type="datetime-local"
                                        id="birthdaytime"
                                        name="birthdaytime"
                                      />
                                    </div>

                                    <div class="form-wrappers">
                                      <label class="">Remainder Reason</label>
                                      <input
                                        type="text"
                                        id="remainder-reason"
                                        name=""
                                        placeholder="Enter remainder reason"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>

                  <ul class="form-action-wrapper">
                    <li>
                      <a href="#" class="ol-btn">
                        Cancel
                      </a>
                    </li>
                    <li>
                      <a href="#" class="outline-btn">
                        Save
                      </a>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div class="row">
                  <div class="col-sm-5 pad-lzero">
                    <div class="main-title">ASSIGN TEAM MEMBERS</div>
                  </div>
                  <div class="col-sm-7 add-new-btnw"></div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <ReactSelect
                      options={colourOptions}
                      isMulti
                      closeMenuOnSelect={false}
                      hideSelectedOptions={false}
                      components={{
                        Option,
                      }}
                      onChange={handleChange}
                      allowSelectAll={true}
                      value={optionSelected}
                    />
                  </div>
                  <div className="col-md-3">
                    <button onClick={() => assign()} class="outline-btn">
                      Assign
                    </button>
                  </div>
                </div>
                <hr />

                {teamlist && teamlist.length > 0 ? (
                  <>
                    <div class="add-new-btnw" style={{ textAlign: "left" }}>
                      {/* <button  class="outline-btn">Edit</button> */}
                    </div>

                    <div className="row">
                      <div className="col-sm-5"></div>
                      <div className="col-sm-7 add-new-btnw">
                        <div
                          class="search"
                          style={{ marginLeft: 0 + "px", width: 100 + "%" }}
                        >
                          <div class="input-group" style={{ display: "block" }}>
                            <Input.Search
                              allowClear
                              placeholder="Search By name"
                              onSearch={(nameSearch) => {
                                setteamList(
                                  searchdata.filter((person) =>
                                    person.name.includes(nameSearch)
                                  )
                                );
                                console.log(nameSearch);
                              }}
                              id="input-s"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="common-table">
                      <div class="row">
                        <div class="col-md-5"></div>
                        <div class="col-md-7">
                          <div
                            class="data-export"
                            style={{ textAlign: "end", marginLeft: "unset" }}
                          >
                            {/* <span class="data-per-page">Data Per page</span>
                                                        <span class="count-drop" style={{width:100+'px'}}>
                                                        </span> */}
                            <span class="export">
                              <button
                                class="outline-btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Export
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a class="dropdown-content" href="#">
                                  Excel
                                </a>
                                <a class="dropdown-content" href="#">
                                  CSV
                                </a>
                                <a class="dropdown-content" href="#">
                                  Sheets
                                </a>
                              </div>
                            </span>

                            <span></span>
                          </div>
                        </div>
                      </div>
                      <Table
                        id="sample"
                        columns={teamcol}
                        dataSource={teamlist}
                        rowSelection={{ type: selectionType, ...rowSelection }}
                        pagination={{ position: ["topLeft", "bottomRight"] }}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={() => handleModal()} className="edit-notes">
        <Modal.Header closeButton>View / Add Notes</Modal.Header>
        <Modal.Body>
          <div className="notes-input-box" id="notes-input-box">
            <div>
              <textarea
                rows="4"
                cols="45"
                id="notes-input"
                placeholder="Enter notes..."
              ></textarea>
            </div>
            <div>
              <div class="profile-pic">
                <img src="images/profile-pic.jpeg" alt="" />
              </div>
              <button class="send-button" onClick={addnote}>
                <i class="fa fa-send"></i>
              </button>
            </div>
          </div>
          {notes &&
            notes.map((i, index) => {
              return (
                <div className="notes-list ">
                  <span class="profile-pic">
                    <img src="images/profile-pic.jpeg" alt="" />
                  </span>
                  <span class="notes-name">{i.name} - </span>
                  <span class="notes-date">{i.date} </span>
                  <span class="notes-time"> {i.time}</span>
                  <div className="description">{i.description}</div>
                </div>
              );
            })}
        </Modal.Body>
      </Modal>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="notes-input-box" id="notes-input-box">
          <div>
            <textarea
              rows="4"
              cols="45"
              id="notes-input"
              placeholder="Enter notes..."
            ></textarea>
          </div>
          <div>
            <div class="profile-pic">
              <img src="images/profile-pic.jpeg" alt="" />
            </div>
            <button
              class="send-button"
              onClick={() => {
                addnote();
              }}
            >
              <i class="fa fa-send"></i>
            </button>
          </div>
        </div>
        {notes.length}
        {notes.map((i, index) => {
          return (
            <div className="notes-list ">
              <span class="profile-pic">
                <img src="images/profile-pic.jpeg" alt="" />
              </span>
              <span class="notes-name">{i.name} - </span>
              <span class="notes-date">{i.date} </span>
              <span class="notes-time"> {i.time}</span>
              <div className="description">{i.description}</div>
            </div>
          );
        })}
      </Drawer>
    </>
  );
}

export default ViewClientDetailsSalesDir;