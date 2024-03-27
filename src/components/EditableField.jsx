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
            {isEditable ? (
                <Input 
                    text={text}
                    onChange={handleChange}
                />
            ) : (
                <TextDisplay text={text}/>
            )}
            <button onClick={() => setIsEditable(!isEditable)}>
                {isEditable ? 'Submit' : 'Edit'}
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
        <span>
            {text}
        </span>
    );
}