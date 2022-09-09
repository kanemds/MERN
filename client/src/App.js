import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import camera from './images/camera.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { appBar, heading, image } from './styles'

const App = () => {

  return (
    <Container maxWidth='lg'>
      <AppBar sx={appBar} position='static' color='inherit'>
        <Typography sx={heading} variant="h2" component="h2" align='center'>Memories</Typography>
        <img sx={image} src={camera} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>

            {/* in small device take full with 12,  in medium take 7 */}
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App