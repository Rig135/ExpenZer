import { useState } from "react";
import './AddExpenseModal.css';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';

export default function AddExpenseModal({ onClose, onAddExpense }) {
    const [amount, setAmount] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());

    const [selectedTag, setSelectedTag] = useState(null);
    const [isTagOpen, setIsTagOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            return;
        }

        if (onAddExpense) {
            onAddExpense({
                id: Date.now(),
                title: title.trim() || (selectedTag ? selectedTag.name : 'Expense'),
                category: selectedTag ? selectedTag.name : 'Other',
                amount: parseFloat(amount),
                date: date.toISOString().split('T')[0],
            });
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {/* Top Header */}
                <div className="modal-top-bar">
                    <IconButton size="small" className="header-icon-btn">
                        <DarkModeOutlinedIcon sx={{ fontSize: 20, color: '#444' }} />
                    </IconButton>
                    <span className="modal-heading">EXPENSES</span>
                    <IconButton size="small" className="header-icon-btn" onClick={onClose}>
                        <ExitToAppOutlinedIcon sx={{ fontSize: 20, color: '#444' }} />
                    </IconButton>
                </div>

                {/* Form Body */}
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-date-display">
                        Today at {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' })}
                    </div>

                    {/* Big Hero Amount Input */}
                    <div className="amount-input-wrapper">
                        <input
                            type="number"
                            step="any"
                            placeholder="0"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="hero-amount-input"
                            autoFocus
                        />
                        <div className="amount-divider"></div>
                    </div>

                    <div className="title-input-wrapper">
                        <input type="text"
                            placeholder="for"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="hero-title-input"
                        />

                    </div>

                    {/* Down Arrow Indicator */}
                    <div className="flow-arrow">↓</div>

                    {/* Tag Selector Pill */}
                    <div className="tag-selector-pill" onClick={() => setIsTagOpen(true)}>
                        <LocalOfferOutlinedIcon sx={{ fontSize: 18, color: '#8e8e93' }} />
                        <span className="tag-label">
                            {selectedTag ? `${selectedTag.emoji || ''} ${selectedTag.name}` : 'select your tag'}
                        </span>
                        <SyncOutlinedIcon sx={{ fontSize: 18, color: '#8e8e93' }} />
                    </div>

                    {/* Action Buttons */}
                    <div className="modal-button-group">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-next">
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}