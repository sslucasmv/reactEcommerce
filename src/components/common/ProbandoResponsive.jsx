import { Grid, Typography } from "@mui/material"



export const ProbandoResponsive = () => {
    return <div>

    <Grid container>

        <Grid item xs={12} sm={6} md={4} sx={{backgroundColor:{xs:"steelblue", sm:"orange"}, fontSize:{xs:"3rem",sm:"1rem"}}}>
            <Typography variant="h3" sx={{fontSize:{xs:"3rem",sm:"2rem"}}}>Item 1</Typography>
        </Grid>

        <Grid item bgcolor={"green"} xs={12} sm={6} md={4}>
            <h3>Item 2</h3>
        </Grid>

        <Grid item bgcolor={"blue"} xs={12} sm={6} md={4}>
            <h3>Item 3</h3>
        </Grid>
    </Grid>

    </div>
}