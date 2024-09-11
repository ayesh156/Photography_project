import {useState} from "react";
import {
    TextField,
} from "@mui/material";
import {X} from "lucide-react";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Formik} from "formik";
import * as yup from "yup";

const phoneRegExp = '^(?:0|94|\\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$';

const userSchema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phone: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    comment: yup.string().required("required"),
});

const EmailModal = ({open, onClose}) => {

    const [toastMsg, setToastMsg] = useState("");
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        comment: "",
    };

    // Form submit handler
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);

        axios
            .post(`http://localhost:3001/api`, values) // Send form data via POST request
            .then((response) => {
                if (response.data.status === 1) {
                    // Show success toast notification
                    toast.success(response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                } else {
                    setToastMsg(response.data.message);
                }
            })
            .catch((error) => {
                setToastMsg(error)
            })
            .finally(function () {
                resetForm();
            });
        if (toastMsg !== "") {
            toast.error(toastMsg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    };

    return (
        // Modal wrapper with fade-in/out effect based on `open` prop
        <div
            className={`fixed inset-0 flex justify-center items-center z-50 transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <ToastContainer/>
            <div onClick={(e) => e.stopPropagation()}
                 className={`shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                {/* Modal content */}
                <div
                    className="relative h-[580px] lg:h-[580px] mx-2 lg:mx-0 lg:w-[900px] w-[320px] flex flex-col items-center bg-secondary-green py-6 px-6 lg:px-0">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-transparent hover:text-red-600 transition">
                        <X/>
                    </button>

                    <h1 className="text-3xl lg:text-4xl mb-7 pt-4 lg:pt-2">Contact Us</h1>  {/* Modal title */}
                    {/* Formik form setup */}
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        validationSchema={userSchema}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleBlur,
                              handleChange,
                              handleSubmit,
                              setFieldValue,
                              isValid,
                          }) => (
                            <form onSubmit={handleSubmit}
                                  className="flex flex-col items-center space-y-10 lg:space-y-8">
                                <TextField type="text" placeholder="Name" sx={{
                                    "& .MuiInputBase-input": {
                                        fontFamily: "Cormorant", // Change to your desired font family
                                        fontSize: "26px", // Custom font color
                                        lineHeight: "1.5", // Custom line height
                                        padding: "8px 16px", // Custom padding (top-bottom, left-right)
                                        backgroundColor: "white", // Set background color to white

                                    },
                                    "& .MuiInputLabel-root": {
                                        fontFamily: "Cormorant", // Change label font family
                                        fontSize: "26px",
                                    },
                                    "& .MuiFormHelperText-root": {
                                        position: "absolute", // Position error text absolutely
                                        bottom: "-24px", // Position the error text below the input field
                                        left: "0", // Align error text with the left of the input
                                        fontSize: "14px", // Custom font size for error text
                                        color: "red", // Set error text color to red
                                    },
                                }}
                                           className="lg:w-[702px] w-full"
                                           value={values.name}
                                           name="name"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           error={!!touched.name && !!errors.name}
                                           helperText={touched.name && errors.name}
                                />


                                <TextField type="email" placeholder="Email" sx={{
                                    "& .MuiInputBase-input": {
                                        fontFamily: "Cormorant", // Change to your desired font family
                                        fontSize: "26px", // Custom font color
                                        lineHeight: "1.5", // Custom line height
                                        padding: "8px 16px", // Custom padding (top-bottom, left-right)
                                        backgroundColor: "white", // Set background color to white
                                    },
                                    "& .MuiInputLabel-root": {
                                        fontFamily: "Cormorant", // Change label font family
                                        fontSize: "26px",
                                    },
                                    "& .MuiFormHelperText-root": {
                                        position: "absolute", // Position error text absolutely
                                        bottom: "-24px", // Position the error text below the input field
                                        left: "0", // Align error text with the left of the input
                                        fontSize: "14px", // Custom font size for error text
                                        color: "red", // Set error text color to red
                                    },
                                }}
                                           className="lg:w-[702px] w-full"
                                           value={values.email}
                                           name="email"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           error={!!touched.email && !!errors.email}
                                           helperText={touched.email && errors.email}
                                />

                                <TextField type="text" placeholder="Phone" sx={{
                                    "& .MuiInputBase-input": {
                                        fontFamily: "Cormorant", // Change to your desired font family
                                        fontSize: "26px", // Custom font color
                                        lineHeight: "1.5", // Custom line height
                                        padding: "8px 16px", // Custom padding (top-bottom, left-right)
                                        backgroundColor: "white", // Set background color to white
                                    },
                                    "& .MuiInputLabel-root": {
                                        fontFamily: "Cormorant", // Change label font family
                                        fontSize: "26px",
                                    },
                                    "& .MuiFormHelperText-root": {
                                        position: "absolute", // Position error text absolutely
                                        bottom: "-24px", // Position the error text below the input field
                                        left: "0", // Align error text with the left of the input
                                        fontSize: "14px", // Custom font size for error text
                                        color: "red", // Set error text color to red
                                    },
                                }}
                                           className="lg:w-[702px] w-full"
                                           value={values.phone}
                                           name="phone"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           error={!!touched.phone && !!errors.phone}
                                           helperText={touched.phone && errors.phone}
                                />
                                <TextField placeholder="Comment or Question" rows={2} sx={{
                                    "& .MuiInputBase-input": {
                                        fontFamily: "Cormorant", // Change to your desired font family
                                        fontSize: "26px", // Custom font color
                                        lineHeight: "1.5", // Custom line height
                                        padding: "8px 16px", // Custom padding (top-bottom, left-right)
                                        backgroundColor: "white", // Set background color to white
                                    },
                                    "& .MuiInputLabel-root": {
                                        fontFamily: "Cormorant", // Change label font family
                                        fontSize: "26px",
                                    },
                                    "& .MuiInputBase-root": {
                                        margin: 0, // Remove outer margin
                                        padding: 0, // Remove outer padding
                                        border: "none", // Remove outer border
                                    },
                                    "& .MuiFormHelperText-root": {
                                        position: "absolute", // Position error text absolutely
                                        bottom: "-24px", // Position the error text below the input field
                                        left: "0", // Align error text with the left of the input
                                        fontSize: "14px", // Custom font size for error text
                                        color: "red", // Set error text color to red
                                    },
                                }}
                                           className="lg:w-[702px] w-full"
                                           multiline
                                           value={values.comment}
                                           name="comment"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           error={!!touched.comment && !!errors.comment}
                                           helperText={touched.comment && errors.comment}
                                />
                                <div className="w-full flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-transparent border-2 border-white text-white lg:text-[26px] px-4 text-[16px] lg:py-1 h-9 lg:h-[50px] lg:w-[150px] hover:bg-white hover:text-black transition">Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );

}

export default EmailModal;