
export const realImages = Array.from({ length: 100 }, (_, index) => {
  const id = Math.floor(Math.random() * 500);
  const width = Math.floor(Math.random() * (800 - 300) + 300);
  const height = Math.floor(width * (Math.random() * (1.5 - 0.8) + 0.8));

  const genreMap = {
    0: "Minimalism",
    100: "Abstract",
    200: "Nature",
    300: "Cityscape",
    400: "Street Photography",
    500: "Moody",
  };
  const genre = genreMap[Math.floor(id / 100) * 100] || "Retro";

  const textMap = {
    Minimalism: "Elegant simplicity",
    Abstract: "Bold expressions",
    Nature: "Dreamy landscapes",
    Cityscape: "Urban vibes",
    Photography: "Capturing raw moments",
    Moody: "Vibrant nostalgia",
    Retro: "Timeless aesthetic",
  };
  const suggestedText = textMap[genre] || "Artistic perspective";

  return {
    url: `https://picsum.photos/${width}/${height}?random=${id}`,
    genre,
    suggestedText,
  };
});
