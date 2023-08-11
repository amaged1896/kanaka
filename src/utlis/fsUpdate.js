import fs from "fs";
'uploads/product/1691719448002-513717226-img_1.jpg'
'../../uploads/product'
export const deleteUpload = (path, photoName) => {
    fs.unlink(path + photoName, (err) => {
        if (err) {
            console.error("Error deleting file:", err);
        } else {
            console.log("File deleted successfully");
        }
    });
};