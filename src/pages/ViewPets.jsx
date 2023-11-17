import { useState } from 'react';

import { Button } from '@mui/material';

import PetList from '../components/PetList';

import AddPet from '../components/AddPet';

function initialisePetsList()
{
  const myPets = [
    { name: 'Matcha', species: 'Cat', id: 1 },
    { name: 'Cleo', species: 'Dog', id: 2 },
    { name: 'Oreo', species: 'Cat', id: 3 },
  ];
  return myPets;
}

export default function ViewPets() {
  const [pets, setPets] = useState(initialisePetsList);

  const handleAddPet = (newPet) => {
    const newPetList = [...pets, newPet];
    setPets(newPetList);
  };

  const [addPetOption, setAddPetOption] = useState(false);

  const toggleAddPetOption = () => {
    setAddPetOption(!addPetOption);
  }

  return (
    <>
      <h1>Your Pets:</h1>

      <main>

        <PetList pets={pets}/>

        <Button variant="contained" onClick={toggleAddPetOption}>Add New Pet</Button>

        {addPetOption ? <AddPet onAddPet={handleAddPet} /> : null}

      </main>

    </>
  );
}
