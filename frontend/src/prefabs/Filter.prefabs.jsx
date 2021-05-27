/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import countries from "../utils/countries";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    inputRoot: {
      backgroundColor: "white",
    },
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
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
            variant="filled"
            label="Countries"
            placeholder="Type Here..."
          />
        )}
      />
    </div>
  );
}
