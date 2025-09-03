'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Button, Paper } from '@mui/material';
import {
  Description as DescriptionIcon,
  School as SchoolIcon,
  Quiz as QuizIcon,
  Assignment as AssignmentIcon,
  Psychology as PsychologyIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';

// Removed module cards as requested

const MaterialHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        width: '1000px',
        height: '600px',
        maxWidth: '95vw',
        maxHeight: '90vh',
        margin: '0 auto',
        overflow: 'visible',
        '@media (max-width: 768px)': {
          height: '500px',
        },
      }}
    >
      {/* Center Content */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        sx={{
          position: 'absolute',
          bottom: '40px',
          left: '32%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 10,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: '400px',
          '@media (max-width: 768px)': {
            width: '85%',
            bottom: '20px',
            top: 'auto',
            p: 3,
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 2,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            lineHeight: 1.25,
          }}
        >
          All-in-One Platform for Modern Education
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.5 }}
        >
          Six Core Modules. Infinite Possibilities.
          <br />
          Manage, Learn, and Grow — all in one ecosystem.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
          <Button variant="outlined" color="primary">
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MaterialHero;
