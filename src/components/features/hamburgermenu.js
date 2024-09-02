import '../styling/hamburgermenu.css'; 

const HamburgerMenu = ({ onToggleNav, isTurned }) => {
  const handleClick = () => {
    onToggleNav();
  };

  return (
    <div className={`hamburger_menu ${isTurned ? 'turn' : ''}`} onClick={handleClick}>
      <div className="topbar"></div>
      <div className="midbar"></div>
      <div className="botbar"></div>
    </div>
  );
};

export default HamburgerMenu;
