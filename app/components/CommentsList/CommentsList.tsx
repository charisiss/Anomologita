import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import classes from "./CommentsList.module.css";
import gClasses from "../../styles/global.module.css";
import CommentContext from "../../store/Comments-Context";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import commentType from "../../types/CommentType";

type Props = {
  admin: string;
  comments: commentType[];
};

const CommentsList = (props: Props) => {
  const ctx = useContext(CommentContext);

  const handleDelete = (props: string) => {
    ctx.removeComment(props);
    ctx.updateComments("onWait");
  };

  const handleApprove = (props: string) => {
    ctx.approveComment(props);
    ctx.updateComments("onWait");
    ctx.updateComments("approved");
  };

  return (
    <div className={classes.main}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(props.comments).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div className={`${classes.card} ${gClasses.card}`}>
              <h5>#{props.comments.length - index}</h5>
              <p>{item.comment}</p>

              {Boolean(props.admin) && (
                <div className={classes.buttons}>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    aria-label="send"
                    onClick={() => {
                      handleApprove("12");
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </div>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CommentsList;
