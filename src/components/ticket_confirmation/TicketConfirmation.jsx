//Logo & icon import 
import logo from "../../assets/images/logo-mark.svg"
import gitIcon from "../../assets/images/icon-github.svg"
import testImage from "../../assets/images/image-avatar.jpg"


//Component & hook import 
import { useDataUser } from "../ticket_form/ticketContext"

const TicketConfirmation = () => {

    const {userData} = useDataUser();

    return (
        <main>
            <h1 className="text-3xl text-center pb-7 xl:text-5xl xl:w-[40vw]">Congrats, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)]">{`${userData.fullName}!`}</span> Your ticket is ready.</h1>
            <p className="text-center text-base font-normal pb-20">We've emailed your ticket to <span className="text-orange-500">{userData.email}</span> and will send updates in the run up to the event.</p>

            <section className="relative">
                <div>
                    <img src="src/assets/images/pattern-ticket.svg" alt="" />
                </div>
                <div>
                    <section className="absolute top-4 left-4 flex gap-4 items-start">
                        <div>
                            <img src={logo} alt="Conference website logo" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl leading-none">Coding Conf</h2>
                            <span className="text-xs text-gray-400">Jan 31, 2025 / Belgium, Bru</span>
                        </div>
                    </section>

                    <section className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-gray-4 00">
                            <span className="text-gray-400">#01609</span>
                    </section>

                    <section className="absolute left-4 bottom-4 flex items-center gap-4">
                        <div className="w-14 h-14">
                            <img className="rounded-lg" src={testImage} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl">{userData.fullName}</h3>
                            <div className=" flex gap-2 items-center">
                                <img src={gitIcon} alt="Github Icon" />
                                <div className="text-sm text-gray-400">
                                    {userData.git}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default TicketConfirmation