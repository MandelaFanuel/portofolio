import React from 'react';
import { 
Box,
} from "@mui/material";
const LogoFanuel = () => {
    return (
      <Box title="Mandela Fanuel Dev." sx={{ width: 25, height: 25, cursor: 'pointer', '&:hover': { transform: 'scale(1.1)' }, transition: 'all 0.3s ease' }}>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" fill="#0D1B2A" rx="12" />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#FFD700"
            strokeWidth="4"
            fill="none"
          />
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            fill="#8B0000"
            fontSize="36"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            dominantBaseline="middle"
          >
            By
          </text>
        </svg>
      </Box>
    );
  };

export default LogoFanuel;