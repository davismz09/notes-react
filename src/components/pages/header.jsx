import "./styles.css";
const Header = () => {
  return (
    <header className='header__container'>
      <div className='header__container-logo'>
        <div className='header__logo'>
          <h1 className='header__title'>Notes</h1>
        </div>
        <div className='header__icon'>
          <i className='bx bx-customize '></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
