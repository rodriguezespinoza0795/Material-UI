/* eslint-disable react/prop-types */
import React from "react"
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ handleSearch, setInputValue }) => {
    return (
        <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
            <InputLabel>Search</InputLabel>
            <OutlinedInput
                id="search"
                onChange={(e) => setInputValue(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle Search visibility"
                            onClick={handleSearch}
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                label="Search"
            />
        </FormControl>
    )
}

Search.defaultProps = {
    handleSearch: () => { },
};

export default Search