import { useState } from 'react';
import './GalleryListItem.css'


function GalleryListItem({frogItem, addLike}) {

    const [status, setStatus] = useState(false);

    const likeBtn = () => {
        console.log(`--- In addLike ---`, frogItem.id);
        addLike(frogItem.id);
    };    

    return (
        <>
            <div key={frogItem.id} className="frog_box">
                {status ?
                    <p className="frog_description" onClick={() => setStatus(false)}> {frogItem.description}</p>
                    :
                    <img onClick={() => setStatus(true)} className="frog_pic" src={frogItem.path}/>
                }
                <button onClick={likeBtn}>Like</button>
                <p>{frogItem.likes} people like this!</p>
            </div>
        </>
    );
};
export default GalleryListItem;