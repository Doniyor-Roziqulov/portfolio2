import bgimg from "../../images/contactbg.jpg";

const ContactHero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgimg})` }}
      className="min-h-screen bg-no-repeat bg-cover"
    >
      <div className="mx-auto container min-h-screen flex items-center justify-center">
        <h1 className="font-bold text-stone-300 text-[200px]">CONTACT</h1>
      </div>
    </section>
  );
};

export default ContactHero;
