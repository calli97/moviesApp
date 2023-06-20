export function csvParser(csvText: string) {
    const rows = csvText.split("\n");
    for (let i = 0; i < rows.length; i++) {
        console.log("Row: ", i, "  --", rows[i]);
    }
}
