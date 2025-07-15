
import logo from '../logo.svg';

function Header() {
  return (
      <header className="chef-header">
        <img src={logo}    alt="logo" />
        <h1>Chef Claude</h1>
      </header>
  );
}
export default Header;

