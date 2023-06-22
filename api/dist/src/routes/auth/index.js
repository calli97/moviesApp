"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userHandlers_1 = require("../../handlers/userHandlers");
const router = (0, express_1.Router)();
router.post("/signin", userHandlers_1.signIn);
router.post("/signup", userHandlers_1.signUp);
exports.default = router;
