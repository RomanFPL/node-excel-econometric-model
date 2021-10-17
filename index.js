import express from "express";
import axios from "axios";
import exportExcel from "./service/writeExcel.js";

const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running on "+PORT)
})

const worldApiDate = await axios.get("http://api.worldbank.org/v2/country?format=json&per_page=300").then(data => data.data[1]);
const worldApiIndicators = await axios.get("http://api.worldbank.org/v2/country?format=json&per_page=300").then(data => data.data[1]);

// worldApiDate.forEach(element => {
//     console.log(element)
// });

const date = worldApiDate.map(item =>{
    return [item.id, item.name, item.region.value];
});

const workSheetColumnNames = [
    "Country", "iso2Code", "region"
];

const workSheetName = "api";
const filePath = "./outputFiles/excelDate.xlsx"

exportExcel(date, workSheetColumnNames, workSheetName, filePath);
// exportApiDate(worldApiDate, workSheetColumnNames, workSheetName, filePath)