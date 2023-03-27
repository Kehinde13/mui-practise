import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import OG from '../images/OG.jpg'


function Options() {

  const itemData = [
    {
      img: "./images/witcher.jpg",
      title: "the witcher"
    },
    {
      img: "./images/the-boys.jpg",
      title: "The-Boys"
    },
    {
      img: "./images/The man of God.jpg",
      title: "The man of God"
    },
    {
      img: "./images/spiderman.jpg",
      title: 'Spiderman'
    },
    {
      img: "./images/arcane.jpg"
    }
  ]

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 5 }}>
      <Box width={300}>
        <Box>
          <Typography fontWeight={100} variant="h6" m={2}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src={OG} />
            <Avatar alt="Travis Howard" src={OG} />
            <Avatar alt="Cindy Baker" src={OG} />
            <Avatar alt="Agnes Walker" src={OG} />
            <Avatar alt="Trevor Henderson" src={OG} />
            <Avatar alt="Remy Sharp" src={OG} />
            <Avatar alt="Travis Howard" src={OG} />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>

        <Box>
          <Typography fontWeight={100} variant="h6" m={2}>
            Trending Movies
          </Typography>

          <ImageList sx={{ width: 370, height: 250 }} cols={5} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Typography fontWeight={100} variant="h6" >
            Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      </Box>

    </Box>
  )
}

export default Options