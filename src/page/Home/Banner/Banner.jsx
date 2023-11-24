import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
      >
        <div data-src="https://i.ibb.co/bvbscd3/annie-spratt-h-WJs-Ona-WTqs-unsplash.jpg" />
        <div data-src="https://i.ibb.co/F5XY8h1/bank-phrom-Tzm3-Oyu-6sk-unsplash.jpg" />
        <div data-src="https://i.ibb.co/BKxcpb7/priscilla-du-preez-Ggtxcc-Oj-IXE-unsplash.jpg" />
        <div data-src="https://i.ibb.co/1JBv0g7/sean-driscoll-NYSe-If-T3-JJ4-unsplash.jpg" />
        <div data-src="https://i.ibb.co/J35NV52/hannah-grace-Te-r-G1-A6ru-U-unsplash.jpg" />
        <div data-src="https://i.ibb.co/Gv8t3KW/viktor-bystrov-1-QEs6h9s4-XQ-unsplash.jpg" />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
