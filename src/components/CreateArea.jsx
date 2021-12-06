import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea({ title, content, handleInputChange, handleSubmit }) {
    const [isExpanded, setExpanded] = useState(false)
    const expand = () => {
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note" onSubmit={handleSubmit}>
                {isExpanded && (<input
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={handleInputChange}
                />)}

                <textarea
                    onClick={expand}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    onChange={handleInputChange}
                    value={content}
                />
                <Zoom in={isExpanded}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
