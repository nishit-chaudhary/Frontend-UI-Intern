import { Box, Typography } from '@mui/material';

function EQ() {
    return (
        <Box sx={{ display: 'flex', gap: 5, height: '30vh', mx: 7, my: 11 ,px:7 }}>
            <Box sx={{ flex: 1 }} > <Typography variant='h4' fontWeight={700}> EQ beats IQ </Typography> </Box>
            <Box sx={{ flex: 1 }} > People with high emotional intelligence (EQ) live more fulfilled lives. 
                They tend to be happier and have healthier relationships. 
            </Box>
            <Box sx={{ flex: 1 }} > 
                They are more successful in their pursuits and make for inspiring leaders. According to science, they
                earn $29k a year.
            </Box>
        </Box>
    );
}

export default EQ;