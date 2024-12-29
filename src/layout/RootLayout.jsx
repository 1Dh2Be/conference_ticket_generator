import { Outlet } from "react-router";

//Logo import
import webLogo from "../assets/images/logo-full.svg";

const RootLayout = () => {
  return (
    <div className="h-screen bg-bgMobile bg-cover bg-no-repeat">
      <div className="h-screen bg-patternLines bg-cover bg-no-repeat">
        <header className="mx-auto flex w-5/6 items-center justify-center mobile-md:pb-8 mobile-md:pt-6 pb-6 pt-3 lg:pb-4 xl:pb-6 2xl:pb-36">
          <div>
            <img src={webLogo} alt="Website logo" />
          </div>
        </header>
        <section className="mx-auto w-[90%] md:w-[60%] xl:w-[30%] 2xl:w-[25%]">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default RootLayout;
