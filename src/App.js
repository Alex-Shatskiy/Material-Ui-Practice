import React from "react"
import {
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  AppBar,
  CssBaseline,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core"
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera"
import useStyles from "./styles"

function App() {
  const classes = useStyles()
  const imageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolBar}>
          <PhotoCameraIcon className={classes.icon} />
          <Typography color="initial" variant="h6">
            Photo Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" align="center">
            <Typography variant="h2" color="textPrimary" gutterBottom>
              Album Layout
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.blueButton}
                  >
                    Main Call To Action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Call
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={6}>
            {imageArr.map((id) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="imageTitle"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default App
