const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">Notes</h1>
      <button className="button" onClick={props.onUpdate}>🗘</button>
    </header>
  );
};

export default Header;
