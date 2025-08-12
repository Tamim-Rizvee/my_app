import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const images = [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1018/600/400',
];

function PhotoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3000); // change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                width: 800,
                height: 700,
                position: 'relative',
                margin: 'auto',
                mt: 5,
                boxShadow: 3,
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    alt={`Slide ${idx}`}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 1s ease-in-out',
                        opacity: idx === currentIndex ? 1 : 0,
                        zIndex: idx === currentIndex ? 1 : 0,
                    }}
                />
            ))}
        </Box>
    );
}

export default PhotoSlider