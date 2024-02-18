import React from "react";
import getUserTodos from "@/app/functions/getUserTodos";
import getUser from "@/app/functions/getUsers";
import {
  Grid,
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import Layout from "@/app/functions/Layout";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default async function userPage({ params: { id } }) {
  const userData = getUser(id);
  const userTodos = getUserTodos(id);

  const [user, todos] = await Promise.all([userData, userTodos]);

  return (
    <Layout>
      <Container>
        <Grid>
          <h1 className="mt-10 text-5xl font-bold text-center">User Todos</h1>
          {todos.map((todo) => {
            return (
              <Grid key={todo.id}>
                <Card elevation={3} className="mt-5">
                  <CardHeader title={"Title: " + todo.title} />
                  <CardContent>
                    Completed:
                    {todo.completed === true ? <CheckIcon /> : <CloseIcon />}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
}
