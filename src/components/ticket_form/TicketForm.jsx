
//Component & hook import
import { Form, Formik } from "formik"

//Image import 
import uploadIcon from "../../assets/images/icon-upload.svg"
import infoIcon from "../../assets/images/icon-info.svg"
import { useDataUser } from "./ticketContext.jsx"
import { useNavigate } from "react-router";

function TicketForm() {

  const navigate = useNavigate();

  const {userData, handleUpdate} = useDataUser();

  const handleFormikChange = (e, handleChange) => {

    handleChange(e);
    handleUpdate(e.target.name, e.target.value);

  }

  const handleSubmit = () => {
    navigate("confirmation")
  }

  return (
          <main className="flex flex-col justify-center items-center">
            <section className="w-[70vw]">
              <h1 className="text-4xl text-center font-bold pb-2 leading-tight">Your Journey to Coding Conf 2025 Starts Here!</h1>
              <p className="text-neutral-400 text-center text-base pb-4">Secure your spot at next year's biggest coding conference.</p>
            </section>
          
            <section className="w-full pb-8 lg:pb-6">
              <label>
                <p className="text-neutral-300 pb-1">Upload Avatar</p>
                <div className="flex flex-col justify-center items-center gap-2 w-full h-36 bg-white/10 backdrop-blur-sm border-2 border-white/20 shadow-lg border-gray-500 border-dashed rounded-xl">
                  <img className="w-14 h-14 rounded-xl bg-gray/10 backdrop-blur-sm border border-gray-500" src={uploadIcon} alt="" />
                  <p className="text-neutral-300 text-lg">Drag and drop or click to upload</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={infoIcon} alt="" />
                  <p className="text-[12px] text-[#adb5bd]">Upload your photo (JPG or PNG, max size: 500KB).</p>
                </div>
                <input
                  type="file"
                  hidden={true}
                />
              </label>
            </section>

            <section className="w-full">
              <Formik
                initialValues={{
                  avatar: "",
                  fullName: "",
                  email: "",
                  github: ""
                }}
                onSubmit={handleSubmit}
                >
                {({values, handleBlur, handleChange}) => {
                  return (
                    <Form className="flex flex-col gap-6">
                      <label className="text-base">
                        <p className="pb-1">Full Name</p>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Mimoun Atmani"
                          onBlur={handleBlur}
                          onChange={(e) => handleFormikChange(e, handleChange)}
                        />
                      </label>

                      <label className="text-base">
                        <p className="pb-1">Email Address</p>
                        <input
                          type="email"
                          name="email"
                          placeholder="mimoun@email.com"
                          onBlur={handleBlur}
                          onChange={(e) => handleFormikChange(e, handleChange)}
                        />
                      </label>

                      <label className="text-base">
                        <p className="pb-1">Github Username</p>
                        <input
                          type="text"
                          name="git"
                          placeholder="@mimounatmani007"
                          onBlur={handleBlur}
                          onChange={(e) => handleFormikChange(e, handleChange)}
                        />
                      </label>
                      <button type="submit" className="bg-orange-700 p-2 rounded-lg">Generate My Ticket</button>
                    </Form>
                  )
                }}
              </Formik>

            </section>
          </main>
  )
}

export default TicketForm