import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';

import vistes from './data.js'


const vistes_comp = vistes.map((item) => {
  return  (<Entry 
      country={item.country}
      googleMapsLink={item.googleMapsLink}
      title={item.title}
      date={item.dates}
      description={item.text}
      imageUrl= {item.img.src}
      markeurImage={logo}  // Assuming markeur is the logo image
      altText={item.title}
      altMarkeur="Markeur"  
      img = {
        {
          src: item.img.src,
           alt: item.img.alt
          }
      }      
      />)}
    )


function App() {
  return (
    <div className="App">
      <Header />
      {vistes_comp}
    </div>
  );
}

export default App;
