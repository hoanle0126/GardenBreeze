import ColorContext from "@/Contexts/ColorContext";
import { router, usePage } from "@inertiajs/react";
import { Badge, IconButton } from "@mui/material";
import React from "react";
import CartIcon from "resources/assets/icons/cart";

const CartIconButton = () => {
    const { props } = usePage();
    return (
        <IconButton
            aria-label="delete"
            color="primary"
            onClick={() => router.visit(route("cart.index"))}
        >
            <Badge badgeContent={props.auth.user.cart.product.length} color="primary">
                <CartIcon
                    primary={ColorContext.palette.primary.main}
                    secondary={ColorContext.palette.secondary.main}
                    size={"30px"}
                />
            </Badge>
        </IconButton>
    );
};

export default CartIconButton;
