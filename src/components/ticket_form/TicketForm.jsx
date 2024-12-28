
//Component & hook import
import { Form, Formik } from "formik"

//Image import
import infoIcon from "../../assets/images/icon-info.svg"
import { useDataUser } from "./ticketContext.jsx"
import { useNavigate } from "react-router";
import validationSchema from "./schemas.js";

function TicketForm() {

  const navigate = useNavigate();

  const { handleUpdate, image , handleImageChange } = useDataUser();

  const handleFormikChange = (e, handleChange) => {

    handleChange(e);
    handleUpdate(e.target.name, e.target.value);

  };

  const handleSubmit = () => {
    navigate("confirmation")
  };

  return (
          <main className="flex flex-col justify-center items-center">
            <section className="xl:w-[50vw] 2xl:w-[70vw]">
              <h1 className="text-lg mobile-md:text-2xl lg:text-4xl text-center font-bold pb-2 leading-tight">Your Journey to Coding Conf 2025 Starts Here!</h1>
              <p className="text-neutral-400 text-center text-sm mobile-md:text-base pb-4">Secure your spot at next year's biggest coding conference.</p>
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
                validationSchema={validationSchema}
                >
                {({values, handleBlur, handleChange, touched, errors}) => {
                  return (
                    <Form className="flex flex-col gap-4 mobile-md:gap-6 xl:gap-5">

                      <section className="w-full pb-4 mobile-md:pb-8 lg:pb-6 xl:pb-0">
                        <label>
                          <div className="flex justify-between pr-1">
                            <p className="text-sm text-neutral-300 pb-1">Upload Avatar</p>
                            {errors.avatar && touched.avatar ? (
                              <div className="text-red-400">{errors.avatar}</div>
                            ) : (
                              null
                            )}
                          </div>
                          <div className="flex flex-col justify-center items-center gap-2 w-full h-28 mobile-md:h-36 bg-white/10 backdrop-blur-sm border-2 border-white/20 shadow-lg border-gray-500 border-dashed rounded-xl">
                            <img className="w-14 h-14 rounded-xl bg-gray/10 backdrop-blur-sm border border-gray-500" src={image} alt="" />
                            <p className="text-neutral-300 text-base mobile-md:text-lg">Drag and drop or click to upload</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <img src={infoIcon} alt="" />
                            <p className="text-[10px] mobile-md:text-[12px] text-[#adb5bd]">Upload your photo (JPG or PNG, max size: 500KB).</p>
                          </div>
                          <input
                            className={`${errors.avatar && touched.avatar ? "error" : ""}`}
                            type="file"
                            name="avatar"
                            accept="image/jpg, image/png"
                            value={values.avatar}
                            onBlur={handleBlur}
                            onChange={(e) => handleImageChange(e, handleChange)}
                            hidden={true}
                          />
                        </label>
                      </section>

                      <label className="text-sm mobile-md:text-base">
                        <div className="flex justify-between pr-1">
                          <p className="pb-1">Full Name</p>
                          {errors.fullName && touched.fullName ? (
                            <div className="text-red-400">{errors.fullName}</div>
                          ) : (
                            null
                          )}
                        </div>
                        <input
                          className={`${errors.fullName && touched.fullName ? "error" : ""}`}
                          type="text"
                          name="fullName"
                          placeholder="Mimoun Atmani"
                          value={values.fullName}
                          onBlur={handleBlur}
                          onChange={(e) => handleFormikChange(e, handleChange)}
                        />
                      </label>

                      <label className="text-sm mobile-md:text-base">
                        <div className="flex justify-between pr-1">
                          <p className="pb-1">Email Address</p>
                          {errors.email && touched.email ? (
                            <div className="text-red-400">{errors.email}</div>
                          ) : (
                            null
                          )}
                        </div>
                        <input
                          className={`${errors.email && touched.email ? "error" : ""}`}
                          type="email"
                          name="email"
                          placeholder="mimoun@email.com"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={(e) => handleFormikChange(e, handleChange)}
                        />
                      </label>

                      <label className="text-sm mobile-md:text-base">
                        <div className="flex justify-between pr-1">
                          <p className="pb-1">Github Username</p>
                          {errors.github && touched.github ? (
                            <div className="text-red-400">{errors.github}</div>
                          ) : (
                            null
                          )}
                        </div>
                        <input
                          className={`${errors.github && touched.github ? "error" : ""}`}
                          type="text"
                          name="github"
                          placeholder="@mimounatmani007"
                          value={values.github}
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