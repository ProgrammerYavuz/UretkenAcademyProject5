import React, { useState } from 'react';
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

function App() {
  const [celcius, celciusGetir] = useState(0);
  const [kelvin, kelvinGetir] = useState(-273,15);
  const [fahrenheit, fahrenheitGetir] = useState(32.0);

  return (
    <div className="container-fluid my-5">
      <div className="card text-center my-5 bg-dark text-white">
        <div className="card-body">

          <h2>Hava Durumu Uygulaması</h2>
          <nav className="navbar justify-content-center mb-5">
            <div className="row text-white col-12 justify-content-center">
              <div className="col-sm-4">
                <a href="https://uretkenakademi.com/" target="_blank"  className="nav-link">
                  <div className="card text-center bg-success py-2 my-2">
                    Üretken Akademi
                  </div>
                </a>
              </div>
              <div className="col-sm-4">
                <a href="https://github.com/ProgrammerYavuz" target="_blank"  className="nav-link">
                  <div className="card text-center bg-info py-2 my-2">
                    Github
                  </div>
                </a>
              </div>
            </div>
          </nav>

          <div className="my-5">
            <div className="row text-white">
              <div className="col-sm-3 mb-5">
                <h4>Nem Oranı</h4>
              </div>
              <div className="col-sm-9 mb-5">
                <div className="progress" style={{height:'30px'}}>
                  <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width: '70%'}} ></div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card text-center bg-danger py-3 my-2">
                  <Fahrenheit tittle={fahrenheit}/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card text-center bg-danger py-3 my-2">
                  <Kelvin tittle={kelvin}/>
                </div>
              </div>
            </div>

            <h2 className="my-3"><Celcius tittle={celcius}/></h2>
            
            <div className="btn-group">
              <button className="btn btn-success" onClick={() => (
                    celciusGetir(celcius + 1), 
                    kelvinGetir(kelvin + 1), 
                    fahrenheitGetir(fahrenheit + 2)
                  )}
                  disabled={(celcius === 20) || (kelvin === -253) || (fahrenheit === 72)}
              >Arttır</button>
              <button className="btn btn-warning" onClick={() => (
                    celciusGetir(0), 
                    kelvinGetir(-273,15), 
                    fahrenheitGetir(32)
                  )}
                  disabled={(celcius === 0) || (kelvin === -273) || (fahrenheit === 32)}
              >Sıfırla</button>
              <button className="btn btn-danger" onClick={() => (
                    celciusGetir(celcius - 1), 
                    kelvinGetir(kelvin - 1), 
                    fahrenheitGetir(fahrenheit - 2)
                  )}
                  disabled={(celcius === -40) || (kelvin === -313) || (fahrenheit === -48)}
              >Azalt</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
console.clear();
