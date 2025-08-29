// index.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // <-- ADD THIS LINE

// Create an Express application
const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory if you have one. For this case, we serve the index.html directly.
app.use(express.static(__dirname)); // <-- ADD THIS LINE

// Define the port the server will run on.
const PORT = process.env.PORT || 3000;


// --- NEW: Add a route for the root URL to serve the frontend ---
/**
 * GET /
 * This route serves the main index.html file as the frontend.
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


/**
 * POST /bfhl
 * This route processes an array of data and returns a structured JSON response.
 */
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: "Invalid input: 'data' must be an array."
            });
        }
        
        // ... (The rest of your API logic remains exactly the same) ...
        const odd_numbers = [];
        const even_numbers = [];
        const alphabets = [];
        const special_characters = [];
        let sum = 0;
        let alphabet_chars = '';

        data.forEach(item => {
            if (!isNaN(item) && item.trim() !== '' && !/[a-zA-Z]/.test(item)) {
                const number = parseInt(item, 10);
                if (number % 2 === 0) {
                    even_numbers.push(String(number));
                } else {
                    odd_numbers.push(String(number));
                }
                sum += number;
            }
            else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
                alphabet_chars += item;
            }
            else {
                special_characters.push(item);
            }
        });

        const reversed_alphabets = alphabet_chars.split('').reverse().join('');
        let concat_string = '';
        for (let i = 0; i < reversed_alphabets.length; i++) {
            if (i % 2 === 0) {
                concat_string += reversed_alphabets[i].toUpperCase();
            } else {
                concat_string += reversed_alphabets[i].toLowerCase();
            }
        }

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
        console.error("Error processing request:", error);
        res.status(500).json({
            is_success: false,
            user_id: "john_doe_17091999",
            message: "An internal server error occurred.",
            error_details: error.message
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
