import React, { ReactNode, useState, useEffect } from "react";

type commentType = {
  comment: string;
};

type contextCommentType = {
  comments: commentType[];
  isLoading: boolean;
  addComment: (props: { comment: string }) => {};
  getComments: (props: string) => {};
};

type propsType = {
  children: JSX.Element | JSX.Element[];
};

const CommentContext = React.createContext<contextCommentType>({
  comments: [],
  isLoading: true,
  addComment: (props: { comment: string }) => {
    return { comment: "" };
  },
  getComments: (props: string) => {
    return 0;
  },
});

export const getComments = async (props: string) => {
  const loadedComments: Array<string> = [];

  fetch(
    `https://totemic-chalice-352009-default-rtdb.europe-west1.firebasedatabase.app/redComments/${props}.json`
  )
    .then((res) => res.json())
    .then((responseData) => {
      for (const key in responseData) {
        loadedComments.push(responseData[key]);
      }
    })
    .then(() => {
      console.log(loadedComments);
      return loadedComments;
    });
};

export const addComment = async (props: { comment: string }) => {
  await fetch(
    `https://totemic-chalice-352009-default-rtdb.europe-west1.firebasedatabase.app/redComments/onWait.json`,
    {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const CommentContextProvider: React.FC<propsType> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [commentsList, setCommentsList] = useState<commentType[]>([]);

  // useEffect(() => {
  //   let loadedComments: commentType[] = [];
  //   fetch(
  //     "https://totemic-chalice-352009-default-rtdb.europe-west1.firebasedatabase.app/redComments/onWait.json"
  //   )
  //     .then((res) => res.json())
  //     .then((responseData) => {
  //       for (const key in responseData) {
  //         loadedComments.push({
  //           comment: responseData[key].comment,
  //         });

  //         loadedComments = [];
  //       }
  //     });
  //   setCommentsList(loadedComments);
  //   setIsLoading(false);
  // }, []);

  return (
    <CommentContext.Provider
      value={{
        comments: commentsList,
        isLoading: isLoading,
        addComment: addComment,
        getComments: getComments,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
