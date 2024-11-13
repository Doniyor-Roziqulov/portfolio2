import contactimg from "../../images/contact.webp";
import { PatternFormat } from "react-number-format";

const BOT_TOKEN = "7581349013:AAE7C72Z9lQqeObyQjHhHlC21_c5zB38v0c";
const USER_ID = "6227525533";

//  https://api.telegram.org/bot7581349013:AAE7C72Z9lQqeObyQjHhHlC21_c5zB38v0c/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Contacts = () => {
  const handleCreate = (e: any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());
    let text = "";
    text += `Ism: <b>${
      // @ts-ignore
      data.name.charAt(0).toUpperCase() + data.name.slice(1)
    }</b> %0A%0A`;
    text += `<b>Email:</b> ${data.email} %0A`;
    text += `<b>Tel number: </b>${data.number} %0A`;
    text += `<b>Xabar:</b> <i>${
      // @ts-ignore
      data.message.charAt(0).toUpperCase() + data.message.slice(1)
    }</i>`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

  return (
    <section className="py-24 lg:py-20 bg-[#1d2b3a] relative">
      <p className="text-[80px] xl:text-[200px] text-skills text-slate-800 min-[730px]:text-[130px] font-semibold absolute top-[-30px] lg:top-[-60px] pointer-events-none lg:left-[200px]">
        Contact
      </p>
      <div className="mx-auto container px-4 lg:px-14">
        <div className="grid lg:grid-cols-2 items-center gap-x-3">
          <div>
            <form
              onSubmit={handleCreate}
              className="flex flex-col gap-y-7 w-full min-[640px]:w-[400px] min-[730px]:w-[500px] mx-auto lg:w-[350px] xl:w-[500px]"
              action=""
            >
              <div className="w-full input__box">
                <input
                  autoComplete="off"
                  required
                  className="border w-full input_me pl-2 border-[#ffffff40] py-3 outline-none text-white bg-[#1d2b3a]"
                  type="text"
                  name="name"
                />
                <span>Your name:</span>
              </div>
              <div className="w-full input__box">
                <input
                  autoComplete="off"
                  required
                  className="border w-full input_me pl-2 border-[#ffffff40] py-3 outline-none text-white bg-[#1d2b3a]"
                  type="email"
                  name="email"
                />
                <span>Your email:</span>
              </div>
              <div className="w-full input__box">
                <PatternFormat
                  name="number"
                  className="border w-full input_me pl-2 border-[#ffffff40] py-3 outline-none text-white bg-[#1d2b3a]"
                  format="+998 (##) ### ## ##"
                  allowEmptyFormatting
                  mask=" "
                />
                <span>Your phone number:</span>
              </div>
              <div className="w-full input__box">
                <textarea
                  autoComplete="off"
                  required
                  className="border min-h-[150px] w-full input_me pl-2 border-[#ffffff40] pt-3 outline-none text-white bg-[#1d2b3a]"
                  name="message"
                  id=""
                ></textarea>
                <span>Your message:</span>
              </div>
              <button className="text-[#1d2b3a] py-3 font-semibold hover:bg-[#283b4f] hover:text-[#ffffff40] transition-all border-[#ffffff40] border bg-[#ffffff40]">
                SUBMIT
              </button>
            </form>
          </div>
          <div>
            <img
              className="animate-pulse hidden lg:block w-[600px]"
              src={contactimg}
              alt="contact photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
