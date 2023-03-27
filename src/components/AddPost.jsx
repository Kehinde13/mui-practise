import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import OG from '../images/OG.jpg'

function AddPost() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: 10
    })

    return (
        <>
            <Tooltip
                title="AddPost" sx={{ position: "fixed", bottom: 20, left: 150 }}
                onClick={handleOpen}
            >
                <Fab color='primary' aria-label='add'>
                    <Add />
                </Fab>
            </Tooltip>

            <StyledModal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box 
                 height={250} 
                 p={3} 
                 borderRadius={5} 
                 bgcolor={"background.default"} 
                 color={"text.primary"} 
                 position="absolute"
                sx={{ width: { xs: 300, sm: 400 } }} >

                    <Typography textAlign="center" color="gray" variant="h6" component="h2">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Pablo" src={OG} />
                        <Typography fontWeight={500} variant="span"> The Chef </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Whats on your mind?"
                        variant='standard'
                    />
                    <Stack direction="row" gap={1} mt={2} mb={2}>
                        <EmojiEmotions color="primary" />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                      fullWidth
                      variant='contained'
                      aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost