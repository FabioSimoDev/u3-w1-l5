import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MyNav from "./MyNav";
import "./style.css";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const getData = async function (query) {
    const APIKEY = "9b8cbbea";
    const QUERY = "harry potter";
    console.error(QUERY);
    const URL = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${QUERY}`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        throw new Error("Problema nella fetch!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <MyNav />
      <Main getData={getData} />
      <Footer />
    </div>
  );
}

export default App;
