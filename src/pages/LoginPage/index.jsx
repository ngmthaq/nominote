import { memo, useEffect, useId, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { firebaseAuth, getAuthenticatedUser } from "@/configs/firebase";
import Loading from "@/components/Common/Loading";
import { isEmail } from "@/helpers/str";
import classes from "./style.module.scss";

const LoginPage = () => {
  const emailInputId = useId();
  const passwordInputId = useId();
  const showPasswordInputId = useId();

  const [form, setForm] = useState({ email: "", password: "", isShowPwd: false });
  const [isLoading, setIsLoading] = useState(false);

  const isEnableSubmit = Boolean(form.email.trim()) && Boolean(form.password.trim());

  const handleChangeInput = (event) => {
    setForm((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const handleChangeCheckbox = (event) => {
    setForm((state) => ({ ...state, isShowPwd: event.target.checked }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!form.email.trim()) {
        alert("Please enter your email");
      } else if (!form.password.trim()) {
        alert("Please enter your password");
      } else if (!isEmail(form.email.trim())) {
        alert("Your email is not valid");
      } else {
        setIsLoading(true);
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, form.email, form.password);
        if (userCredential && userCredential.user) window.location.replace("/_");
        else alert("Your email or password wrong, please try again");
      }
    } catch (error) {
      console.error(error);
      if (error instanceof FirebaseError) alert("Your email or password wrong, please try again");
      else alert("Something is wrong, please try again later");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const middleware = async () => {
      setIsLoading(true);
      const user = await getAuthenticatedUser();
      if (user) window.location.replace("/_");
      else setIsLoading(false);
    };

    middleware();
  }, []);

  return (
    <div className={classes.loginPage}>
      <div className={classes.wrapper}>
        <img src="/icon-512x512.png" alt="logo" />
        <form className="mb-4" onSubmit={handleSubmit}>
          <h3 className="mb-4 text-center">Welcome Back</h3>
          <div className="mb-3">
            <label htmlFor={emailInputId} className="form-label">
              Email Address *
            </label>
            <input
              type="text"
              name="email"
              id={emailInputId}
              className="form-control"
              placeholder="Enter your email here"
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={passwordInputId} className="form-label">
              Password *
            </label>
            <input
              type={form.isShowPwd ? "text" : "password"}
              name="password"
              id={passwordInputId}
              className="form-control"
              placeholder="Enter your password here"
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id={showPasswordInputId}
              onChange={handleChangeCheckbox}
            />
            <label className="form-check-label user-select-none" htmlFor={showPasswordInputId}>
              Show Password
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={!isEnableSubmit}>
            Login
          </button>
        </form>
        <p className="text-secondary">Copyright ©️ 2024 - {new Date().getFullYear()} | ngmthaq</p>
      </div>
      <Loading open={isLoading} />
    </div>
  );
};

export default memo(LoginPage);
