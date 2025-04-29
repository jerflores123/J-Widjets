import React, { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'checklistItems';

const Checklist = () => {
    const [items, setItems] = useState([]);

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) setItems(JSON.parse(saved));
    }, []);

    // Save to localStorage whenever items change
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addItem = () => {
        const text = prompt('Enter new item:');
        if (text) {
            setItems([...items, { text, checked: false }]);
        }
    };

    const toggleItem = (index) => {
        const updated = [...items];
        updated[index].checked = !updated[index].checked;
        setItems(updated);
    };

    const deleteItem = (index) => {
        if (window.confirm('Delete this item?')) {
            const updated = items.filter((_, i) => i !== index);
            setItems(updated);
        }
    };

    const editItem = (index) => {
        const newText = prompt('Edit item:', items[index].text);
        if (newText !== null && newText.trim() !== '') {
            const updated = [...items];
            updated[index].text = newText;
            setItems(updated);
        }
    };

    return (
        <div className='checklist-container'>
            <h3> Checklist</h3>
            <ul className='checklist-list'>
                {items.map((item, index) => (
                    <li key={index} className='checklist-item'>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => toggleItem(index)}
                        />
                        <span
                            className={`checklist-label${item.checked ? ' checked' : ''}`}
                        >
                            {item.text}
                        </span>
                        <button className='checklist-btn' onClick={() => editItem(index)}>
                            <span role="img" aria-label="edit item">✏️</span>
                        </button>
                        <button className='checklist-btn' onClick={() => deleteItem(index)}>

                            <span role="img" aria-label="delete item">🗑️</span>
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={addItem} className="checklist-add-btn">
                <span role="img" aria-label="add item">➕ Add Item</span>
            </button>
        </div>
    );
};

export default Checklist;