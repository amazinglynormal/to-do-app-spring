import React from "react";

import { Container } from "./Container";
import { NoToDoListFound } from "./NoToDoListFound";
import { ToDoListSelector } from "./ToDoListSelector";

const Home = () => {
  const usersToDoLists = [
    { title: "Test", id: 1234 },
    { title: "Test2", id: 4231 },
  ];

  // const emptyList = [];

  return (
    <Container>
      <h1>Home Page</h1>
      {usersToDoLists.length <= 0 ? (
        <NoToDoListFound />
      ) : (
        <ToDoListSelector usersToDoLists={usersToDoLists} />
      )}
    </Container>
  );
};

export default Home;
