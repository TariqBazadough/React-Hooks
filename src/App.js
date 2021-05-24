import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { userId: 1, id: 101, title: "anything", body: "abc" },
    { userId: 2, id: 102, title: "something", body: "xyz" },
  ]);
  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts([...posts, ...res.data]);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Blog App</h1>
        {posts.map((post, i) => {
          return (
            <div key={i}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
        <button
          onClick={(e) => {
            setPosts([
              ...posts,
              { userId: userId, id: id, title: title, body: body },
            ]);
          }}
        >
          button
        </button>
        <input
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          type="text"
          placeholder="userId"
        ></input>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          type="text"
          placeholder="id"
        ></input>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="title"
        ></input>
        <input
          onChange={(e) => {
            setBody(e.target.value);
          }}
          type="text"
          placeholder="body"
        ></input>
      </div>
    </>
  );
};

export default App;
