import * as React from 'react';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Icon() {
  const actions = [
    {
      icon: <LinkedInIcon sx={{ color: '#0A66C2' }} />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bikshamaiah-tulimelli/',
    },
    {
      icon: <EmailIcon sx={{ color: '#D14836' }} />,
      name: 'Gmail',
      link: 'mailto:bikshutulimelli@gmail.com', // ✅ mailto opens email app
    },
    {
      icon: <GitHubIcon sx={{ color: '#000000' }} />,
      name: 'GitHub',
      link: 'https://github.com/Bikshu19',
    },
  ];

  return (
    <SpeedDial
      ariaLabel="Contact links"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
      }}
      icon={<ContactMailIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name} // ✅ shows name on hover
          onClick={() => window.open(action.link, '_blank', 'noopener,noreferrer')} // ✅ opens safely
        />
      ))}
    </SpeedDial>
  );
}
