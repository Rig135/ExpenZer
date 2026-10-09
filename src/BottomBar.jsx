import './bottomBar.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddIcon from '@mui/icons-material/Add';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function BottomBar({ onOpenModal }) {
    return (
        <Box className="bottom-bar-wrapper">
            <div className="bottom-bar-container">
                <div className="nav-item">
                    <IconButton color="inherit">
                        <BarChartIcon sx={{ color: '#bdbdbd' }} />
                    </IconButton>
                    <span className="nav-label">Analytic</span>
                </div>

                <div className="nav-item add-button-container">
                    <button className="add-btn" onClick={onOpenModal}>
                        <AddIcon sx={{ fontSize: 28, color: '#333' }} />
                    </button>
                </div>

                <div className="nav-item">
                    <IconButton color="inherit">
                        <ReceiptLongIcon sx={{ color: '#bdbdbd' }} />
                    </IconButton>
                    <span className="nav-label">Change logs</span>
                </div>
            </div>
        </Box>
    );
}
