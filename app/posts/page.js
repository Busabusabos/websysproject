"use client";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/material";
import Layout from "../functions/Layout";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, mgaPosts] = useState([]);
  const [users, mgaUsers] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
          mgaPosts(json);
          console.log(json);
        });
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUsers = () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) => {
          mgaUsers(json);
          console.log(json);
        });
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mt-5">Posts</h1>
      <Container>
        <Grid container spacing={3}>
          {posts.map((post) => {
            const user = users.find((user) => user.id === post.userId);
            return (
              <Grid item key={post.id} sm={12} md={12} lg={6} className="mt-5">
                <Card elevation={5}>
                  <CardHeader
                    title={"Title: " + post.title}
                    subheader={user?.name}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {"Body: " + post.body}
                    </Typography>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton href={`posts/${post.id}`}>
                        <CommentIcon />
                      </IconButton>
                    </CardActions>
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
