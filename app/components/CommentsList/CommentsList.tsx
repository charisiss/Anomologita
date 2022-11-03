import React from "react";
import Grid from '@mui/material/Grid';
import classes from "./CommentsList.module.css"
import gClasses from "../../styles/global.module.css"

import AddComment from "../AddComment/AddComment";
const list = ["test1", "test3333333333333333333333333333333333333", "test4", "test5", "test6", "test7"]

const CommentsList = () => {
    return <div className={classes.main}>
        <AddComment />
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 8, md: 16 }}>
            {Array.from(list).map((item, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                <div className={`${classes.card} ${gClasses.card}`}><h5>#{ list.length- index}</h5><p>{item}</p></div>
                </Grid>
            ))}
         
        </Grid>
    </div>
}

export default CommentsList;