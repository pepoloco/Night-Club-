import axios from "axios";
let client_id = 'cb6ed9e71b1b4357b92734894a00f6f8';
let client_secret = 'ab757ddd68654b29b3781eba29f36a32'
let redirect_uri = 'http://localhost:3000';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { code } = req.body;

        try {
            const url = 'https://accounts.spotify.com/api/token';
            const data = new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirect_uri,
                client_id: client_id,
                client_secret: client_secret
            });
            const spotifyResponse = await axios.post(url, data, {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
                }
            });
            res.status(200).json(spotifyResponse.data); // Send the received tokens back to the client
        } catch (err) {
            res.status(500).json({ message: 'Error exchanging token', error: err.message }); // Send error message back to client
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed'); // Handle non-POST requests
    }
}
