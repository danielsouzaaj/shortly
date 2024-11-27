import { Grid2, Box, Typography, Button } from "@mui/material"
import Navbar from "./Navbar"

function Account() {
    return (
        <>
            <Navbar />
            <Box mt={5}>
                <Grid2 container justifyContent="center">
                    <Grid2 size={{xs: 8}}>
                        <Box display="flex" columnGap={3}>
                            <Typography variant="h4">Links</Typography>
                            <Button variant="contained" color="primary">Create new</Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Account