
import logo from '../logo.svg';

function Header() {
  return (
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactFacts</h1>
        <h2>React courses - Project 1</h2>
      </nav>
  );
}
export default Header;