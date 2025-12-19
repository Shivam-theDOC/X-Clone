import "./LeftSidebar.css";

function SidebarOptions({ Icon, text, active, badge }) {
  return (
    <div className={`options ${active && `options__active`}`}>
      <div className="options__icon">
        {Icon}
        {badge && <span className="options__badge">{badge}</span>}
      </div>
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarOptions;
