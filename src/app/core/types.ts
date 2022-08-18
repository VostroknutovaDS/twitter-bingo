export type BingoElement = {
    id: string,
    value: string,
    isGenerated?: boolean
};

export type Table = {
    table: BingoElement[][],
    numberOfEmptyCells: number
}