const Skills = () => {
  return (
    <section className="bg-[#DFE3E8] pt-24 lg:pt-[150px] relative pb-10 lg:pb-[80px] overflow-x-hidden">
      <div className="mx-auto container">
        <div>
          <p className="text-[150px] text-skills text-slate-600 animate-pulse pointer-events-none font-semibold absolute top-0 lg:left-[300px] xl:left-[530px]">
            Skills
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-x-3 mt-10">
            <img
              className="w-full h-[300px] lg:h-[350px] min-[580px]:h-[350px] xl:h-[400px] object-cover shadow-2xl"
              src="https://cdn-employer-wp.arc.dev/wp-content/uploads/2022/04/good-software-developer-1128x635.jpg"
              alt="developer photo"
            />
            <div className="flex items-center justify-center">
              <div>
                <h2
                  data-aos="zoom-out-up"
                  className="text-center text-5xl min-[540px]:text-7xl xl:text-8xl lg:text-6xl text-slate-700 mb-3 pointer-events-none"
                >
                  Time allocation
                </h2>
                <p data-aos="zoom-out-up">Time waits for no one</p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-x-3">
            <div className="flex items-center justify-center">
              <div>
                <h2
                  data-aos="zoom-out-up"
                  className="text-center text-5xl min-[540px]:text-7xl xl:text-8xl lg:text-6xl text-slate-700 mb-3"
                >
                  Team work
                </h2>
                <p data-aos="zoom-out-up">Teamwork builds trust</p>
              </div>
            </div>
            <img
              className="w-full h-[300px] lg:h-[350px] min-[580px]:h-[350px] xl:h-[400px] object-cover shadow-2xl"
              src="https://www.purdueglobal.edu/blog/it/software-developer.jpeg"
              alt="developer photo"
            />
          </div>
          <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-x-3">
            <img
              className="w-full h-[300px] lg:h-[350px] min-[580px]:h-[350px] xl:h-[400px] object-cover shadow-2xl"
              src="https://thumbs.dreamstime.com/b/stressed-software-developer-computer-home-office-deadline-technology-people-concept-sad-82868841.jpg"
              alt="developer photo"
            />
            <div className="flex items-center justify-center">
              <div>
                <h2
                  data-aos="zoom-out-up"
                  className="text-center text-5xl min-[540px]:text-7xl xl:text-8xl lg:text-6xl text-slate-700 mb-3"
                >
                  Solving the problem
                </h2>
                <p data-aos="zoom-out-up">Nothing is impossible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
