import React, {useEffect, useState, useRef} from 'react';
import {Dropdown} from 'react-bootstrap'
import SideNavCustomMainMob from "./SideNavCustomMainMob";
function TopNavBarCustom(){
    const [user, setuser] = useState('');
    useEffect(()=>{
        var u = localStorage.getItem('state');
        setuser(u);
    },[])
    const [mod, setmod] = useState(false);
    const [sidenav,setsidenav] = useState(false);
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [clientchosen, setclientchosen] = useState([
  
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
    ]);
    const [projectslisttop, setprojectslisttop] = useState([
        {
        title:"Myntra",
        projects:[
            {
            projname:"Myntra - Shoes"
            },
            {
            projname:"Myntra - Loafers"
            }
        ]
        },
        {
        title:"Amazon",
        projects:[
            {
            projname:"Amazon - Fashion"
            },
            {
            projname:"Amazon - Jewellery"
            }
        ]
        }
    ])
    function showProjects(a){
        var proj = projectslisttop.filter(item => item.title == a);
        console.log(proj[0].projects)
        setclientchosen(proj[0].projects)
    }
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
    return(
        <>
            {
                user == "admin" 
                ? 
                    <>
                        <div class="top-nav-bar">
        
                            <div class="Ham">
                            <SideNavCustomMainMob/>
                            <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
                            </div>
                            {/* <div class="nav-bar-center">&nbsp;</div> */}
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
                                    <span class="profile-name">Director</span>
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
                    </>
                :
                    <>
                    </>
            }
            {
                user == "HR"
                ?
                    <>
                        <div class="top-nav-bar">
                            
                            <div class="Ham">
                            <SideNavCustomMainMob/>
                            <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
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
                                    <span class="profile-name">HR</span>
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
                    </>
                :
                    <></>
            }
            {
                user == "sales"
                ?
                    <>
                        <div class="top-nav-bar">
                            
                            <div class="Ham">
                            <SideNavCustomMainMob/>
                            <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
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
                        </div>
                    </>
                :
                    <></>
            }
            {
                user == "SEO"
                ?
                    <>
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
                    </>
                :
                    <></>
            }
            {
                user == "Customers"
                ?
                    <>
                       <div class="top-nav-bar">
        
                            <div class="Ham">
                            <SideNavCustomMainMob/>
                            <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span></div>
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
                                    <span class="profile-name">Customers</span>
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
                    </>
                :
                    <></>
            }
        </>
    )
}

export default TopNavBarCustom;