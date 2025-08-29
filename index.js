// index.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define the port the server will run on.
// Use the PORT environment variable if it's set (for hosting providers), otherwise default to 3000
const PORT = process.env.PORT || 3000;

/**
 * POST /bfhl
 * This route processes an array of data and returns a structured JSON response.
 */
app.post('/bfhl', (req, res) => {
    try {
        // Extract the 'data' array from the request body
        const data = req.body.data;

        // Check if data is provided and is an array
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input: 'data' must be an array."
            });
        }

        // --- Data Processing Logic ---

        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];
        const special_characters = [];
        let sum = 0;
        let alphabet_chars = '';

        data.forEach(item => {
            // Check if the item is a number (represented as a string)
            if (!isNaN(item) && item.trim() !== '' && !/[a-zA-Z]/.test(item)) {
                const number = parseInt(item, 10);
                if (number % 2 === 0) {
                    even_numbers.push(String(number));
                } else {
                    odd_numbers.push(String(number));
                }
                sum += number;
            }
            // *** FIX: Use a regex that allows for one or more letters ***
            // Check if the item is a string containing only alphabets
            else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                alphabet_chars += item;
            }
            // Otherwise, consider it a special character
            else {
                special_characters.push(item);
            }
        });

        // --- Concatenation and Alternating Caps Logic ---

        const reversed_alphabets = alphabet_chars.split('').reverse().join('');
        let concat_string = '';
        for (let i = 0; i < reversed_alphabets.length; i++) {
            if (i % 2 === 0) {
                concat_string += reversed_alphabets[i].toUpperCase();
            } else {
                concat_string += reversed_alphabets[i].toLowerCase();
            }
        }

        // --- Construct the Response ---

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            odd_numbers,
            even_numbers,
            alphabets,
            special_characters,
            sum: String(sum),
            concat_string
        };

        res.status(200).json(response);

    } catch (error) {
        // *** IMPROVEMENT: Better error logging and response ***
        // Log the full error to the console (this will appear in Render's logs)
        console.error("Error processing request:", error);

        // Send a more detailed error response back to the client
        res.status(500).json({
            is_success: false,
            user_id: "john_doe_17091999",
            message: "An internal server error occurred.",
            error_details: error.message // Include the actual error message for easier debugging
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
