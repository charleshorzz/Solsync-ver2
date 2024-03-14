import React from 'react';
import '../Styles/contentRender.css'; // Ensure to create a CSS file with this name



function SocialCard() {
  

  return (
    <div>
      <div className="Card">

        {/* Header */}
        <div className="CardHeader">

          <div className="ProfileImg">
            <img src="/robertKiyosakiprofile.jpg" alt="profile-pic" />

          </div>

          <div className="userDetails">
            <span className="user-name">Robert Kiyosaki (UP)</span>
            <span className="post-time"></span>
          </div>

          <div className="ProfileDate">

          </div>


        </div>


        {/* Content */}
        <div className="CardContent">


          <div className="ContentDiscription">
            <span className="user-name">The more a person seeks security, the more that person gives up control over his life.</span>

          </div>


          <div className="ContentImg">
            <img src="/robertKiyosaki.jpg" alt="content-pic" />

          </div>


        </div>


        {/* Footer */}
        <div className="CardFooter">

          <div className="Like">
            <button>Like</button>
          </div>


          <div className="comment">
            <button >Comment</button>
            {/* <div className="commentSection">
              <div className="commentBox">
                <span>Username</span>
                <p>Comment</p>
              </div>
              <input type="text" placeholder="Add a comment" />
            </div> */}
          </div>


          <div className="share">
            <button>Share</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SocialCard;
