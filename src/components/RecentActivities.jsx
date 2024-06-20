import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import dummyImage from "../assets/images/dummyImage.jpeg";


export const RecentActivities = () => {
    return (
        <>
            <div className="sectionTopBtmSpace">
                <div className="container">
                    <div className="text-center titleCopySideSpace rewardCustomer what-we-do-text">
                        <h3 className="font30 font600 primaryColor mb-30 titleMaxWidth">
                            Recent Social Activities
                        </h3>
                        <p className="lightText3 font16 font500 mb-40 titledesc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptatum dolorum quidem in reprehenderit quod non numquam officiis suscipit dolore deserunt, accusamus est ad quisquam odio ullam, qui ducimus quo explicabo alias! Nostrum adipisci, quidem quos facere corporis atque aperiam.
                        </p>
                    </div>
                    <div className="gridBox">
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
                                <Card style={{ borderRadius: 3, boxShadow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            sx={{ fontWeight: "bold" }}
                                            component="div"
                                        >
                                            Bessie Cooper
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over
                                            6,000 species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ pt: 0, px: 3, pb: 3 }}>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
                                <Card style={{ borderRadius: 3, boxShadow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            sx={{ fontWeight: "bold" }}
                                            component="div"
                                        >
                                            Bessie Cooper
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over
                                            6,000 species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ pt: 0, px: 3, pb: 3 }}>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%" }}>
                                <Card style={{ borderRadius: 3, boxShadow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="https://images.pexels.com/photos/1161771/pexels-photo-1161771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            sx={{ fontWeight: "bold" }}
                                            component="div"
                                        >
                                            Bessie Cooper
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over
                                            6,000 species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ pt: 0, px: 3, pb: 3 }}>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}