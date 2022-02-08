import React, {useEffect, useState} from 'react';
import { SideNavBarCustom, SideNavBarCustomClosed } from ".";


function SideNavCustomMain(){
  const [sidenavToggle, setSidenavToggle] = useState(true);
  const [hover, hoverControl] = useState(false);
    return(
        
            // <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
            //     <aside data-sticky="true" style={{maxWidth:sidenavToggle?"190px":"50px"}}>
            //         <div class="sidebar-nav-bar">
            //             {sidenavToggle 
            //                     ?
            //                     <>
            //                         <SideNavBarCustom />
            //                         <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
            //                         <i class="fa fa-angle-left"></i>
            //                         </button>
            //                     </>
            //                     :
            //                     <>
            //                         <div><SideNavBarCustomClosed /></div>
            //                         <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
            //                         <i class="fa fa-angle-right"></i>
            //                         </button>
            //                     </>
            //                 } 
            //         </div>
            //     </aside>
            // </div>
        <>
            {
                sidenavToggle 
                ?
                    <>
                        <div className="custom-column-20-dashboard-seo">
                            <aside data-sticky="true" style={{maxWidth:"190px"}}>
                                <div class="sidebar-nav-bar">
                                    <SideNavBarCustom />
                                    <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                        <i class="fa fa-angle-left"></i>
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </>
                :
                    <>
                    
                        <div className={!hover ? "custom-column-10-dashboard-seo" : "custom-column-20-dashboard-seo"}>
                            <aside data-sticky="true" style={{maxWidth:hover?"190px":"50px"}}>
                                <div class="sidebar-nav-bar">
                                    <div onMouseEnter={()=>hoverControl(true)} onMouseLeave={()=>hoverControl(false)}>
                                        {
                                            !hover 
                                            ?
                                            <SideNavBarCustomClosed />
                                            :
                                            <SideNavBarCustom />

                                        }
                                    </div>
                                    <button class="control-toggle-dashboard-seo" onClick={()=>{setSidenavToggle(!sidenavToggle);hoverControl(false)}}>
                                        <i class="fa fa-angle-right"></i>
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </>
            }
        </>
    )
}

export default SideNavCustomMain