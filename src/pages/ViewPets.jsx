import React, { useState } from 'react';

import PetList from '../components/PetList';

function initialisePetsList()
{
  const myPets = [
    { name: 'Matcha', species: 'Cat', id: 1 },
    { name: 'Cleo', species: 'Cat', id: 2 }
  ];
  return myPets;
}

export default function ViewPets() {
  const [pets, setPets] = useState(initialisePetsList);

  const handleAddPet = (newPet) => {
    const newPetList = [...pets, newPet];
    setPets(newPetList);
  };


  return (
    <>
      <h1>Your Pets:</h1>

      <main className="container">
        <PetList
          pets={pets}
        />
        {/* <AddPet onAddPet={handleAddPet} /> */}
      </main>
    </>
  );
}
