import Tesseract from "tesseract.js";

export const extractTextFromImage = async (file: File): Promise<string> => {
  console.log("Extracting text from", file.name);

  try {
    const { data } = await Tesseract.recognize(file, "eng");
    // console.log("OCR result:", data.text);
    return data.text.trim();
  } catch (err) {
    console.error("OCR failed:", err);
    return "[OCR failed]";
  }
};
