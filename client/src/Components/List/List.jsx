import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

// icons
import KitchenIcon from "@mui/icons-material/Kitchen";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import EggIcon from "@mui/icons-material/Egg";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import FastFoodIcon from "@mui/icons-material/FastFood";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import CakeIcon from "@mui/icons-material/Cake";
import EggAltIcon from "@mui/icons-material/EggAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TapasIcon from "@mui/icons-material/Tapas";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SetMealIcon from "@mui/icons-material/SetMeal";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

export default function BasicList() {
    const all_icons = [
        <KitchenIcon />,
        <FoodBankIcon />,
        <EggIcon />,
        <LocalDiningIcon />,
        <RiceBowlIcon />,
        <FastFoodIcon />,
        <KebabDiningIcon />,
        <CakeIcon />,
        <EggAltIcon />,
        <RestaurantIcon />,
        <TapasIcon />,
        <BreakfastDiningIcon />,
        <RamenDiningIcon />,
        <SetMealIcon />,
        <SoupKitchenIcon />,
        <LunchDiningIcon />,
        <BakeryDiningIcon />,
        <LocalPizzaIcon />,
    ];
    const items = all_icons.map((icon, idx) => (
        <ListItem disablePadding key={idx} sx={{ width: "100%" }}>
            <ListItemButton
                key={idx}>
                <ListItemIcon sx={{ width: "auto" }}>{icon}</ListItemIcon>
                <ListItemText primary={`recipe #${idx}`} />
            </ListItemButton>
        </ListItem>
    ));

    return (
        <Container maxWidth="xl">
            <nav aria-label="main mailbox folders">
                <List>{items}</List>
            </nav>
        </Container>
    );
}
