"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.index = void 0;
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = Service.getRootData()
    res.send("upadate is code fro sessions strict  ");
});
exports.index = index;
const read = (req, res) => {
    req.session.veiw ? req.session.veiw++ : req.session.veiw = 1;
    const view = req.session.veiw;
    res.send(`you visited this page ${view}`);
};
exports.read = read;
