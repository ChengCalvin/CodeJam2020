import React, { useState, useEffect } from "react";
import Header from "./Component/Header/Header";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Searchbox from "./Component/Header/Searchbox";
import MenuAppBar from "./Component/Header/MenuAppBar";
import Explanation from "./Component/Header/Explanation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#9AC7BF",
      minHeight: "100vh",
    },
    App: {
      textAlign: "center",
    },
    searchcontent: {
      flexDirection: "column",
      width: "80%",
      marginTop: "2rem",
    },
  })
);

const App = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <MenuAppBar></MenuAppBar>
      <div className={classes.root}>
        <div className={classes.searchcontent}>
          <Explanation></Explanation>
          <Searchbox></Searchbox>
        </div>
      </div>
    </div>
  );
};

export default App;
