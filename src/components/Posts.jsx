import React from 'react'
import { Box, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import OG from '../images/OG.jpg'
import noodles from '../images/noodles.jpg'
import { Favorite, FavoriteBorder } from '@mui/icons-material';


function Posts() {
  return (
    <Box>
        <CardHeader
        avatar={
            <Avatar alt="Pablo" src={OG} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="The Chef"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height='300'
        image={noodles}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive noodles is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the noodles,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: red[500]}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Box>
  )
}

export default Posts