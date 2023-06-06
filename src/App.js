import "./App.css";

export default function App() {
  return (
    <section className="App">
      <header className="Header">
        <img
          className="HeaderArt"
          src="/album.webp"
          alt="Pavement - Slanted &amp; Enchanted: 30 Year Anniversary"
        />
        <h1 className="HeaderTitle">
          Pavement - Slanted &amp; Enchanted: 30 Year Anniversary
        </h1>
        <p className="HeaderDescription">Choose your favourite service</p>
      </header>
      <ul className="LinkList">
        <li className="LinkListItem">
          <span className="LinkListItemLabel">Matador Records</span>
          <a className="Button" href="#1">
            Buy
          </a>
        </li>
        <li className="LinkListItem">
          <span className="LinkListItemLabel">Bandcamp</span>
          <a className="Button" href="#2">
            Buy
          </a>
        </li>
        <li className="LinkListItem">
          <span className="LinkListItemLabel">Spotify</span>
          <a className="Button" href="#3">
            Listen
          </a>
        </li>
        <li className="LinkListItem">
          <span className="LinkListItemLabel">Apple Music</span>
          <a className="Button" href="#4">
            Listen
          </a>
        </li>
        <li className="LinkListItem">
          <span className="LinkListItemLabel">Amazon Music</span>
          <a className="Button" href="#5">
            Buy
          </a>
        </li>
      </ul>
    </section>
  );
}
