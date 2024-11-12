import bgAbout from "../../images/aboutbg.jpg";

const AboutHero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgAbout})` }}
      className="min-h-screen bg-no-repeat bg-cover"
    >
      <div className="mx-auto container min-h-screen flex items-center justify-center">
        <h1 className="font-bold text-stone-300 text-[200px]">ABOUT</h1>
      </div>
    </section>
  );
};

export default AboutHero;
