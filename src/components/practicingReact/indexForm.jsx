import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("fullname is required !"),
    email: yup.string().email().required("email required !"),
    age: yup.number().positive().integer().min(18).required("age required !"),
    password: yup.string().min(4).max(16).required("password required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null, "your password is not matching"])
      .required("Please confirm your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        id="justform"
        name="Just Form"
        className="mx-auto my-10 bg-blue-400 text-black-50 p-10 rounded shadow-2xl text-sm w-[400px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-xl text-center">
          A Simple Working Form -
          <span className="text-slate-200"> ReactJS</span>{" "}
        </h1>
        <div className="mt-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="name"
          >
            Name :
          </label>
          <input
            id="name"
            className="rounded-md p-2 text-black w-[310px] focus:outline-none"
            type="text"
            placeholder="Enter Full Name"
            {...register("fullName")}
          />
          <p className="text-red-700 mt-2">{errors.fullName?.message}</p>
        </div>
        <div className="mt-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="email"
          >
            Email :
          </label>
          <input
            id="email"
            className="rounded-md p-2 text-black w-[310px] focus:outline-none"
            type="text"
            placeholder="Enter Email"
            {...register("email")}
          />
          <p className="text-red-700 mt-2">{errors.email?.message}</p>
        </div>
        <div className="mt-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="age"
          >
            Age :
          </label>
          <input
            id="age"
            className="rounded-md p-2 text-black w-[310px] focus:outline-none"
            type="number"
            placeholder="Enter your Age"
            {...register("age")}
          />
          <p className="text-red-700 mt-2">{errors.age?.message}</p>
        </div>
        <div className="mt-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="password"
          >
            Password :
          </label>
          <input
            id="password"
            className="rounded-md p-2 text-black w-[310px] focus:outline-none"
            type="password"
            placeholder="Create a password"
            {...register("password")}
          />
          <p className="text-red-700 mt-2">{errors.password?.message}</p>
        </div>
        <div className="mt-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="Repassword"
          >
            Re-enter :
          </label>
          <input
            id="Repassword"
            className="rounded-md p-2 text-black w-[310px] focus:outline-none"
            type="password"
            placeholder="Confirm the password"
            {...register("confirmPassword")}
          />
          <p className="text-red-700 mt-2">{errors.confirmPassword?.message}</p>
        </div>
        <input className="border-2 p-2 mt-5 hover:bg-blue-500" type="submit" />
      </form>
    </>
  );
};
