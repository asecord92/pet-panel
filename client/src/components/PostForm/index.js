import React, { useState } from "react";
import { ADD_POST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { catArray } from "../../utils/data";
import { Container } from "@mui/material";

const PostForm = () => {
  const [postText, setText] = useState("");
  const [addPost, { error }] = useMutation(ADD_POST);
  //   {
  //   update(cache, { data: { addPost } }) {
  //     try {
  //       const { posts } = cache.readQuery({ query: QUERY_POSTS });
  //       cache.writeQuery({
  //         query: QUERY_POSTS,
  //         data: { posts: [addPost, ...posts] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, posts: { ...me.posts, addPost } } },
  //     });
  //   },
  // });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText },
      });
      setText("");
      window.location.replace("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container sx={{ height: "400px", width: "100%", marginTop: "10px" }}>
      <Box sx={{ height: "300px" }} component="form" onSubmit={handleSubmit}>
        <TextField
          size="large"
          placeholder="Enter Post Here"
          onChange={handleChange}
          value={postText}
          fullWidth
          multiline
          rows={4}
        />
        {/* <InputLabel id="demo-simple-select-standard=label">
        Select a Category
      </InputLabel> */}

        {/* <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          defaultValue=""
          onChange={handleChange}
          label="Select a Category"
        >
          <MenuItem value="other">Select a Category</MenuItem>
          {catArray.map(({ name }, index) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select> */}
        {/* <TextField
          select
          label="Select a Category"
          onChange={handleChange}
          value={formState.categories}
        >
          <MenuItem value="other">Select a Category</MenuItem>
          {catArray.map(({ name }, index) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField> */}
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

export default PostForm;
