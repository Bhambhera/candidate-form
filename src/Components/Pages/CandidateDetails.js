import styled from '@emotion/styled'
import { Alert, Box, Grid, Typography } from '@mui/material'
import React from 'react'

function CandidateDetails({status, data}) {
    const HtmlViewer = styled(Box)(({ theme }) => ({
        width: "100%",
        overflowX: "scroll",
        background: theme.palette.grey[200],
        width: "100%",
        borderRadius: 1,
        "*": {
            "ul": {
                paddingLeft: theme.spacing(4)
            },
            "ol": {
                paddingLeft: theme.spacing(4)
            },
            "b": {
                fontWeight: "bold"
            },
            "a": {
                color: "blue",
                cursor: "pointer"
            },
    
            "td": {
                border: "1px solid black",
                minWidth: "100px"
            }
        }
    
    }))
    if(status == 'res') {
        return (
            <>
                <Box mb={4}>
                    <Alert severity='success'>
                        Candidate Details Successfully Submitted
                    </Alert>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Name of Candidate</Typography>
                            <Typography variant="h6">{data.candidate_first_name} {data.candidate_middle_name} {data.candidate_last_name}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Date</Typography>
                            <Typography variant="h6">{data.dob}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Applied Position</Typography>
                            <Typography variant="h6">{data.candidate_position}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Department</Typography>
                            <Typography variant="h6">{data.department}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Total Years Of Expeirence</Typography>
                            <Typography variant="h6">{data.total_years_of_experience}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Relevant Experience</Typography>
                            <Typography variant="h6">{data.relevant_experience ? data.relevant_experience : 'none'}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Qualification</Typography>
                            <Typography variant="h6">{data.qualification}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Reference From</Typography>
                            <Typography variant="h6">{data.reference_from ? data.reference_from : 'No Reference'}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Current Location</Typography>
                            <Typography variant="h6">{data.current_location}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Notice Period</Typography>
                            <Typography variant="h6">{data.notice_period ? data.notice_period : '0'}</Typography>
                        </Grid>
                        <Grid item md={4} xs={6}>
                            <Typography mb={2} fontWeight={"bold"} variant="h5">Expectations</Typography>
                            <Typography variant="h6">{data.expectation}</Typography>
                        </Grid>
                    </Grid>
                
                
                </Box>
            </>
        )
    }
    else {
        return (
            <>
                <Box>
                <Alert severity='error'>
                    error generated
                </Alert>
                    <Typography>
                       {data}
                    </Typography>
                </Box>
            </>
        )
    }
}

export default CandidateDetails
