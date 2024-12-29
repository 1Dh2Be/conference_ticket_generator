//Logo & icon import
import logo from "../../assets/images/logo-mark.svg";
import gitIcon from "../../assets/images/icon-github.svg";

//Component & hook import
import { useDataUser } from "../ticket_form/ticketContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const TicketConfirmation = () => {
  const { userData, image, resetImage } = useDataUser();

  const randomTicketNumberGenerator = () => {
    return Math.floor(Math.random() * 99999) + 10000;
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //     const timeOut = setTimeout(() => {
  //         console.log("resetting local storage & redirecting to form");
  //         localStorage.clear();
  //         resetImage();

  //         navigate("/")
  //     }, 15000);

  //     return () => clearTimeout(timeOut)
  // }, [])

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="pb-7 text-center text-2xl md:text-4xl lg:text-3xl xl:w-[40vw] xl:text-4xl 2xl:text-5xl">
        Congrats,{" "}
        <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">{`${userData.fullName}!`}</span>{" "}
        Your ticket is ready.
      </h1>
      <p className="pb-20 text-center text-base font-normal text-gray-300 md:text-lg 2xl:text-xl">
        We've emailed your ticket to{" "}
        <span className="text-orange-500">{userData.email}</span> and will send
        updates in the run up to the event.
      </p>

      <section className="relative">
        <div className="w-full">
          <img
            className="md:h-52 lg:h-44"
            src="src/assets/images/pattern-ticket.svg"
            alt=""
          />
        </div>
        <div>
          <section className="absolute left-4 top-4 flex items-start gap-4">
            <div>
              <img src={logo} alt="Conference website logo" />
            </div>
            <div className="flex flex-col gap-1 mobile-md:gap-2">
              <h2 className="text-xl leading-none mobile-md:text-2xl">
                Coding Conf
              </h2>
              <span className="text-[11px] text-gray-400 mobile-md:text-xs">
                Jan 31, 2025 / Belgium, Bru
              </span>
            </div>
          </section>

          <section className="text-gray-4 00 absolute right-0 top-1/2 -translate-y-1/2 rotate-90">
            <span className="text-gray-400">{`#${randomTicketNumberGenerator()}`}</span>
          </section>

          <section className="absolute bottom-4 left-4 flex items-center gap-4">
            <div className="h-12 w-12 mobile-md:h-14 mobile-md:w-14">
              <img className="h-full w-full rounded-lg" src={image} alt="" />
            </div>
            <div>
              <h3 className="text-xl">{userData.fullName}</h3>
              <div className="flex items-center gap-2">
                <img src={gitIcon} alt="Github Icon" />
                <div className="text-sm text-gray-400">{userData.github}</div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TicketConfirmation;
