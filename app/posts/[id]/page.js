import React from "react";
import { Grid, Container, Card, CardContent, CardHeader } from "@mui/material";
import Layout from "@/app/functions/Layout";
import getPosts from "@/app/functions/getPosts";
import getPostComments from "@/app/functions/getPostComments";

export default async function postPage({ params: { id } }) {
  const postData = getPosts(id);
  const postComments = getPostComments(id);

  const [post, comments] = await Promise.all([postData, postComments]);

  return (
    <Layout>
      <Container>
        <Grid>
          <h1 className="mt-10 text-5xl font-bold text-center">Comments</h1>
          {comments.map((comment) => (
            <Grid key={comment.id}>
              <Card elevation={3} className="mt-5">
                <CardHeader
                  title={"Title: " + comment.name}
                  subheader={"Email: " + comment.email}
                />
                <CardContent>{"Body: " + comment.body}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
