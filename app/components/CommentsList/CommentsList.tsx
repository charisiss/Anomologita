import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import classes from "./CommentsList.module.css";
import gClasses from "../../styles/global.module.css";
import CommentContext from "../../store/Comments-Context";

const list = [
  "test1",
  "test3333333333333333333333333333333333333",
  "test4",
  "test5",
  "test6",
  "test7",
];

const CommentsList = () => {
  const [commentsList, setCommentsList] = useState();
  const ctx = useContext(CommentContext);

  const [comments, setComments] = useState(ctx.getComments("onWait"));

  useEffect(() => {
    console.log(ctx.getComments("onWait"));
    // .then((value) => value.map((sad) => console.log("s")));
  }, []);

  return (
    <div className={classes.main}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 8, sm: 8, md: 16 }}
      >
        {Array.from(list).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div className={`${classes.card} ${gClasses.card}`}>
              <h5>#{list.length - index}</h5>
              <p>{item}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CommentsList;
