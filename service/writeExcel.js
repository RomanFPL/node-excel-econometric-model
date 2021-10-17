import xlsx from "xlsx";
import path from "path";


const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [
        workSheetColumnNames, 
        ...data
    ];

    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(workBook, path.resolve(filePath))
}

const exportApiDate = (dateValues, workSheetColumnNames, workSheetName, filePath) => {
    const date = dateValues.map(item =>{
        return [item.id, item.name, item.region.value];

    });
    exportExcel(date, workSheetColumnNames, workSheetName, filePath);
}

export default exportExcel;