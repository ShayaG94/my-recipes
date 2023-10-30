import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

export default function FloatingActionButton({ type }) {
    const fab = {
        icon: type === "add" ? <AddIcon /> : <EditIcon />,
        color: type === "add" ? "primary" : "secondary",
    };

    return (
        <Box>
            <Fab
                sx={{ position: "fixed", bottom: "12%", right: "10%" }}
                color={fab.color}
                aria-label={type}>
                {fab.icon}
            </Fab>
        </Box>
    );
}
