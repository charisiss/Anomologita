import { TextField } from "@mui/material";
import classes from "./AddComment.module.css"
import gClasses from "../../styles/global.module.css"

const AddComment = () => {
    return <div className={`${classes.main}`}>
        <div className={`${classes.card} ${gClasses.card}`}>
        <h3>Πρόσθεσε Σχόλιο</h3>
        <TextField label={"Κείμενο"} className={classes.textF}/>
        </div>
    </div>
}

export default AddComment;