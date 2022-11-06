import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import AddComment from "../components/AddComment/AddComment";
import CommentsList from "../components/CommentsList/CommentsList";
import classes from "../styles/Home.module.css";
import commentType from "../types/CommentType";
import CommentContext from "../store/Comments-Context";

const Home = () => {
  const [openAddComment, setOpen] = useState(false);
  const [comments, setComments] = useState<commentType[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<string | null>("false");
  const ctx = useContext(CommentContext);

  useEffect(() => {
    console.log("Comments Updated");
    setComments(ctx.onWaitComments);
  }, ctx.onWaitComments);

  return (
    <div>
      <Head>
        <title>RedXMas</title>
        <link
          rel="icon"
          href="https://infinitygreece.com/wp-content/uploads/2018/08/red-logo-150x150.png"
        />
      </Head>

      <main className={classes.main}>
        <Image
          src="https://infinitygreece.com/wp-content/uploads/2018/08/red-logo-150x150.png"
          height={100}
          width={100}
          alt={"image"}
          className={classes.image}
        />
        <br />
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
          className={classes.cardButton}
        >
          Προσθηκη Σχολιου
        </Button>
        <AddComment open={openAddComment} />

        <CommentsList admin={isLoggedIn as string} comments={comments} />
      </main>

      <footer className={classes.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by InfinityGreece
        </a>
      </footer>
    </div>
  );
};

export default Home;
