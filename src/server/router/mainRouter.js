"use strict";

import express from "express";
import {
    getHome,
    getMap,
    getQr,
    postQr,
    getCourse,
    getMypage
} from "../controller/mainController";
import { loginCheck } from "../middleware/loginCheck";

const mainRouter = express.Router();

mainRouter.get("/", loginCheck, getHome)
mainRouter.get("/map", loginCheck, getMap)
mainRouter.route("/qr").get(loginCheck, getQr).post(postQr);
mainRouter.get("/course", loginCheck, getCourse)
mainRouter.get("/mypage", loginCheck, getMypage)

export default mainRouter;