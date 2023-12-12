// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav"
import "./CSS/style.css"
import Footer from "./components/Footer.js";
import Img1 from "./components/lio.jpg"
import Img2 from "./components/ronaldo.jpg"
import Img3 from "./components/sunil.jpg"
import Img4 from "./components/neymar.jpg"
import Img6 from "./components/zlatan.jpg"
import Img5 from "./components/david.jpg"
function Home() {
  return (
    <div className="App">
      <Nav/>
      <Footer/>
      <div className="container">
  <div class="card">
  <img src={Img1} alt="My Image" />

    <div className="card__head">Lionel Messi</div>
  </div>
  <div className="card">
  <img src={Img2} alt="My Image" />
    <div className="card__head">Cristiano Ronaldo</div>
  </div>
  <div className="card">
  <img src={Img3} alt="My Image" />
    <div className="card__head">Sunil Chethri</div>
  </div>
  <div className="card">
  <img src={Img6} alt="My Image" />
    <div className="card__head">Zlatan Ibrahimovic</div>
  </div>
  <div className="card">
  <img src={Img4} alt="My Image" />
    <div className="card__head">Neymar Jr.</div>
  </div>
  <div className="card">
  <img src={Img5} alt="My Image" />
    <div className="card__head">David Beckham</div>
  </div>
</div>
     
    </div>
    
  );
}

export default Home;
