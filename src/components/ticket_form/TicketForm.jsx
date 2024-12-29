//Component & hook import
import { Form, Formik } from "formik";

//Image import
import infoIcon from "../../assets/images/icon-info.svg";
import { useDataUser } from "./ticketContext.jsx";
import { useNavigate } from "react-router";
import validationSchema from "./schemas.js";

function TicketForm() {
  const navigate = useNavigate();

  const { handleUpdate, image, handleImageChange } = useDataUser();

  const handleFormikChange = (e, handleChange) => {
    handleChange(e);
    handleUpdate(e.target.name, e.target.value);
  };

  const handleSubmit = () => {
    navigate("confirmation");
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="xl:w-[50vw] 2xl:w-[70vw]">
        <h1 className="pb-2 text-center text-lg font-bold leading-tight mobile-md:text-2xl md:text-3xl lg:text-3xl">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="pb-4 text-center text-sm text-neutral-400 lg:pb-10 mobile-md:text-base">
          Secure your spot at next year's biggest coding conference.
        </p>
      </section>

      <section className="w-full">
        <Formik
          initialValues={{
            avatar: "",
            fullName: "",
            email: "",
            github: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, handleBlur, handleChange, touched, errors }) => {
            return (
              <Form className="small-height:grid-rows- flex flex-col gap-4 xl:gap-5 mobile-md:gap-6 small-height:grid small-height:grid-cols-2">
                <section className="w-full pb-4 lg:pb-0 mobile-md:pb-8 small-height:row-span-3">
                  <label>
                    <div className="flex justify-between pr-1">
                      <p className="pb-1 text-sm text-neutral-300">
                        Upload Avatar
                      </p>
                      {errors.avatar && touched.avatar ? (
                        <div className="text-sm text-red-400">
                          {errors.avatar}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex h-28 w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-500 border-white/20 bg-white/10 shadow-lg backdrop-blur-sm xl:h-36 mobile-md:h-36 small-height:h-52">
                      <img
                        className="bg-gray/10 h-14 w-14 rounded-xl border border-gray-500 backdrop-blur-sm"
                        src={image}
                        alt=""
                      />
                      <p className="text-base text-neutral-300 mobile-md:text-lg small-height:text-center">
                        Drag and drop or click to upload
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={infoIcon} alt="" />
                      <p className="text-[10px] text-[#adb5bd] mobile-md:text-[12px]">
                        Upload your photo (JPG or PNG, max size: 500KB).
                      </p>
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
                    ) : null}
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
                    ) : null}
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
                    ) : null}
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

                <button
                  type="submit"
                  className="row-auto rounded-lg bg-orange-700 p-2 small-height:col-span-2 small-height:h-12"
                >
                  Generate My Ticket
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </main>
  );
}

export default TicketForm;
