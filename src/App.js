
import "./App.css";
import Palette from "./components/Palette/Palette";
import Button from "./components/Button/Button.jsx";
import Palettes from "./components/Palette/Palettes";
import Forecast from "./components/Form/Forecast.jsx";
//import Form from "./routes/Form/Form";
function App() {

//   return (
//     <div className="App">
//       <Routes >
//       <Route path='/' element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path='Forecast' element={<Forecast />} />
//         </Route>
//         </Routes>
//     </div>
//   );
// }
  return (
    // <DeleteContext.Provider value={{ palettes, setPalettes }}>
      <div className="App">
        <header>
          <h1>Forecast</h1>
        </header>
        <div className="main-container">
          <Forecast/>
          <Palettes/>
          {/* <Button /> */}
        </div>
      </div>
    // </DeleteContext.Provider>
  );
}

export default App;
