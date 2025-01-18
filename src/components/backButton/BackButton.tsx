import { useNavigate } from "@tanstack/react-router";

import styles from "./BackButton.module.css";

export default function BackButton() {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate({ to: "/" });
  }
  return (
    <div className={styles.backButton} onClick={handleBackClick}>
      <img src="assets/backButton.svg" alt="" />
    </div>
  );
}
