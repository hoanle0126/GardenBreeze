import { Button, CircularProgress } from "@mui/material";

export default function PrimaryButton({
    sx,
    disabled,
    children,
    ...props
}) {
    return (
        <Button {...props} type="submit" variant="contained" disabled={disabled} sx={sx}>
            {children}
        </Button>
    );
}
