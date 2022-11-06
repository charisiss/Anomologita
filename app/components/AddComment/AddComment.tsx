import { useContext, useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import classes from "./AddComment.module.css";
import gClasses from "../../styles/global.module.css";
import CommentContext from "../../store/Comments-Context";

type Props = {
  open: boolean;
};

const AddComment = (props: Props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const ctx = useContext(CommentContext);
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault;
    if (textRef.current) {
      if (textRef.current.value == "") return;
      ctx.addComment({ comment: textRef.current.value });
      textRef.current.value = "";
      ctx.updateComments("onWait");
    }
  };

  return (
    <div className={`${classes.main}`}>
      {open && (
        <div className={`${classes.card} ${gClasses.card}`}>
          <h3>Πρόσθεσε Σχόλιο</h3>

          <TextField
            label={"Κείμενο"}
            className={classes.textF}
            inputRef={textRef}
            multiline
          />
          <Button
            variant="contained"
            color="error"
            onClick={(event) => {
              submitHandler(event);
            }}
            className={classes.cardButton}
          >
            Προσθηκη
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddComment;
