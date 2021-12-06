import React from "react";

function CreateArea({ title, content, handleInputChange, handleSubmit }) {
    return (
        <div>
            <form className="create-note" onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea 
                name="content" 
                placeholder="Take a note..." 
                rows="3" 
                onChange={handleInputChange}
                value={content}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
