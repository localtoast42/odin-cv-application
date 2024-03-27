import { useState } from 'react';

export default function EditableField() {
    const [text, setText] = useState('');
    const [isEditable, setIsEditable] = useState(true);

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
          <div>
            <TextDisplay />
            <Input 
                text={text}
                onChange={handleChange}
            />
            <button onClick={() => setIsEditable(!isEditable)}>
                Edit
            </button>
          </div>
        </>
    );
}

function Input({ text, onChange }) {
    return (
        <input 
            value={text}
            onChange={onChange}
        />
    );
}

function TextDisplay({ text }) {
    return (
        <p>
            {text}
        </p>
    );
}