// import logo from './logo.svg';
// import './App.css';
import Img1 from "./lio.jpg"
import Img2 from "./ronaldo.jpg"
import Img3 from "./sunil.jpg"
import Img4 from "./neymar.jpg"
import Img6 from "./zlatan.jpg"
import Img5 from "./david.jpg"
import './Home.css'
export default function Home() {
  return (
    <div className="app">
      <div className="hcontainer">
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

