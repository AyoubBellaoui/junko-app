import React, { useState } from "react";
import axios from "axios";

const Form = () => {

    const [productName, setProductName] = useState("");

    const [oldPrice, setOldPrice] = useState("");

    const [currentPrice, setCurrentPrice] = useState("");

    const [primaryImage, setPrimaryImage] = useState("");

    const [secondaryImage, setSecondaryImage] = useState("");


    const styles = {
        page: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
            fontFamily: "Arial, sans-serif",
        },

        card: {
            width: "100%",
            maxWidth: "520px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            overflow: "hidden",
        },

        header: {
            backgroundColor: "#1b10d9",
            color: "#fff",
            padding: "16px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "600",
        },

        body: {
            padding: "24px",
        },

        label: {
            display: "block",
            marginBottom: "6px",
            fontWeight: "600",
            color: "#333",
        },

        input: {
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "16px",
            fontSize: "14px",
            outline: "none",
        },

        fileInput: {
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "16px",
            fontSize: "14px",
            outline: "none",
            cursor: "pointer",
        },

        row: {
            display: "flex",
            gap: "12px",
        },

        col: {
            flex: 1,
        },

        button: {
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#1b10d9",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
        },
    };


    const formHandler = async (e) => {
        e.preventDefault();

        const formData = {
            name: productName,
            oldPrice: oldPrice,
            currentPrice: currentPrice,
            primaryImage: primaryImage,
            secondaryImage: secondaryImage
        };


        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/products", 
                formData,
                {
                    headers: {
                    'Content-Type': 'multipart/form-data'}
                })
            console.log("Saved product:", response.data);
            alert("Product added successfully!");

            // Reset form
            setProductName("");
            setOldPrice("");
            setCurrentPrice("");
            setPrimaryImage("");
            setSecondaryImage("");

        } catch (error) {
            console.error("Error:", error);
            alert("Error saving product: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.header}>Add New Product</div>

                <div style={styles.body}>
                    <form onSubmit={formHandler}>
                        <label style={styles.label}>Product Name</label>
                        <input
                            onChange={(e) => setProductName(e.target.value)}
                            type="text"
                            placeholder="Enter product name"
                            style={styles.input}
                            required
                        />

                        <div style={styles.row}>
                            <div style={styles.col}>
                                <label style={styles.label}>Old Price</label>
                                <input
                                    onChange={(e) => setOldPrice(e.target.value)}
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    style={styles.input}
                                    required
                                />
                            </div>

                            <div style={styles.col}>
                                <label style={styles.label}>Current Price</label>
                                <input
                                    onChange={(e) => setCurrentPrice(e.target.value)}
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    style={styles.input}
                                    required
                                />
                            </div>
                        </div>

                        <div style={styles.row}>
                            <div style={styles.col}>
                                <label style={styles.label}>Primary Image</label>
                                <input
                                    onChange={
                                        (e) => { setPrimaryImage(e.target.files[0])}
                                    }
                                    name="primary_img"
                                    type="file"
                                    accept="image/*"
                                    style={styles.fileInput}
                                />
                            </div>

                            <div style={styles.col}>
                                <label style={styles.label}>Secondary Image</label>
                                <input
                                    onChange={
                                        (e) => { setSecondaryImage(e.target.files[0])
                                    console.dir("this is the sec image path " + e);}
                                    }
                                    name="secondary_img"
                                    type="file"
                                    accept="image/*"
                                    style={styles.fileInput}
                                />
                            </div>
                        </div>

                        <button type="submit" style={styles.button}>
                            Submit Product
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;