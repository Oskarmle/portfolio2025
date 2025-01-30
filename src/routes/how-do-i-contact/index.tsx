import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import Button from "../../components/button/Button";
import BackButton from "../../components/backButton/BackButton";
import Contact from "../../components/contact/Contact";

import styles from "./how-do-i-contact.module.css";

export const Route = createFileRoute("/how-do-i-contact/")({
  component: RouteComponent,
});

type FormValues = {
  name: string;
  email: string;
  message: string;
};

function RouteComponent() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button text="How do I contact?" variant="noClick"></Button>
      </div>
      <BackButton></BackButton>
      <div className={styles.contactContainer}>
        <h1>Contact me here</h1>
        <p>Any questions are welcome!</p>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            id="name"
            className={styles.input}
            placeholder="Your name here"
            {...register("name", {
              required: "Your name is required",
            })}
          />
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Your email here"
            {...register("email", {
              required: "Your email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
          />
          <input
            type="message"
            id="message"
            className={styles.message}
            placeholder="Question or comment here"
            {...register("message", {
              required: "This field is required",
            })}
          />
          <div className={styles.sendContainer}>
            <Button text="Send" type="submit" variant="send"></Button>
          </div>
        </form>
        <div className={styles.altContactContainer}>
          <p>You can also contact me with mail or phone</p>
          <Contact method="+45 42 76 29 49" type="phone"></Contact>
          <Contact method="omle.eriksen@gmail.com" type="email"></Contact>
        </div>
      </div>
    </div>
  );
}
