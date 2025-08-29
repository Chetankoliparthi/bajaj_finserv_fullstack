const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// POST endpoint for /bfhl
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: 'Invalid input format. Data should be an array.' });
        }

        // Initialize response fields
        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let concatString = '';

        // Process the input data
        data.forEach(item => {
            if (/^\d+$/.test(item)) { // Check if it's a number
                const number = parseInt(item, 10);
                if (number % 2 === 0) {
                    evenNumbers.push(item);
                } else {
                    oddNumbers.push(item);
                }
                sum += number;
            } else if (/^[a-zA-Z]+$/.test(item)) { // Check if it's an alphabet
                alphabets.push(item.toUpperCase());
                concatString = item + concatString; // Reverse order
            } else { // Special characters
                specialCharacters.push(item);
            }
        });

        // Generate alternating caps for concatenated string
        let alternatingCaps = '';
        let upper = true;
        for (const char of concatString) {
            alternatingCaps += upper ? char.toUpperCase() : char.toLowerCase();
            upper = !upper;
        }

        // Prepare the response
        const response = {
            is_success: true,
            user_id: 'john_doe_17091999', // Example user_id
            email: 'john@xyz.com',
            roll_number: 'ABCD123',
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(),
            concat_string: alternatingCaps
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, error: 'Server error.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});