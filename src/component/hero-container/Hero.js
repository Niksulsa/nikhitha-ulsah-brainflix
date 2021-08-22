import './hero.scss';
 const Hero = ({selectedVideo}) => (
  <div className="hero">
    <video className="hero__video" poster={selectedVideo.image}/>
  </div>
 );

  export default Hero;