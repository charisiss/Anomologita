import React, { ReactNode, useState, useEffect } from "react";

import commentType from "../types/CommentType";

type contextCommentType = {
  onWaitComments: commentType[];
  approvedComments: commentType[];
  addComment: (props: { comment: string }) => {};
  removeComment: (props: string) => {};
  approveComment: (props: string) => {};
  getComments: (props: string) => Promise<commentType[]>;
  updateComments: (props: string) => {};
};

type propsType = {
  children: JSX.Element | JSX.Element[];
};

const CommentContext = React.createContext<contextCommentType>({
  onWaitComments: [],
  approvedComments: [],
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
    return Promise.resolve([]);
  },
  updateComments: (props: string) => {
    return {};
  },
});

export const getComments = async (props: string) => {
  const loadedComments: Array<commentType> = [];

  return fetch(
    `https://totemic-chalice-352009-default-rtdb.europe-west1.firebasedatabase.app/redComments/${props}.json`
  )
    .then((res) => res.json())
    .then((responseData) => {
      for (const key in responseData) {
        loadedComments.push({ comment: responseData[key].comment, id: key });
      }
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
  const [onWaitCommentsList, setOnWaitCommentsList] = useState<commentType[]>(
    []
  );
  const [approvedCommentsList, setApprovedCommentsList] = useState<
    commentType[]
  >([]);

  useEffect(() => {
    updateComments("onWait");
    updateComments("approved");
  }, []);

  const updateComments = (props: string) => {
    getComments(props).then((value) => {
      if (props === "onWait") {
        setOnWaitCommentsList([]);
        value.map((item) => setOnWaitCommentsList((prev) => [item, ...prev]));
      } else {
        setApprovedCommentsList([]);
        value.map((item) => setApprovedCommentsList((prev) => [item, ...prev]));
      }
    });
    return {};
  };

  return (
    <CommentContext.Provider
      value={{
        onWaitComments: onWaitCommentsList,
        approvedComments: approvedCommentsList,
        addComment: addComment,
        removeComment: removeComment,
        approveComment: approveComment,
        getComments: getComments,
        updateComments: updateComments,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
