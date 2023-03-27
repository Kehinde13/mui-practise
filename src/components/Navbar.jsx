import { AppBar, Box, Typography, styled, Toolbar, alpha, InputBase, Menu, MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb'
import React, { useState } from 'react'
import { Mail } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: "10%",
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}))

function Navbar() {
    const [open, setOpen] = useState(false)

    return (

        <AppBar
            position="sticky"
            color="error"
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Material UI
                </Typography>
                <AdbIcon sx={{ display: { xs: 'flex', sm: 'none' }, mr: 1 }} />

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Icons>
                    <Badge badgeContent={4} color="primary">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={8} color="primary">
                        <NotificationsIcon />
                    </Badge>
                    <AccountCircle
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>

                <Box
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <AccountCircle
                        onClick={(e) => setOpen(true)}
                    />
                </Box>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}

export default Navbar