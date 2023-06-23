export const Navigation = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="" alt="header__logo" />
      </div>
      <div className="header__search-container">
        <input className="header__search" type="text" />
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-list-item">Account</li>
          <li className="header__navigation-list-item">Popular products</li>
          <li className="header__navigation-list-item">Pro members</li>
        </ul>
      </nav>
      <div>
        <button>More Products</button>
      </div>
    </header>
  );
};
