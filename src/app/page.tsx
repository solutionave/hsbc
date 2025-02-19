"use client";
import React, { useContext, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/slices/userSlice";
import { useRouter } from "next/navigation";
import { userData } from "@/app/data/userData";
import InputField from "@/components/InputField";

const page = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Find the user matching the entered credentials
    const user = userData.find(
      (user) => user.username === username1 && user.password === password1
    );

    if (user) {
      setErrorMessage("");
      dispatch(
        setUserData({
          name: user.name,
          username: user.username,
          email: user.email,
          isAuthenticated: true,
          kundennummer: user.kundennummer,
          geburtstag: user.geburtstag,
          risikoklasse: user.risikoklasse,
          steuerstatus: user.steuerstatus,
          steuernummer: user.steuernummer,
          berufsgruppe: user.berufsgruppe,
          branche: user.branche,
          beruf: user.beruf,
          stammadresse: user.stammadresse,
          telefon: user.telefon,
          mobilfunk: user.mobilfunk,
          geschaeftskontakt: user.geschaeftskontakt,
        })
      );
      router.push("/Dashboard"); // Change to routing method if using React Router
    } else {
      setErrorMessage("Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-between p-10 w-full max-w-md mx-auto bg">
        {/* Modal header */}
        <h2 className="text-3xl font-bold text-[#3e515c]">
          Login
        </h2>

        {/* Login form */}
        <form
          className="py-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <InputField
              type="text"
              name="username"
              placeholder="Customer No. / User Name"
              value={username1}
              onChange={(e) => setUsername1(e.target.value)}
              className="text-xl font-semibold py-7"
            />
          </div>
          <div>
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              className="text-xl font-semibold py-7"
            />
          </div>

          {/* Error message */}
          {errorMessage && (
            <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
          )}

          {/* Forgot password link */}
          <p className="mt-4 text-sm text-[#3e515c] font-semibold">
            Password forgotten or locked?
          </p>

          {/* Session-TAN option */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              id="session-tan"
              name="session-tan"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="session-tan"
              className="flex flex-row justify-center items-center text-sm text-[#3e515c]"
            >
              Use session TAN
              <span className="text-[#3e515c] px-2">
                <IoInformationCircleOutline height={30} width={30} />
              </span>
            </label>
          </div>

          <div>
            {userData.some(
              (user) =>
                user.username === username1 && user.password === password1
            ) ? (
              <>
                {/* Login button */}
                <button
                  type="submit"
                  className="w-full bg-[#3e515c] text-white font-bold py-2 px-4 border[#374753] transition-all mt-5"
                >
                  Log in
                </button>
              </>
            ) : (
              <button
                type="button"
                className="w-full bg-[#3e515c] text-white font-bold py-2 px-4 border[#374753] transition-all mt-5 cursor-not-allowed opacity-50"
                onClick={() =>
                  alert(
                    "Ungültige Anmeldedaten. Bitte geben Sie die richtigen Daten ein."
                  )
                }
              >
                Log in
              </button>
            )}
          </div>
        </form>
        <button className="w-full text-red-500 font-bold py-2 px-4 transition-all border-[0.5px] border-red-500 mb-10">
          Open a custody account
        </button>
      </div>

    </div>
  )
}

export default page

