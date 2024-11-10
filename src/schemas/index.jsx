import * as Yup from "yup";

export const sginup = Yup.object().shape({
        name:Yup.string().min(5).max(25).matches(/^[A-Za-z ]*$/, 'Please enter valid name').required("Please enter your name"),   
        email:Yup.string().email().required("Please enter your email"),
        password:Yup.string().min(6).required("Please enter your password"),
        confirm_password:Yup.string().oneOf([Yup.ref("password"),null],"password must match"),
})