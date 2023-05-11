import { StyledEmailForm, StyledOneLineForm } from "./EmailForm.styled";

const EmailForm = () => (
  <StyledEmailForm>
    <h2>Before you go...</h2>
    <p>
      Wondering when my next post is coming? Me too, to be honest. Pop in your
      email address and you&apos;ll be the first to know.
    </p>
    <StyledOneLineForm>
      <input type="email" placeholder="aaron@bbn.digital"></input>
      <button type="submit">Let me know</button>
    </StyledOneLineForm>
  </StyledEmailForm>
);

export default EmailForm;
