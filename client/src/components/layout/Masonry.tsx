import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import {IconButton,Menu,MenuItem,Button,TextField,} from "@mui/material";
import { Link } from "react-router-dom";
import {Bookmark,Share,MoreHoriz,Download,Search,} from "@mui/icons-material";
import pinterestSvg from "../../../public/pinterest.svg";

const realImages = [
    {url: "https://picsum.photos/id/106/500/600",genre: "Art",suggestedText: "Expressive strokes and colors"},
    {url: "https://picsum.photos/id/109/100/100",genre: "Abstract",suggestedText: "Deep thoughts in chaotic forms"},
    {url: "https://picsum.photos/id/110/80/100",genre: "Technology",suggestedText: "The future of innovations"},
    {url: "https://picsum.photos/id/111/750/850",genre: "Cityscape",suggestedText: "Urban adventures await"},
    {url: "https://picsum.photos/id/112/800/900",genre: "Vintage",suggestedText: "Classic beauty never fades"},
    { url: "https://picsum.photos/id/106/500/600", genre: "Art", suggestedText: "Expressive strokes and colors" },
    { url: "https://picsum.photos/id/109/100/100", genre: "Abstract", suggestedText: "Deep thoughts in chaotic forms" },
    { url: "https://picsum.photos/id/110/80/100", genre: "Technology", suggestedText: "The future of innovations" },
    { url: "https://picsum.photos/id/111/750/850", genre: "Cityscape", suggestedText: "Urban adventures await" },
    { url: "https://picsum.photos/id/112/800/900", genre: "Vintage", suggestedText: "Classic beauty never fades" },
    { url: "https://picsum.photos/id/113/850/950", genre: "Watercolor", suggestedText: "Soft strokes and dreamy palettes" },
    { url: "https://picsum.photos/id/114/900/1000", genre: "Street Photography", suggestedText: "Raw moments captured in the urban flow" },
    { url: "https://picsum.photos/id/115/950/1050", genre: "Scenic Landscapes", suggestedText: "Breathtaking views that inspire" },
    { url: "https://picsum.photos/id/116/1000/1100", genre: "Mountains", suggestedText: "The majestic peaks touching the sky" },
    { url: "https://picsum.photos/id/117/1050/1150", genre: "Beach", suggestedText: "Where the sea meets serenity" },
    { url: "https://picsum.photos/id/118/1100/1200", genre: "Sunset", suggestedText: "Golden hues painting the sky" },
    { url: "https://picsum.photos/id/119/1150/1250", genre: "Forest", suggestedText: "A tranquil escape into nature" },
    { url: "https://picsum.photos/id/120/1200/1300", genre: "Flowers", suggestedText: "Delicate blooms spreading joy" },
    { url: "https://picsum.photos/id/121/1250/1350", genre: "Portrait", suggestedText: "Capturing emotions with clarity" },
    { url: "https://picsum.photos/id/122/1300/1400", genre: "Retro", suggestedText: "A nostalgic nod to the past" },
    { url: "https://picsum.photos/id/123/1350/1450", genre: "Moody", suggestedText: "Dark tones evoking deep emotion" },
    { url: "https://picsum.photos/id/124/1400/1500", genre: "Cinematic", suggestedText: "Frames that tell compelling stories" },
    { url: "https://picsum.photos/id/125/1450/1550", genre: "High Fashion", suggestedText: "Elegance and sophistication at its finest" },
];

const MasonryGallery: React.FC = () => {
const [savedImages, setSavedImages] = useState<string[]>([]);
const [anchorEl, setAnchorEl] = useState<{
    [key: string]: HTMLElement | null;
    }>({});

const handleSave = (url: string) => {
    setSavedImages((prev) =>
        prev.includes(url) ? prev.filter((img) => img !== url) : [...prev, url]
    );
    };

    const handleShare = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("Image link copied to clipboard!");
};

const handleDownload = async (url: string) => {
    try {
        const response = await fetch(url, { mode: "cors" });
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error("Download failed:", error);
    }
};

const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    url: string
) => {
    setAnchorEl((prev) => ({ ...prev, [url]: event.currentTarget }));
};

const handleMenuClose = (url: string) => {
    setAnchorEl((prev) => ({ ...prev, [url]: null }));
};

return (
    <div className="p-4 max-w-screen-md mx-auto">
    <Masonry columns={4} spacing={1}>
        {realImages.map(({ url, genre, suggestedText }, index) => (
        <div
            key={index}
            className="relative rounded-lg overflow-hidden group"
        >
        <Link to={`/category/${genre}`} className="block">
            <div className="relative">
                <img
                    src={url}
                    alt={`${genre}-${index}`}
                    className="w-full h-auto object-cover rounded-lg transition duration-300 group-hover:filter group-hover:brightness-90"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-light gray bg-opacity-20 text-white text-xs px-2 py-1 rounded-full">
                    Open
                    </button>
                </div>
                <div className="absolute bottom-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconButton
                    onClick={() => handleDownload(url)}
                    sx={{
                        backgroundColor: "#e0e0e0",
                        "&:hover": { backgroundColor: "f6f6f6" },
                        color: "black",
                        borderRadius: "20%",
                        padding: "4px",
                    }}
                    size="small"
                >
                    <Download fontSize="small" />
                </IconButton>
                <IconButton
                    onClick={(e) => handleMenuOpen(e, url)} className="text-black"
                    sx={{
                    backgroundColor: "#e0e0e0",
                    "&:hover": { backgroundColor: "#d5d5d5" },
                    color: "black",
                    borderRadius: "20%",
                    padding: "4px",
                    }}
                    size="small"
                >
                    <MoreHoriz fontSize="small" />
                </IconButton>
                </div>
            </div>
            </Link>
            <p className="text-xs text-gray-600 px-2 py-1">{suggestedText}</p>
            <Menu
                anchorEl={anchorEl[url]}
                open={Boolean(anchorEl[url])}
            onClose={() => handleMenuClose(url)}
            >
            <MenuItem onClick={() => handleSave(url)}>
                <Bookmark
                sx={{ color: savedImages.includes(url) ? "green" : "gray" }}
                fontSize="small"
                />
                Save
            </MenuItem>
            <MenuItem onClick={() => handleShare(url)}>
                <Share sx={{ color: "gray" }} fontSize="small" />
                Share
            </MenuItem>
            </Menu>
            <div className="flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-1">
                <img
                    src={pinterestSvg}
                    alt="Pinterest"
                    className="w-4 h-4"
                />
                <span className="text-xs text-gray-700 font-semibold">
                {genre}
                </span>
            </div>
            </div>
        </div>
        ))}
    </Masonry>
    </div>
);
};

export default MasonryGallery;
