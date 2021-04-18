
import './App.css';
import Row  from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
    <h1>Building netflix clone.</h1>
    <Row title="netflix  originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending  now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
