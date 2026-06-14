import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('about');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const sections = {
    about: { label: 'About', icon: '👤' },
    experience: { label: 'Experience', icon: '💼', subItems: ['Job 1', 'Job 2', 'Job 3'] },
    education: { label: 'Education', icon: '🎓', subItems: ['Cleveland State University'] },
    blogs: { label: 'Blogs', icon: '📝', subItems: ['Getting Started', 'Advanced Topics'] }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-panel">

        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>

        <nav className="sidebar-nav">
          {Object.entries(sections).map(([key, section]) => (
            <div key={key} className="nav-item-wrapper">

              <div
                className={`nav-item ${activeSection === key ? 'active' : ''}`}
                onClick={() => setActiveSection(key)}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-label">{section.label}</span>

                {section.subItems && (
                  <button
                    className="expand-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(key);
                    }}
                  >
                    ▶
                  </button>
                )}
              </div>

              {section.subItems && expandedItems[key] && (
                <div className="subnav-items">
                  {section.subItems.map((subItem, idx) => (
                    <div key={idx} className="subnav-item">
                      • {subItem}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </nav>

      </div>
    </aside>
  );
}

export default Sidebar;