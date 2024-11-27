import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Shortly</Typography>
                <Box ml="auto">
                    <Button color="inherit">Links</Button>
                    <Button color="inherit">Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar