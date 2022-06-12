import './GalleryListItem.css'

function GalleryListItem({frogItem}) {
    return (
        <>
            <div key={frogItem.id}>
                <p>{frogItem.id}</p>
                <img className="frog_pic" src={frogItem.path}/>
            </div>
        </>
    );
};
export default GalleryListItem;