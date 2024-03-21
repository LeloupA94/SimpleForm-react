import React, { useState } from "react";
import StepTwo from "./StepTwo";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showErreur, setShowErreur] = useState(false);
  const [passwordPaspareil, setPasswordPaspareil] = useState(false);
  const [formData, setFormData] = useState(null); // État pour stocker les données du formulaire validé

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 8) {
      setShowErreur(true);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      setPasswordPaspareil(true);
      return;
    }

    // Stockage des données du formulaire dans l'état formData
    setFormData({
      username: username,
      email: email,
      password: password,
    });

    // Réinitialisation des champs du formulaire
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
    setShowErreur(false);
    setPasswordPaspareil(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Fonction pour afficher à nouveau le formulaire avec les informations pré-remplies
  const handleModify = () => {
    setFormData(null); // Réinitialiser les données du formulaire
  };

  return (
    <div>
      {/* Affichage des informations du formulaire validé */}
      {formData ? (
        <StepTwo formData={formData} onModify={handleModify} />
      ) : (
        // Affichage du formulaire
        <form onSubmit={handleSubmit}>
          <span>Name</span>
          <input
            value={username}
            type="text"
            name="username"
            placeholder="Your Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
          <span>Email</span>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleEmailChange}
          ></input>
          <span>Password (8 characters mini)</span>
          <div>
            <input
              value={password}
              type="password"
              name="password"
              placeholder="Your password"
              onChange={(event) => {
                setPassword(event.target.value);
                setPasswordPaspareil(false); // Réinitialiser l'état lorsque le mot de passe est modifié
              }}
            ></input>
          </div>
          <span>Confirm Password</span>
          <div>
            <input
              value={confirmPassword}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
            {passwordPaspareil && (
              <p className="twowrongpass">
                <i className="fa-solid fa-triangle-exclamation"></i>
                Les mots de passe ne sont pas identiques.
              </p>
            )}
          </div>
          <div>
            <input
              className="submit-btn"
              type="submit"
              value="Register"
            ></input>
            {showErreur && (
              <div className="errorpass">
                <p>
                  <i className="fa-solid fa-triangle-exclamation"></i> Mot de
                  passe inférieur à 8 caractères{" "}
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </p>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
