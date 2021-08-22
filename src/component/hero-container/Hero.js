import './hero.scss';
 const Hero = ({selectedVideo}) => (
  <div className="hero">
    <video className="hero__video" controls={true} src="file.mp4" type="video/mp4" poster={selectedVideo.image}/>
  </div>
 );

  export default Hero;