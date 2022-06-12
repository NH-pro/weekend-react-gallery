import './GalleryListItem.css'

function GalleryListItem({frogItem}) {
    return (
        <>
            <div key={frogItem.id} className="frog_box">
                <img className="frog_pic" src={frogItem.path}/>
            </div>
        </>
    );
};
export default GalleryListItem;