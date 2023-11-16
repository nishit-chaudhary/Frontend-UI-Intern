import { Box, Typography } from '@mui/material';

function EQ() {
    return (
        <>
            <Box sx={{ display: 'flex', gap: 5, height: '30vh', mx: 7, my: 11, px: 7 }}>
                <Box sx={{ flex: 1 }} > <Typography variant='h4' fontWeight={700}> EQ beats IQ </Typography> </Box>
                <Box sx={{ flex: 1 }} > People with high emotional intelligence (EQ) live more fulfilled lives.
                    They tend to be happier and have healthier relationships.
                </Box>
                <Box sx={{ flex: 1 }} >
                    They are more successful in their pursuits and make for inspiring leaders. According to science, they
                    earn $29k a year.
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 5, overflowX: 'scroll', height: '30vh', m: 8, overflow: 'auto', 
            '&::-webkit-scrollbar': { 
                width: '0px',
                height: '0px',
            },
            '&:hover::-webkit-scrollbar': {
                width: '0px',
                height: '0px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'darkgrey',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: 'grey',
  }, }} >
                <Box sx={{bgcolor: '#eeebfe', borderRadius: '20px', flexBasis: '25%', flexShrink: 0, p: 3 }} >
                    <Typography variant="h4">😠</Typography>
                    <Typography variant="body1" fontWeight={600}>You argue with a colleague</Typography>
                    <Typography variant="body2">
                    You get angry and defensive, instead of staying open and working towards common ground.
                    </Typography>
                </Box>
                <Box sx={{bgcolor: '#6341ef', borderRadius: '20px', flexBasis: '25%', flexShrink: 0, p: 3, color: 'white', zIndex: 99 }} >
                    <Typography variant="h4">😳</Typography>
                    <Typography variant="body1" fontWeight={600}>You get a promotion at work</Typography>
                    <Typography variant="body2">
                    You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.
                    </Typography>
                </Box>
                <Box sx={{bgcolor: '#ffefd5', borderRadius: '20px', flexBasis: '25%', flexShrink: 0, p: 3 }} >
                    <Typography variant="h4">🤨</Typography>
                    <Typography variant="body1" fontWeight={600}>You argue with a colleague</Typography>
                    <Typography variant="body2">
                    You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.
                    </Typography>
                </Box>
                <Box sx={{bgcolor: '#fffaee', borderRadius: '20px', flexBasis: '25%', flexShrink: 0, p: 3 }} >
                    <Typography variant="h4">😒</Typography>
                    <Typography variant="body1" fontWeight={600}>You are at a lively dinner party</Typography>
                    <Typography variant="body2">
                    You play on your phone. instead of confidently approaching strangers and striking up a chat.
                    </Typography>
                </Box>
                <Box sx={{bgcolor: '#f2f8f8', borderRadius: '20px', flexBasis: '25%', flexShrink: 0, p: 3 }} >
                    <Typography variant="h4">😬</Typography>
                    <Typography variant="body1" fontWeight={600}>You hit dead end in a negotiation</Typography>
                    <Typography variant="body2">
                    You get nervous. frazzled. and frustrated, instead of staying optimistic and solution—oriented.
                    </Typography>
                </Box>
                
            </Box>
        </>
    );
}

export default EQ;