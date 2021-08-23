import './hero.scss';
 const Hero = ({currentVideo}) => (
  <div className="hero">
    <video className="hero__video" controls={true} src="file.mp4" type="video/mp4" poster={currentVideo.image}/>
  </div>
 );

  export default Hero;