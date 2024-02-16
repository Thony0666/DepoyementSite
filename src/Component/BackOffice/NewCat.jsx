import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function NameSelector() {
  const [selectedName, setSelectedName] = useState(""); // État pour stocker le nom sélectionné
  const [modifiedName, setModifiedName] = useState(""); // État pour stocker le nom modifié
  const [isEditing, setIsEditing] = useState(false); // État pour suivre si l'édition est en cours

  // Fonction pour gérer la modification du nom sélectionné
  const handleModify = () => {
    setIsEditing(true); // Active le mode édition
    setModifiedName(selectedName); // Initialise l'input avec le nom sélectionné
  };

  // Fonction pour enregistrer le nom modifié
  const handleSave = () => {
    setIsEditing(false); // Désactive le mode édition
    setSelectedName(modifiedName); // Met à jour le nom sélectionné avec le nom modifié
  };

  return (
    <div>
      <Select
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
        displayEmpty
      >
        <MenuItem value="" disabled>
          Sélectionnez un nom
        </MenuItem>
        <MenuItem value="name1">Nom 1</MenuItem>
        <MenuItem value="name2">Nom 2</MenuItem>
        <MenuItem value="name3">Nom 3</MenuItem>
        {/* Ajoutez autant d'options que nécessaire */}
      </Select>
      {!isEditing ? (
        <Button variant="contained" onClick={handleModify}>Modifier</Button>
      ) : (
        <div>
          <TextField
            label="Nom modifié"
            value={modifiedName}
            onChange={(e) => setModifiedName(e.target.value)}
          />
          <Button variant="contained" onClick={handleSave}>Enregistrer</Button>
        </div>
      )}
    </div>
  );
}

export default NameSelector;
