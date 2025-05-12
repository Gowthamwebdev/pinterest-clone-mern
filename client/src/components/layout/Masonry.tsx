import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { IconButton, Menu, MenuItem, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Bookmark, Share, MoreHoriz, Download, Search } from "@mui/icons-material";
import pinterestSvg from "../../../public/pinterest.svg";
import { realImages } from "./image";



const MasonryGallery: React.FC = () => {
    const [savedImages, setSavedImages] = useState<string[]>([]);
    const [anchorEl, setAnchorEl] = useState<{ [key: string]: HTMLElement | null }>({});

    const handleSave = (url: string) => {
    setSavedImages((prev) => (prev.includes(url) ? prev.filter((img) => img !== url) : [...prev, url]));
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

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, url: string) => {
    event.stopPropagation();
    setAnchorEl({ ...anchorEl, [url]: event.currentTarget }); 
    };
    const handleMenuClose = (url: string) => {
    setAnchorEl((prev) => ({ ...prev, [url]: null }));
    };

return (
    <div className="p-4 max-w-screen-md mx-auto">
        <Masonry columns={4} spacing={1}>
        {realImages.map(({ url, genre, suggestedText }, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
            <div className="relative">
    <img
    src={url}
    alt={`${genre}-${index}`}
    className="w-full h-auto object-cover rounded-lg transition duration-300 group-hover:brightness-90"
    onClick={(e) => e.stopPropagation()}
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button
        className="bg-light-gray bg-opacity-20 text-white text-xs px-2 py-1 rounded-full"
        onClick={(e) => {
        e.stopPropagation(); 
        handleDownload(url);
        }}
    >
    Open
    </button>
    </div>
    <div className="absolute bottom-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <IconButton
        onClick={(e) => {
        e.stopPropagation();
        handleDownload(url);
        }}
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
        onClick={(e) => {
        e.stopPropagation();
        handleMenuOpen(e, url);
        }}
        className="text-black"
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

<Button
    component={Link}
    to={`/content/${suggestedText}`}
    variant="contained"
    sx={{
        backgroundColor: "#E0E0E0",
        color: "#424242",
        fontSize: "8px",
        borderRadius: "10px",
        textTransform: "none",
        padding: "4px 6px",
        marginTop:"none",
        "&:hover": { backgroundColor: "#BDBDBD" },
    }}
    >
    {suggestedText}
    </Button>

    <Menu
    anchorEl={anchorEl[url]}
    open={Boolean(anchorEl[url])}
    onClose={() => handleMenuClose(url)}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    sx={{ "& .MuiPaper-root": { minWidth: "60px",minHeight:"30px", padding: "2px 2px" } }} // Shrinks menu
    >
    <MenuItem onClick={() => handleSave(url)} sx={{ fontSize: "12px", padding: "6px 12px" }}>
    <Bookmark sx={{ color: savedImages.includes(url) ? "green" : "gray", fontSize: "16px" }} />
    Save
    </MenuItem>
    <MenuItem onClick={() => handleShare(url)} sx={{ fontSize: "12px", padding: "6px 12px" }}>
    <Share sx={{ color: "gray", fontSize: "16px" }} />
    Share
    </MenuItem>
    </Menu>

    <div className="flex items-center justify-between px-2 py-1">
    <div className="flex items-center gap-1">
    <img src={pinterestSvg} alt="Pinterest" className="w-4 h-4" />
    <span className="text-xs text-gray-700 font-semibold">{genre}</span>
    </div>
    </div>
</div>
))}
</Masonry>
</div>
);
};

export default MasonryGallery;
