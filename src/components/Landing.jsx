import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import Image from 'next/image'

function Landing() {
    return (
        <Box sx={{ 
            bgcolor: "#eeebfe", 
            m: 2, 
            borderRadius: "40px", 
            height: "80vh", 
            display: 'flex',
            alignItems: 'center',
        }}>
            <Box sx={{ flex: 1, px: 8 }}>
                <Typography variant='subtitle1'fontWeight={600} sx={{my: 2}} >Ahead App</Typography>
                <Typography variant='h2' fontWeight={900}>Master your life</Typography>
                <Typography variant='h2' fontWeight={900}>by mastering</Typography>
                <Typography variant='h2' fontWeight={900}> emotions </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', my: 2, mt: 5 }}>
                    <Button 
                        variant="contained" 
                        startIcon={<AppleIcon fontSize="large"/>} 
                        sx={{ bgcolor: 'black', color: 'white',  textTransform: 'none' }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant='caption' sx={{mb: -1}}>Download on the</Typography>
                            <Typography variant='h6'>App Store</Typography>
                        </Box>
                    </Button>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Rating name="read-only" value={5} readOnly sx={{ color: 'yellow' }} />
                        <Typography variant='body2' sx={{ color: 'gray', mt: 1 }}>100+ Appstore reviews</Typography>
                </Box>
            </Box>
        </Box>
            <Box sx={{ flex: 1 }}>
                <Image
                    src="/appscreenshot.png"
                    width={400}
                    height={400}
                    alt="App Screenshot"
                />
            </Box>
        </Box>
    );
}

export default Landing;