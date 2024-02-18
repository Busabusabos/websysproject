"use client";
import { AppBar, Drawer, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Link className="text-1xl font-bold mt-5 ml-5 mr-5" href="/">
              Dashboard
            </Link>
            <Link className="text-1xl mt-5 ml-5 mr-5 font-bold" href="/posts">
              Posts
            </Link>
            <Link className="text-1xl mt-5 ml-5 mr-5 font-bold" href="/users">
              Users
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ marginTop: "150px" }}>{children}</div>
    </div>
  );
}
