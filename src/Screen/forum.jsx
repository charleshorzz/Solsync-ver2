import React from 'react';
import '../Styles/forum.css';
import SocialCard from '../Components/PostRender';


const Forum = () => {

    return (
      <div>
      {/*Nav bar*/}
      <div className="Bar">
        
        <div className="forum">
          <h1>Portfolio Hub</h1>
        </div>

        <div className="RightBar">

        <div className="search">
          <input type="search" name="Search" id="" />
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <button>Sign up</button>
        </div>
        </div>
      </div>
      

      {/*SideBar*/}
      <div className="Sidebar">
        {/* <div className="SidebarOption">
          <h3>Categories</h3>
          
        </div> */}
        
      </div>

      {/* Message bar */}

      <div className="MessageSidebar">
       
        
      </div>


      {/* Forum content */}
      <div className="forumContainer">
        <div className="forumContent">
          <div className="CardShadow">
            <SocialCard />
          </div>
          
          
          
        </div>
      </div>

      </div>
    );
  }



export default Forum;
