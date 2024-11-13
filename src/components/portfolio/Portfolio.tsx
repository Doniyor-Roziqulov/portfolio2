import { RxOpenInNewWindow } from "react-icons/rx";
import { lists } from "../../static";

const Portfolio = () => {
  const product = lists.map((e, inx) => (
    <div
      key={inx}
      className="overflow-hidden relative pro_bigdiv border h-[200px] min-[420px]:h-[250px] lg:h-[270px] border-neutral-500 shadow-2xl shadow-black"
    >
      <img
        className="pro__img w-full h-full z-10 object-cover opacity-75"
        src={e.img}
        alt=""
      />
      <div
        className="absolute z-20 top-[60px] lg:top-[100px] flex gap-y-3 left-[70px] xl:left-[150px] min-[420px]:top-[80px] min-[420px]:left-[110px]  min-[510px]:top-[80px] min-[510px]:left-[40px] flex-col items-center pro_div
       min-[680px]:top-[80px] min-[680px]:left-[70px] min-[768px]:top-[90px] min-[768px]:left-[110px] lg:left-[70px]"
      >
        <p className="text-2xl pro__name font-bold text-sky-400">{e.name}</p>
        <a
          className="text-black text-lg items-center flex opacity-0 gap-x-1 bg-sky-400 px-4 py-1 border hover:text-sky-400 hover:border-sky-400 hover:bg-transparent"
          target="_blank"
          key={inx}
          href={e.link}
        >
          <RxOpenInNewWindow />
          View
        </a>
      </div>
    </div>
  ));
  return (
    <section className="pt-[100px] lg:pt-[180px] relative pb-[100px] bg-slate-300">
      <div className="mx-auto container px-4 lg:px-0">
        <p className="text-[80px] lg:text-[150px] pointer-events-none text-skills z-20 text-slate-600 font-semibold absolute top-0 lg:left-[200px] xl:left-[400px]">
          Portfolio
        </p>
        <p className="text-3xl font-semibold my-4 pl-3 pointer-events-none">
          Demo projects:
        </p>
        <div className="grid min-[510px]:grid-cols-2 lg:grid-cols-3 gap-2">
          {product}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
