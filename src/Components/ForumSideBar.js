import React from 'react';
import '../Styles/ForumSideBar.css'; // Create a corresponding CSS file named sidebar.css

// Sidebar component that displays a list of popular topics
function Sidebar() {
  // Example list of topics hardcoded, this would usually come from backend
  const topics = [
    { name: 'React Fundamentals', date: 'Mar 10, 2024', comments: 15 },
    { name: 'State Management', date: 'Mar 9, 2024', comments: 10 },
    { name: 'Component Lifecycles', date: 'Mar 8, 2024', comments: 8 },
    { name: 'Hooks in Depth', date: 'Mar 7, 2024', comments: 20 },
    { name: 'Advanced Patterns', date: 'Mar 6, 2024', comments: 5 }
  ];

  return (
    <div className="Sidebar">
      <div className="SidebarHeader">
        <h2>Popular Topics</h2>
      </div>
      <div className="SidebarContent">
        {topics.map((topic, index) => (
          <div key={index} className="SidebarItem">
            <div className="TopicName">{topic.name}</div>
            <div className="TopicInfo">
              <span className="TopicDate">{topic.date}</span>
              <span className="TopicComments">{topic.comments} comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

// Note: Ensure to create a CSS file named sidebar.css to style this component.
