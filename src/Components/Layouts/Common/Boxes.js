import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {center} from '../../../assets/css/theme/common'

const CenteredBox = styled(Box)(() => ({
    ...center
}))

export {CenteredBox}