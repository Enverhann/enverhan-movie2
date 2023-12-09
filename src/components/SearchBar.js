import React, { useState } from "react";
import { Box,Stack,IconButton,Button,ButtonGroup, ToggleButton, ToggleButtonGroup,TextField, InputAdornment  } from "@mui/material";

const SearchBar = ({onSearch}) => {
const[term,setTerm]=useState('')

const handleChange = event => {
    setTerm(event.target.value)
}

const handleSubmit = event => {
    event.preventDefault()
    onSearch(term)
}
    return ( 
        <Box variant="contained">
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction='row' sx={{ margin: '16px' }}>
                    <TextField type="text" label="Search for movies" variant="outlined" value={term} onChange={handleChange} size="small" sx={{width:'300px'}} />
                    <Button type="submit" variant="contained" color="secondary" size="medium">Search</Button>
                </Stack>
            </form>
        </Box>
     );
}
 
export default SearchBar;