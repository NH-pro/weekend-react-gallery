import './GalleryListItem.css'


function GalleryListItem({frogItem, addLike}) {

    const likeBtn = () => {
        console.log(`--- In addLike ---`, frogItem.id);
        addLike(frogItem.id);
    };    

    return (
        <>
            <div key={frogItem.id} className="frog_box">
                <img className="frog_pic" src={frogItem.path}/>
                <button onClick={likeBtn}>Like</button>
                <p>{frogItem.likes} people like this!</p>
            </div>
        </>
    );
};
export default GalleryListItem;