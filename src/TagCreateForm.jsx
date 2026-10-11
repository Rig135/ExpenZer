import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './TagCreateForm.css';

export default function TagCreateForm({ onAddTag, onCancel }) {

    const [tagName, setTagName] = useState('');
    const [tagEmoji, setTagEmoji] = useState('🏷️');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tagName.trim()) return;

        //Create the new tag object and send it to the parent
        onAddTag({
            id: Date.now().toString(),
            name: tagName.trim().toLowerCase(),
            emoji: tagEmoji.trim() || '🏷️'
        });
    };


    return (
        <div className="new-tag-view">
            <div className="new-tag-header">
                <IconButton size="small" onClick={onCancel} className="back-arrow-btn">
                    <ArrowBackIcon sx={{ fontSize: 20, color: '#111' }} />
                </IconButton>
            </div>

            <div className="new-tag-title">NEW TAG</div>

            <form className="new-tag-form-body" onSubmit={handleSubmit}>

                <div className="underline-input-wrapper">
                    <input
                        type="text"
                        placeholder="Emoji"
                        value={tagEmoji}
                        onChange={(e) => setTagEmoji(e.target.value)}
                        className="underline-input"
                        maxLength={2}
                    />
                </div>

                <div className="underline-input-wrapper">
                    <input
                        type="text"
                        placeholder="name"
                        value={tagName}
                        onChange={(e) => setTagName(e.target.value)}
                        className="underline-input"
                        autoFocus
                        required
                    />
                </div>
                <button type="submit" className="confirm-btn">Confirm</button>
            </form>
        </div >
    );
}