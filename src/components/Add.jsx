import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Add as AddIcon, DateRange } from "@mui/icons-material";
import { Box } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PersonIcon from "@mui/icons-material/Person";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
const Add = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography variant="h6" color="gray" textAlign={"center"}>
              Salman
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Enter your post"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} marginTop='5px'>
            <EmojiEmotionsIcon color="primary" />
            <PersonIcon color="secondary" />
            <ImageIcon color="success" />
            <VideoCameraBackIcon color="error" />
          </Stack>
          <ButtonGroup
          sx={{marginTop: "20px"}}
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button >Post</Button>
            <Button sx={{width:'100px'}}>
              <DateRange></DateRange>
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
