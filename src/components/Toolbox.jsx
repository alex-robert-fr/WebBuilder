import React from "react";
import {Box, Typography, Grid, Button as MaterialButton} from "@material-ui/core";
import {Element, useEditor} from "@craftjs/core";
import Text from "./user/Text";
import Container from "./user/Container";
import Button from "./user/Button";
import { Card } from "./user/Card";

export const Toolbox = () => {
    const {connectors, query} = useEditor()

    return (
        <Box px={2} py={2}>
            <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
                <Box pb={2}>
                    <Typography>Glissez pour ajouter</Typography>
                </Box>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Text text="Hello World" />)} variant="contained">Text</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">Contenant</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Button variant="contained" color="primary">Click Me !</Button>)} variant="contained">Bouton</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref => connectors.create(ref, <Card />)} variant="contained">Carte</MaterialButton>
                </Grid>
            </Grid>
        </Box>
    )
}
