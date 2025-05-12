import { IconButton, List, ListItem, InputBase } from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import useSearchStore from "../../stores/useSearchStore";
import { useState, useEffect } from "react";

const PinterestSearchBar = () => {
    const { setQuery, searchImages, results } = useSearchStore();
    const [localQuery, setLocalQuery] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        if (localQuery.length > 0) {
            setSuggestions([
                "jennie", "jungkook", "journal ideas", "jesus", "jeans outfit",
                "japan", "jewelry", "jungwon", "jellycat", "jellyfish"
            ]);
            setIsDropdownVisible(true);
        } else {
            setSuggestions([]);
            setIsDropdownVisible(false);
        }
    }, [localQuery]);

    const handleSearch = (query) => {
        if (query.trim().length > 0) {
            setQuery(query);
            searchImages();
            setIsDropdownVisible(false);
        }
    };

    const handleClearSearch = () => {
        setLocalQuery("");
        setSuggestions([]);
        setIsDropdownVisible(false);
    };

    return (
        <div className="relative w-full max-w-lg">
    <div className="flex items-center bg-[#f5f5f5] px-5 py-1 rounded-full border border-gray-300 focus-within:border-blue-500 transition duration-200 z-50 relative hover:bg-gray-100">
        <Search className="text-gray-500" fontSize="small" />
        <InputBase
            fullWidth
            placeholder="Search for easy dinners, fashion, etc."
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onFocus={() => setIsDropdownVisible(true)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(localQuery)}
            sx={{ fontSize: 12, textAlign: "left", height: "2px", marginInlineEnd: "110px" }}
        />
        {localQuery && (
            <IconButton onClick={handleClearSearch} size="small">
                <Close fontSize="small" />
            </IconButton>
        )}
    </div>

    {isDropdownVisible && (
        <div className="absolute w-full mt-1 bg-white shadow-lg rounded-md overflow-hidden z-50">
            <List>
                {suggestions.map((item, index) => (
                    <ListItem
                        key={index}
                        onClick={() => {
                            setLocalQuery(item);
                            handleSearch(item);
                        }}
                        className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                    >
                        <Search fontSize="small" className="text-gray-500 mr-2" />
                        {item}
                    </ListItem>
                ))}
            </List>
        </div>
    )}
</div>

    );
};

export default PinterestSearchBar;
