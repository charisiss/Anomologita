import React, { ReactNode, useState, useEffect } from "react";

type commentType = {
  comment: string;
};

type contextCommentType = {
  comments: commentType[];
  isLoading: boolean;
  addComment: (props: { comment: string }) => {};
  removeComment: (props: string) => {};
  approveComment: (props: string) => {};
  getComments: (props: string) => {};
};

type propsType = {
  children: JSX.Element | JSX.Element[];
};

const CommentContext = React.createContext<contextCommentType>({
  comments: [],
  isLoading: true,
  addComment: (props: { comment: string }) => {
    return {};
  },
  removeComment: (props: string) => {
    return {};
  },
  approveComment: (props: string) => {
    return {};
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

export const removeComment = async (props: string) => {
  const loadedComments: Array<string> = [];
  await fetch(
    `https://totemic-chalice-352009-default-rtdb.europe-west1.firebasedatabase.app/redComments/onWait/${props}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const approveComment = async (props: string) => {
  const loadedComments: Array<string> = [];

  fetch(
    `https://totemic-chalice-352009-default-rtdb.europe-west1.firebasedatabase.app/redComments/onWait/${props}.json`
  )
    .then((res) => res.json())
    .then((res) => {
      fetch(
        `https://totemic-chalice-352009-default-rtdb.europe-west1.firebasedatabase.app/redComments/approved.json`,
        {
          method: "POST",
          body: JSON.stringify(res),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  removeComment(props);
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
        removeComment: removeComment,
        approveComment: approveComment,
        getComments: getComments,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
