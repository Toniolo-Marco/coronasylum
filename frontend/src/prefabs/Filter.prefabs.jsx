/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import countries from "../utils/countries";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0,0,0,0)",
    padding: "20px",
    borderRadius: "5px",

    "& > * > * > * > .MuiChip-root": {
      backgroundColor: "#007bfc",
    },
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
  inputRoot: {
    backgroundColor: "blue",
  },
}));

export default function Tags({ listOfCountries, setListOfCountries }) {
  const classes = useStyles();
  const handleChange = (e, v) => {
    setListOfCountries(v.map((el) => el.slug));
  };

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={countries}
        getOptionLabel={(option) => option.country}
        onChange={handleChange}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Countries"
            placeholder="Type Here..."
          />
        )}
      />
    </div>
  );
}
