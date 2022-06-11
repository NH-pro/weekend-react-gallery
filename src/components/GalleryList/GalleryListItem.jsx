function GalleryListItem({frogItem}) {
    return (
        <>
            <div key={frogItem.id}>
                <image src={frogItem.path}/>
            </div>
        </>
    );
};
export default GalleryListItem;