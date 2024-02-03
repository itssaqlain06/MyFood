const express = require("express");
const router = express.Router();
const userSchema = require("../Models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const jwtSecretKey = "HiThereMyNameIsSaqlainIAmFullStackApplicationDeveloper";

router.post('/createuser',
    [
        body('email', "Invalid email format").isEmail(),
        body('password', "Password minimum length is 5").isLength({ min: 5 })
    ]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);
        try {
            await userSchema.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            console.error("Error:", error);
            res.json({ success: false });
        }
    });

router.post('/loginuser',
    [
        body('email', "Invalid email format").isEmail(),
        body('password', "Password minimum length is 5").isLength({ min: 5 })
    ]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }
        try {
            let userData = await userSchema.findOne({
                email: req.body.email
            })
            if (!userData) {
                return res.status(400).json({ errors: "The requested email does not exits!" });
            }
            const pwdCompare = bcrypt.compare(req.body.password, userData.password);
            console.log("Password comparison result:", pwdCompare);
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Incorrect Password!" });
            }
            const data = {
                user: {
                    id: userData._id,
                }
            }
            const authenticationToken = jwt.sign(data, jwtSecretKey, { expiresIn: '24h' })
            res.json({ success: true, authToken: authenticationToken });
        } catch (error) {
            console.error("Error:", error);
            res.json({ success: false });
        }
    });
module.exports = router;