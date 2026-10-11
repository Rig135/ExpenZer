import { useState } from 'react';
import './TagPicker.css'
import AddIcon from '@mui/icons-material/Add';

import TagCreateForm from './TagCreateForm';

const INITIAL_TAGS = [
    { id: 'rent', name: 'rent', emoji: '🏠' },
    { id: 'health', name: 'health', emoji: '💊' },
    { id: 'food', name: 'food', emoji: '🍕' },
    { id: 'clothes', name: 'clothes', emoji: '👕' },
    { id: 'gift', name: 'gift', emoji: '🎁' },
    { id: 'education', name: 'education', emoji: '📚' },
    { id: 'vacation', name: 'vacation', emoji: '🏖️' },
    { id: 'groceries', name: 'groceries', emoji: '🥦' },
    { id: 'coffee', name: 'coffee', emoji: '☕️' }
];

export default function TagPicker({ onSelectTag, onClose }) {
    const [tags, setTags] = useState(INITIAL_TAGS);
    const [isCreating, setIsCreating] = useState(false);

    // Recieves the completed tag from TagCreateForm
    const handleAddNewTag = (newTag) => {
        setTags((prev) => [...prev, newTag]); // adds to list
        onSelectTag(newTag);                  // selects it for the expense
        setIsCreating(false);                 // closes the form
    };

    return (
        <div className='tag-sheet-backdrop' onClick={onClose}>
            <div className='tag-sheet-container' onClick={(e) => e.stopPropagation()}>
                <div className='tag-sheet-header'>
                    <span className='tag-sheet-title'>EXPENSES</span>
                </div>

                {/* Inline form to create a new tag if '+' was clicked */}
                {isCreating ? (<TagCreateForm onAddTag={handleAddNewTag} onCancel={() => setIsCreating(false)} />) : (
                    <>
                        {/* 4-column Grid */}
                        <div className='tags-grid'>

                            {/* Add Button as the first item */}
                            <div className='tag-item add-tag-slot' onClick={() => setIsCreating(true)}>
                                <div className='add-tag-circle'>
                                    <AddIcon sx={{ fontSize: 20, color: '#888' }} />
                                </div>
                            </div>

                            {/* Tag List */}
                            {tags.map((tag) => (
                                <div key={tag.id}
                                    className="tag-item"
                                    onClick={() => {
                                        onSelectTag(tag);
                                        onClose();
                                    }}>

                                    <span className='tag-emoji'>{tag.emoji}</span>
                                    <span className='tag-name'>{tag.name}</span>
                                </div>
                            ))}
                        </div>
                    </>

                )}

            </div>
        </div>
    );


}