import React, { useState } from "react";

const Form = () => {

    const [productName, setProductName] = useState("");

    const [oldPrice, setOldPrice] = useState("");

    const [currentPrice, setCurrentPrice] = useState("");

    // const [primaryImage, setPrimaryImage] = useState("");

    // const [secondaryImage, setSecondaryImage] = useState("");




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
            backgroundColor: "#111",
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
            backgroundColor: "#111",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
        },
    };

    const nameHandler = (e) => {

        setProductName(e.target.value)
    }

    const oldPriceHandler = (e) => {

        setOldPrice(e.target.value)
    }

    const currentPriceHandler = (e) => {

        setCurrentPrice(e.target.value)
    } 

    // const primaryImageHandler = (e) => {

    //     setPrimaryImage(e.target.value)
    // } 

    // const secondaryImageHandler = (e) => {

    //     setSecondaryImage(e.target.value)
    // } 

    const formHandler = (e) => {

        e.preventDefault();

        let formData = {
            "name" : productName,
            "oldPrice" : oldPrice,
            "currentPrice" : currentPrice
        }

        console.log(formData);
        
    }



    

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.header}>Add New Product</div>

                <div style={styles.body}>
                    <form onSubmit={formHandler}>
                        <label style={styles.label}>Product Name</label>
                        <input
                        onChange={nameHandler}
                            type="text"
                            placeholder="Enter product name"
                            style={styles.input}
                        />

                        <div style={styles.row}>
                            <div style={styles.col}>
                                <label style={styles.label}>Old Price</label>
                                <input
                                onChange={oldPriceHandler}
                                    type="number"
                                    placeholder="0.00"
                                    style={styles.input}
                                />
                            </div>

                            <div style={styles.col}>
                                <label style={styles.label}>Current Price</label>
                                <input
                                onChange={currentPriceHandler}
                                    type="number"
                                    placeholder="0.00"
                                    style={styles.input}
                                />
                            </div>
                        </div>

                        {/* <label style={styles.label}>Primary Image</label>
                        <input 
                        onChange={primaryImageHandler}
                        type="file" 
                        style={styles.input} 
                        /> */}

                        {/* <label style={styles.label}>Secondary Image</label>
                        <input 
                        onChange={secondaryImageHandler}
                        type="file" 
                        style={styles.input} 
                        /> */}

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
