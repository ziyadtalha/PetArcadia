import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

import { useState } from "react";

export default function AddPet({onAddPet})
{

  const initialisePetDetails = () => {
    return( { name: "", species: ""});
  }

  const [petDetails, setPetDetails] = useState(initialisePetDetails);

  const updateDetails = (eventObject) =>
  {
    console.log("called");

    const field = eventObject.target.name;
    const value = eventObject.target.value;

    setPetDetails( (oldDetails) => {
      const newDetails = {...oldDetails};

      newDetails[field] = value;

      return newDetails;
    });
  }

  function validatePetDetails()
  {
    if((petDetails.name !== "") && (petDetails.species !== ""))
    {
      return true;
    }
    return false;
  }

  function handleSubmit(evt)
  {
    evt.preventDefault();

    if(validatePetDetails())
    {
      onAddPet(petDetails);
    }
  }

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          border: 1,
          m: 5,
          p: 3
        }}
        noValidate
        autoComplete="off"
      >

        <TextField id="outlined-basic" label="Pet Name" variant="outlined"
          name="name" value={petDetails.name} onChange={updateDetails}/>

        <br />

        <TextField id="outlined-basic" label="Pet Type" variant="outlined"
          name="species" value={petDetails.species} onChange={updateDetails}
        />
        <br />

        <Button type="submit" variant="outlined">Add</Button>

      </Box>
    </>
  )
}
