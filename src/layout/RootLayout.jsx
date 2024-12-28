import { Outlet } from "react-router"

//Logo import
import webLogo from "../assets/images/logo-full.svg"

const RootLayout = () => {
    return (
            <div className='bg-bgMobile h-screen'>
              <div className="bg-patternLines h-screen">
                <header className='flex justify-center items-center pt-3 mobile-md:pt-6 pb-6 mobile-md:pb-8 xl:pb-6 w-5/6 mx-auto'>
                  <div>
                    <img src={webLogo} alt="Website logo" />
                  </div>
                </header>
                <section className="w-[90%] mx-auto lg:w-[40%] xl:w-[30%] 2xl:w-[25%]">
                  <Outlet/>
                </section>
              </div>
            </div>
    )
}

export default RootLayout