import "./LeftSidebar.css";

function SidebarOptions({ Icon, text, active }) {
  return (
    <div className={`options ${active && `options__active`}`}>
      {Icon}
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarOptions;
