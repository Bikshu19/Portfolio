import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function RoundedDownloadButton() {
  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      sx={{
        borderRadius: {
          xs: "26px",   // Extra small devices
          sm: "30px",   // Small and up
          md: "44px",   // Medium and up
        },
        px: {
          xs: 3,        // Horizontal padding for xs
          sm: 3,        // For sm and up
        },
        py: {
          xs: 1.5,        // Vertical padding for xs
          sm: 1.5,      // For sm and up
        },
        fontSize: {
          xs: "16px",
          sm: "16px",
          md: "18px",
        },
        textTransform: "none",
        color:'white',
        backgroundColor: '#064232',
      }}
    >
      Resume
    </Button>
  );
}

export default RoundedDownloadButton;
