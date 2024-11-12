import { RxOpenInNewWindow } from "react-icons/rx";
import { lists } from "../../static";

const Portfolio = () => {
  const product = lists.map((e, inx) => (
    <div
      key={inx}
      className="overflow-hidden relative pro_bigdiv border h-[270px] border-neutral-500 shadow-2xl shadow-black"
    >
      <img
        className="pro__img w-full h-full z-10 object-cover opacity-75"
        src={e.img}
        alt=""
      />
      <div className="absolute z-20 top-[100px] flex gap-y-3 left-[150px] flex-col items-center pro_div">
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
    <section className="pt-[180px] relative pb-[100px] bg-slate-300">
      <div className="mx-auto container">
        <p className="text-[150px] pointer-events-none text-skills z-20 text-slate-600 font-semibold absolute top-0 left-[400px]">
          Portfolio
        </p>
        <p className="text-3xl font-semibold my-4 pl-3 pointer-events-none">
          Demo projects:
        </p>
        <div className="grid grid-cols-3 gap-2">{product}</div>
      </div>
    </section>
  );
};

export default Portfolio;
