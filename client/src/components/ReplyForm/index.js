import React, { useState } from "react";
import { ADD_REPLY } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ReplyForm = ({ postId }) => {
  const [replyText, setText] = useState("");
  const [addReply, { error }] = useMutation(ADD_REPLY);

  const handleChange = (event) => {
    if (event.target.value) {
      setText(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(`/post/${postId}`);

    try {
      await addReply({
        variables: { replyText, postId },
      });
      setText("");
      window.location.replace();
    } catch (e) {
      console.log(error);
    }
  };
  return (
    <Container sx={{ height: "400px", width: "100%", marginTop: "10px" }}>
      <Typography sx={{ fontStyle: "oblique" }} variant="h6">
        What Do You Think?
      </Typography>
      <Box
        textAlign="left"
        sx={{ height: "300px" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          size="large"
          placeholder="Enter Reply Here"
          onChange={handleChange}
          value={replyText}
          fullWidth
          multiline
          rows={4}
        />
        <Box textAlign="right">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "100px" }}
          >
            Post
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ReplyForm;
