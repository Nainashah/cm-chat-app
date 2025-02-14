import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

import NoChat from "../../assets/Images/Illustration/no-chat.svg";
import { Link, useSearchParams } from "react-router-dom";
import ChatComponent from "./Conversation";
import Chats from "./Chats";
import Contact from "./Contact";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();

  const theme = useTheme();

  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width:
              searchParams.get("open") === "true"
                ? `calc(100vw - 740px )`
                : "calc(100vw - 420px )",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFF"
                : theme.palette.background.paper,
            borderBottom:
              searchParams.get("type") === "individual-chat" &&
              searchParams.get("id")
                ? "0px"
                : "6px solid #0162C4",
          }}
        >
          {searchParams.get("type") === "individual-chat" &&
          searchParams.get("id") ? (
            <ChatComponent />
          ) : (
            <Stack
              spacing={2}
              sx={{ height: "100%", width: "100%" }}
              alignItems="center"
              justifyContent={"center"}
            >
              <img
                src={NoChat}
                alt="No conversation"
                style={{ maxWidth: "300px" }}
              />
              <Typography variant="subtitle2">
                Select a conversation or start a{" "}
                <Link
                  style={{ color: "#0162C4", textDecoration: "none" }}
                  to="/"
                >
                  new one
                </Link>
              </Typography>
            </Stack>
          )}
        </Box>
        {searchParams.get("open") === "true" && (
          //  Contact Info
          <Contact />
        )}
      </Stack>
    </>
  );
};

export default GeneralApp;
