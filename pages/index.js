export default function Home() {
  const generateSomething = () => {
    let num;
    let genre;
    let movtv;

    const choices = ["Movie", "TV Show"];
    const netflixgenres = [
      "Action & Adventure ",
      "Anime",
      "Children & Family",
      "Classic",
      "Comedies",
      "Documentaries",
      "Dramas",
      "Horror",
      "Music",
      "Romantic",
      "Sci-fi & Fantasy",
      "Sports",
      "Thrillers",
    ];

    num = Math.floor(Math.random() * 10 + 1);
    movtv = choices[Math.floor(Math.random() * 2)];
    genre = netflixgenres[Math.floor(Math.random() * netflixgenres.length)];

    document.getElementById("title").innerHTML = "You should watch...";
    document.getElementById(
      "paragraph"
    ).innerHTML = `the ${num}th ${movtv}, in the ${genre} genre`;
    document.getElementById("generator").innerHTML = `PICK AGAIN!`;
  };
  return (
    <div className="background-card">
      <div className="background-overlay">
        <nav>
          <img
            src="https://fontmeme.com/permalink/210711/499b51033e97681ca78053d54a6870f2.png"
            id="logo"
          />
        </nav>
        <div className="main">
          <h1 id="title">No need to decide!</h1>
          <p id="paragraph">
            Let WSIN make the decision of the night for you, enjoy your night.
          </p>
          <button id="generator" onClick={generateSomething}>
            PICK A SHOW!
          </button>
        </div>
      </div>
    </div>
  );
}
