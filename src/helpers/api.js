// import axios from "axios";
import { del, get, post, put } from "./api_helper";


export const demo = {
	list: () => get('/modalities'),
};