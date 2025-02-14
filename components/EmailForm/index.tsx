import { useState } from "react";
import Callout from "../Callout";
import { CalloutVariants } from "../Callout/Callout.styled";
import {
  StyledEmailForm,
  StyledOneLineForm,
  StyledHiddenLabel,
} from "./EmailForm.styled";

enum Statuses {
  INITIAL = "INITIAL",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

const EmailForm = () => {
  const [status, setStatus] = useState<Statuses>(Statuses.INITIAL);
  const [emailAddress, setEmailAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("Something went wrong");

  const isValid = emailAddress.length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(e.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setStatus(Statuses.PENDING);

    const response = await fetch("/api/signUpForEmails", {
      method: "POST",
      body: JSON.stringify({
        email_address: emailAddress,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      setErrorMessage(result.message);
    }
    setStatus(result.success ? Statuses.SUCCESS : Statuses.FAIL);
  };

  return (
    <StyledEmailForm onSubmit={handleSubmit}>
      <h2>Before you go...</h2>
      <p>
        Wondering when my next post is coming? Me too, to be honest. Pop in your
        email address and you&apos;ll be the first to know.
      </p>
      {status === Statuses.SUCCESS ? (
        <Callout variant={CalloutVariants.BLUE}>
          Thanks. Confirm your subscription in your email inbox.
        </Callout>
      ) : (
        <>
          {status == Statuses.FAIL && (
            <Callout variant={CalloutVariants.PINK}>{errorMessage}</Callout>
          )}
          <StyledOneLineForm>
            <StyledHiddenLabel htmlFor="emailAddress">
              Email address:{" "}
            </StyledHiddenLabel>
            <input
              id="emailAddress"
              type="email"
              placeholder="aaron@bbn.digital"
              onChange={handleInputChange}
              disabled={status === Statuses.PENDING}
              autoComplete="email"
            ></input>
            <button
              type="submit"
              disabled={!isValid || status === Statuses.PENDING}
            >
              Let me know
            </button>
          </StyledOneLineForm>
        </>
      )}
    </StyledEmailForm>
  );
};

export default EmailForm;
