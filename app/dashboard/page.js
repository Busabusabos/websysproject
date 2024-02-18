"use client";
import Layout from "../functions/Layout";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container, Grid, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Person4Icon from "@mui/icons-material/Person4";
import { useState, useEffect } from "react";
import { BarChart, LineChart } from "@mui/x-charts";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Dashboard() {
  const [users, mgaUsers] = useState([]);
  const [todos, mgaTodos] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          mgaUsers(json);
          console.log(json);
        });
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchTodos = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          mgaTodos(json);
          console.log(json);
        });
    };

    fetchTodos();
  }, []);

  const noTodos =
    users && users.length > 0
      ? users.map(
          (user) => todos.filter((todo) => todo.userId === user.id).length
        )
      : [0];

  return (
    <Layout>
      <Container>
        <Grid className="mt-5" container textAlign={"center"} spacing={5}>
          <Grid sm={12} md={6} lg={2.5} sx={{ margin: 0.5 }}>
            <Card elevation={5}>
              <CardContent>
                <IconButton href="/posts">
                  <AllInboxOutlinedIcon />
                </IconButton>
                <Typography sx={{ fontSize: 30 }}>100 Posts</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sm={12} md={6} lg={3} sx={{ margin: 0.5 }}>
            <Card elevation={5}>
              <CardContent>
                <IconButton>
                  <CommentIcon />
                </IconButton>
                <Typography sx={{ fontSize: 30 }}>500 Comments</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sm={12} md={6} lg={3} sx={{ margin: 0.5 }}>
            <Card elevation={5}>
              <CardContent>
                <IconButton>
                  <FormatListBulletedIcon />
                </IconButton>
                <Typography sx={{ fontSize: 30 }}>200 Todos</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid sm={12} md={6} lg={3} sx={{ margin: 0.5 }}>
            <Card elevation={5}>
              <CardContent>
                <IconButton href="/users">
                  <Person4Icon />
                </IconButton>
                <Typography sx={{ fontSize: 30 }}>10 Users</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h5">
          Total Number of TODOS for Each User
        </Typography>
        <BarChart
          colors={["#A2006D"]}
          series={[{ data: noTodos }]}
          height={400}
          xAxis={[
            { data: users.map((user) => user.username), scaleType: "band" },
          ]}
        />
      </Container>
    </Layout>
  );
}
