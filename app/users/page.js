import getUsers from "../functions/getUsers";
import {
  Grid,
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import Layout from "../functions/Layout";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <Layout>
      <h1 className="text-5xl font-bold text-center mt-5">Users</h1>
      <Container>
        <Grid className=" mt-5 mb-10" container spacing={3}>
          {users.map((user) => (
            <Grid item key={user.id} className="mt-5" sm={12} md={6} lg={6}>
              <Card elevation={5}>
                <CardHeader
                  title={user.name}
                  subheader={user.email}
                ></CardHeader>
                <CardContent>
                  <Typography variant="body1">
                    Username: {user.username}
                  </Typography>
                  <Typography variant="body1">
                    Address: {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}, {user.address.zipcode}
                  </Typography>
                  <Typography>Phone: {user.phone}</Typography>
                  <Typography>Website: {user.website}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={`users/${user.id}`} buttonalign>
                    Todos
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
