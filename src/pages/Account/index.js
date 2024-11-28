import { Grid2, Box, Typography, Button } from "@mui/material"
import Navbar from "./Navbar"
import { useState } from "react"
import LinkCard from "./LinkCard"

const data = [
    {
        id: "0",
        createdAt: new Date(),
        name: "My website",
        longURL: "https://google.com",
        shortCode: "masdo",
        totalClicks: 10,
    }
]

function Account() {
    const [links, setLinks] = useState(data)

    return (
        <>
            <Navbar />
            <Box mt={5}>
                <Grid2 container justifyContent="center">
                    <Grid2 size={{xs: 8}}>
                        <Box mb={5} display="flex" columnGap={3}>
                            <Typography variant="h4">Links</Typography>
                            <Button variant="contained" color="primary">Create new</Button>
                        </Box>

                        {links.map(link => <LinkCard key={link.id} {...link} />)}
                    </Grid2>
                </Grid2>
            </Box>
        </>
    )
}

export default Account