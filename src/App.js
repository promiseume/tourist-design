import Nav from './component/nav/nav'
import Hero from './component/header/hero'
import Section from './component/section/section'
import Trip from './component/trip/trip'
import Info from './component/info/info'
import Gallery from './component/Gallery/gallery'
import Video from './component/vidoe/video'
import Footer from './component/footer/footer'
function App() {
  return (
    <div className="App">
      <div className='header'>
     <Nav/>
     <Hero/>
     </div>
     <Section/>
     <Trip/>
     <Gallery/>
     <Info/>
     <Video/>
    <Footer/>
    </div>
  );
}

export default App;
