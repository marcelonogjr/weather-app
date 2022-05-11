import { Link } from "react-router-dom";

const Header = (props: { title: string }) => {
  const title = props.title;

  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to='/weather'>Weather</Link>
        <Link to='/about'>About</Link>
        <Link to='/help'>Help</Link>
      </nav>
    </header>
  );
};

export default Header;
