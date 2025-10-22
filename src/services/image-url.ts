import noImage from "../assets/no-image-placeholder-6f3882e0.webp";
const getCroppedImageUrl = (image: string) => {
    if (!image) return noImage;
    const target = "media/";
    const index = image.indexOf(target) + target.length;
    return image.slice(0, index) + 'crop/600/400/' + image.slice(index);
}

export default getCroppedImageUrl;