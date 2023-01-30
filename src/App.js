import logo from './image.jpg';
import kl from './kl.png';

import './App.css';

function handleForm(event) {
  alert("form submitted");
  event.preventDefault();
  const data = new FormData (event.currentTarget);
  const un = data.get("NAME");
  const pw = data.get("ID NO");
  const Kd = data.get("BRANCH");
  const Ld = data.get("YEAR");
  const Qd = data.get("COLLEGE");

  console.log("Name:"+un+" --- ID Number:"+pw+" --- Branch:"+Kd+"--- Year:"+Ld+"--- College:"+Qd);
  document.getElementById("name").innerHTML = "NAME: "+un;
  document.getElementById("id").innerHTML = "ID: "+pw;
  document.getElementById("Branch").innerHTML = "BRANCH: "+Kd;
  document.getElementById("year").innerHTML = "YEAR: "+Ld;
  document.getElementById("college").innerHTML = "COLLEGE: "+Qd;

}

function App() {
  return (
    <div className="App">
<div>
          <form onSubmit={handleForm}>
            <div className="App-body">
              <div>
              <label>Name:</label>
              <input type="text" name="NAME"></input>
              </div>
              <div>
              <label>ID NUMBER:</label>
              <input type="text" name="ID NO"></input>
              </div>
              <div>
              <label>BRANCH:</label>
              <input type="text" name="BRANCH"></input>
              </div>
              <div>
              <label>YEAR:</label>
              <input type="text" name="YEAR"></input>
              </div>
              <div>
              <label>COLLEGE:</label>
              <input type="text" name="COLLEGE"></input>
              </div>
              <div >
              <input type="submit" value="Get ID" className="login"></input>
              </div>
            </div>
          </form>     
      <header className="App-header">
        <img src={logo} className="image" alt="logo" />
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={kl} alt="kl"  style={{ width:"100%", height:"100%" }} />

    </div>
    <div class="flip-card-back">

      <p ID = "name"/>
      <p ID = "id"/>
      <p ID = "Branch"/>
      <p ID = "year"/>
      <p ID = "college"/>
    </div>
  </div>
</div>
      </header>
    </div>
    </div>
  );
}
export default App;