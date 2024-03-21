import React, { useState, useEffect } from "react";

const StepTwo = ({ formData, onModify }) => {
  const [username, setUsername] = useState(formData.username);
  const [email, setEmail] = useState(formData.email);
  const [password, setPassword] = useState(formData.password);

  useEffect(() => {
    // Mettre à jour les états avec les données du formulaire principal lorsqu'il est monté
    setUsername(formData.username);
    setEmail(formData.email);
    setPassword(formData.password);
  }, [formData]);

  const handleModify = () => {
    onModify(); // Appeler la fonction onModify pour retourner au formulaire principal
  };

  return (
    <div className="resultat">
      <div>
        <h2>Informations du formulaire</h2>
        <p>
          <span>Name :</span> {formData.username}
        </p>
        <p>
          <span>Email :</span> {formData.email}
        </p>
        <p>
          <span>Password :</span> {formData.password}
        </p>
      </div>
      <button className="editBtn" onClick={handleModify}>
        Modifier les informations
      </button>
    </div>
  );
};

export default StepTwo;
