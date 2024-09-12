import './App.css';
function App() {
  const countries = [
    {
      id: 1,
      name: "Wallis and Futuna",
      capital: "Mata-Utu",
      population: 11750,
      flag: "https://flagcdn.com/wf.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 2,
      name: "Iceland",
      capital: "Reykjavik",
      population: 366425,
      flag: "https://flagcdn.com/is.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 3,
      name: "Luxembourg",
      capital: "Luxembourg",
      population: 632275,
      flag: "https://flagcdn.com/lu.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 4,
      name: "Mali",
      capital: "Bamako",
      population: 20250834,
      flag: "https://flagcdn.com/ml.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 5,
      name: "Comoros",
      capital: "Moroni",
      population: 869595,
      flag: "https://flagcdn.com/km.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 6,
      name: "Australia",
      capital: "Canberra",
      population: 25687041,
      flag: "https://flagcdn.com/au.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 7,
      name: "Estonia",
      capital: "Tallinn",
      population: 1331057,
      flag: "https://flagcdn.com/ee.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 8,
      name: "Canada",
      capital: "Ottawa",
      population: 38005238,
      flag: "https://flagcdn.com/ca.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 9,
      name: "Belarus",
      capital: "Minsk",
      population: 9398861,
      flag: "https://flagcdn.com/by.svg",
      isLiked: false,
      isBasket: false,
    },
    {
      id: 10,
      name: "Guyana",
      capital: "Georgetown",
      population: 786559,
      flag: "https://flagcdn.com/gy.svg",
      isLiked: false,
      isBasket: false,
    },
  ];
  return (
    <div>
      <div className="header">
        <div className="header-top">
          <h1> Countries</h1>
          <div className="buttons">
            <button className="like-btn">Likes</button>
            <button className="save-btn">Saved</button>
            <button classn="toggle-btn">Mode</button>
          </div>
        </div>
        <div className="header-bottom">
          <input
            type="text"
            className="search"
            placeholder="Search for a countries"
          />
          <select className="select">
            <option>All</option>
          </select>
        </div>
      </div>
      {countries.map((item) => (
        <ul className="country-list flex flex-wrap justify-between">
          <li className="list-item">
            <img width={250} height={120} src={item.flag} />
            <h3>{item.name}</h3>
            <h3>{item.capital}</h3>
            <h3>Id:{item.id}</h3>
            <h3>Population:{item.population}</h3>
            <button className="like-btn1">Likes</button>
            <button className="save-btn">Saved</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
