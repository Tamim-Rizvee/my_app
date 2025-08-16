import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import SignUp from "./SignUp";

export default function HomePage() {
    const [open, setOpen] = useState(false);

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
            }}
        >
            <Typography variant="h3" gutterBottom>
                Welcome to My Website
            </Typography>

            <Button variant="contained" onClick={() => setOpen(true)}>
                Open Sign In
            </Button>

            <SignUp open={open} onClose={() => setOpen(false)} />
        </Container>
    );
}
