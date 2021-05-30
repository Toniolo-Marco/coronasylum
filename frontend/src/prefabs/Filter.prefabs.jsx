/* eslint-disable no-use-before-define */
import { React, Col, Row } from "../index.import";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import FormLabel from "@material-ui/core/FormLabel";

import countries from "../utils/countries";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "rgba(0,0,0,0)",
    padding: "20px",
    borderRadius: "5px",

    "& > * .MuiInput-underline:after": {
      borderBottomColor: "#007bff",
    },

    "& > * > .MuiAutocomplete-root": {
      width: "100%",
      borderBottomColor: "#b0b0b0",
      marginTop: "auto",
      marginBottom: "auto",
    },

    "& > * > * > * > .MuiFormLabel-root": {
      color: "white",
    },

    "& > * > * > * > * > .MuiChip-root": {
      backgroundColor: "#007bfc",
      color: "white",
    },
    "& > * > * > * > * > * > .MuiSvgIcon-root": {
      color: "white",
    },

    "& > * > * > * > * > .MuiInputBase-input": {
      color: "white",
    },

    "& > * > * > * > * > * > * > * > .MuiSvgIcon-root": {
      color: "white",
    },

    width: "100%",

    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
  inputRoot: {
    backgroundColor: "blue",
  },
}));

export default function Tags({
  auth,
  listOfCountries,
  setListOfCountries,
  viewCounters,
  setViewCounters,
  viewHistogram,
  setViewHistogram,
  viewChartTotalCases,
  setViewChartTotalCases,
}) {
  const classes = useStyles();

  const handleOptionDisabled = (e) => {
    console.log(listOfCountries);
    if (auth && auth.user && auth.user.tokenId) {
      return false;
    } else if (listOfCountries.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e, v) => {
    setListOfCountries(v.map((el) => el.slug));
  };

  const handleChangeViewCounters = (event) => {
    setViewCounters(event.target.checked);
  };

  const handleChangeViewHistogram = (event) => {
    setViewHistogram(event.target.checked);
  };

  const handleChangeViewChartTotalCases = (event) => {
    setViewChartTotalCases(event.target.checked);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Col xs={6} style={{ display: "flex" }}>
          <Autocomplete
            multiple
            id="tags-standard"
            options={countries}
            getOptionLabel={(option) => option.country}
            onChange={handleChange}
            getOptionDisabled={handleOptionDisabled}
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
        </Col>

        <Col xs={6}>
          <FormControl style={{ width: "100%" }}>
            <FormGroup
              style={{
                display: "inline",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <FormControlLabel
                value="Counters"
                control={
                  <Checkbox
                    checked={viewCounters}
                    color="primary"
                    style={{
                      color: "#007bfc",
                    }}
                    onChange={handleChangeViewCounters}
                  />
                }
                label="Counters"
                labelPlacement="end"
                style={{ color: "white", width: "auto" }}
              />

              <FormControlLabel
                value="Histogram"
                control={
                  <Checkbox
                    checked={viewHistogram}
                    color="primary"
                    style={{ color: "#007bfc" }}
                    onChange={handleChangeViewHistogram}
                  />
                }
                label="Histogram"
                labelPlacement="end"
                style={{ color: "white", width: "auto" }}
              />

              <FormControlLabel
                value="ChartTotalCases"
                control={
                  <Checkbox
                    checked={viewChartTotalCases}
                    color="primary"
                    style={{ color: "#007bfc" }}
                    onChange={handleChangeViewChartTotalCases}
                  />
                }
                label="Chart of Total Cases"
                labelPlacement="end"
                style={{ color: "white", width: "auto" }}
              />
            </FormGroup>
            <FormGroup></FormGroup>
          </FormControl>
        </Col>
      </div>
    </React.Fragment>
  );
}
