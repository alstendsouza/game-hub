const getCroppedImageUrl = (image: string) => {
    if (!image) return "";
    const target = "media/";
    const index = image.indexOf(target) + target.length;
    return image.slice(0, index) + 'crop/600/400/' + image.slice(index);
}

export default getCroppedImageUrl;