import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Grid } from '@mui/material'

export function ActionAreaCard() {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={require('../../icons/chart.png')}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Relatório de vendas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                natus dolore nobis provident nesciunt adipisci doloremque
                laboriosam culpa sint est. Corrupti quisquam omnis odio labore
                cum, officiis consequatur aspernatur sapiente?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={require('../../icons/chart.png')}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Projeções
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
                adipisci, reiciendis corporis tempora aspernatur modi sint quod
                dolore recusandae expedita, labore alias qui vitae. Tempore ex
                sed possimus enim repudiandae.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={require('../../icons/chart.png')}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Plano estratégico
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo earum deserunt aperiam minima molestias, provident,
                voluptatibus quidem similique iste nihil adipisci quos,
                temporibus nisi reiciendis soluta. Inventore numquam magni
                suscipit?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}
