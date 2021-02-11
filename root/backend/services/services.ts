import { Board, BoardStructure } from "../models/Board";
import {defaultPuzzle, emptyCellValue, possibleSudokuValues} from "../models/constants";

export interface Strategy {
 solve(data: Board): any;
 validateSolved(data: Board): boolean;
}



