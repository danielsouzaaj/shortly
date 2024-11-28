import { Box, Button, Typography } from "@mui/material"
import { BarChart } from "@mui/icons-material"

function LinkCard({ id, createdAt, name, longURL, shortCode, totalClicks }) {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Typography>Created at {`${createdAt}`}</Typography>
                <Typography variat="h5">{ name }</Typography>
                <Typography>{ longURL }</Typography>
                <Box display="flex">
                    <Typography>{window.location.host}/{shortCode}</Typography>
                    <Button size="small" variant="outlined">Copy</Button>
                </Box>
            </Box>
            <Box>
                <Box display="flex">
                    <Typography>{totalClicks}</Typography>
                    <BarChart />
                </Box>
                <Typography>Total Clicks</Typography>
            </Box>
        </Box>
    )
}

export default LinkCard