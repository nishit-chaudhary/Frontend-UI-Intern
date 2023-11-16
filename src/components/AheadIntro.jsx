import React from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import Image from 'next/image'

function AheadIntro() {
    return (
        <Box sx={{ 
            mx: 2,
            my: 30,
            borderRadius: "40px", 
            height: "80vh", 
            display: 'flex',
            alignItems: 'center',
        }}>
            <Box sx={{ flex: 1, px: 8 }}>
                <Typography variant='subtitle1'fontWeight={600} sx={{my: 2}} >Built out of Frustation</Typography>
                <Typography variant='h4' fontWeight={900}>Meet the Ahead App</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', my: 2, mt: 5 }}>
                <Box sx={{ flex: 1 }}>
                <Image
                    src="/aheadintroscreenshot.png"
                    width={600}
                    height={400}
                    alt="App Screenshot"
                />
            </Box>
                <Box sx={{ flex: 1 }}>
                <Typography variant='body1' fontWeight={500} sx={{ my: 4 }}>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</Typography>
                <Typography variant='body1' fontWeight={500} >Think of it as a pocket cheerleader towards a better, more fulfilling.</Typography>
            </Box>
                    
                </Box>
            </Box>
            
        </Box>
    );
}

export default AheadIntro;