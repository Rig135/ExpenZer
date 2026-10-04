import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <BedtimeOutlinedIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ExpenZer
                    </Typography>
                    <Button color="inherit">
                        <LogoutOutlinedIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
