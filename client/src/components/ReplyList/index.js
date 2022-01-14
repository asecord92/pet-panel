import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";

const ReplyList = ({ replies }) => {
  return (
    <Box>
      {replies &&
        replies.map((reply) => (
          <Card sx={{ maxWidth: "90%", mb: "20px" }} key={reply._id}>
            <CardContent>
              <Typography variant="p">{reply.replyText}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="caption">
                Posted By:
                <Link
                  sx={{ textDecoration: "none", color: "black" }}
                  href={`/profile/${reply.username}`}
                >
                  {"     "}
                  {reply.username}
                </Link>
              </Typography>
              {"    || "}

              <Typography variant="caption" sx={{ color: "black" }}>
                Posted At:
                {reply.createdAt}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default ReplyList;
