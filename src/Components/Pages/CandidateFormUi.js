import { Grid, Stack } from '@mui/material'
import React from 'react'

function CandidateFormUi() {
  return (
    <Stack spacing={2} sx={{ mb: 2 }}>
        <Grid container rowGap={3} columnSpacing={3}>
        <Grid xs={12} md={4} item>
            hello
        </Grid>
        </Grid>
    </Stack>
  )
}

export default CandidateFormUi