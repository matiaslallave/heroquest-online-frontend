import {
  Button,
  Grid,
  Input,
  Paper,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useState } from "react";
import { useStyles } from "./style";
import { useHistory } from "react-router";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import { useTranslation } from "react-i18next";

function Body() {
  const classes = useStyles();
  const history = useHistory();
  const [t] = useTranslation("global");
  const numPlayersArr = [1, 2, 3, 4];
  const [numPlayers, setNumPlayers] = useState(1);
  const [blankError, setBlankError] = useState(false);
  const [fileName, setFileName] = useState("No file selected");
  const [fileImg, setFileImg] = useState();
  const [radioValue, setRadioValue] = useState("default");

  const handleChange = (e) => {
    setNumPlayers(e.target.value);
  };

  const handleClickBack = () => {
    history.push("/");
  };

  const handleGameSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      console.log(e.target);
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("sessionToken")}`,
        },
        body: new FormData(e.target),
      };
      fetch("http://localhost:4567/game", options).then((r) => {
        r.status === 200 ? console.log("ok") : console.log("KO");
      });
    } else {
      setBlankError(true);
    }
  };

  const handleGameNameChange = (e) => {
    if (e.target.value.length > 0) setBlankError(false);
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files[0].name);
    setFileImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <Paper elevation={3} className={classes.baseTextBlock}>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item xs={12} align="center" className={classes.margin}>
          <Typography variant="h3" color="primary">
            {t("create-game.title")}
          </Typography>
        </Grid>
        <div className={classes.formBackgr}>
          <Typography
            variant="h5"
            color="secondary"
            className={classes.marginForm}
          >
            {t("create-game.opt")}
          </Typography>
          <form
            onSubmit={handleGameSubmit}
            autoComplete="off"
            noValidate
            className={classes.formCont}
          >
            <div className={classes.formSubCont}>
              <TextField
                error={blankError}
                name="gameName"
                label={t("create-game.gn")}
                color="secondary"
                type="text"
                inputProps={{ required: true, maxLength: 35 }}
                variant="outlined"
                className={classes.marginForm}
                helperText={blankError ? t("create-game.gnerror") : ""}
                onChange={handleGameNameChange}
              ></TextField>
              <TextField
                name="maxPlayers"
                select
                label={t("create-game.maxplyr")}
                color="secondary"
                value={numPlayers}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
                helperText={t("create-game.warning")}
                variant="outlined"
                className={classes.marginForm}
              >
                {numPlayersArr.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              <div className={classes.radioBlock}>
                <FormControl
                  component="fieldset"
                  className={classes.marginForm}
                >
                  <FormLabel component="legend" color="secondary">
                  {t("create-game.board")}
                  </FormLabel>
                  <RadioGroup
                    aria-label={t("create-game.board")}
                    name="table"
                    value={radioValue}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="default"
                      control={<Radio />}
                      label={t("create-game.default")}
                    />
                    <FormControlLabel
                      value="custom"
                      control={<Radio />}
                      label={t("create-game.custom")}
                    />
                  </RadioGroup>
                </FormControl>

                {radioValue === "custom" ? (
                  <React.Fragment>
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      name="board"
                    />

                    <InputLabel
                      htmlFor="contained-button-file"
                      className={classes.inputFormat}
                    >
                      <Button
                        variant="contained"
                        component="span"
                        color="primary"
                      >
                        <PublishIcon></PublishIcon>
                        <Typography style={{ marginLeft: "0.3rem" }}>
                          {t("create-game.upload")}
                        </Typography>
                      </Button>
                      <Typography className={classes.marginInput}>
                        {fileName}
                      </Typography>
                      <img src={fileImg} className={classes.fileImg} alt="" />
                    </InputLabel>
                  </React.Fragment>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.marginForm}
            >
              {t("create-game.submit")}
            </Button>
          </form>
        </div>
        <Grid item xs={12} align="center" className={classes.margin}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={handleClickBack}
          >
            <Typography variant="h5">{t("create-game.back")}</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Body;
