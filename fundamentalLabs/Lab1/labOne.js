// WITHOUT CONSOLE LOG
    // "" + 1 + 0 /* "1" */
    // "" - 1 + 0 /* "-1" */
    // true + false /* true */
    // !true /* false */
    // 6 / "3" /* "2" */
    // "2" * "3" /* "6" */
    // 4 + 5 + "px" /* "9px" */
    // "$" + 4 + 5 /* "$9" */
    // "4" - 2 /* "2" */
    // "4px" - 2 /* "2px" */
    // " -9 " + 5 /* " -4 " */
    // " -9 " - 5 /* " -14 " */
    // null + 1 /* " -4 " */
    // undefined + 1 /* 0 */
    // undefined == null /* true */
    // undefined === null /* false */
    // " \t \n" - 2* /* error */

// WITH CONSOLE LOG
    console.log("" + 1 + 0); // 10
    console.log("" - 1 + 0); // -1
    console.log(true + false); // 1
    console.log(!true); // false
    console.log(6 / "3"); // 2
    console.log("2" * "3"); // 6
    console.log(4 + 5 + "px"); // 9px
    console.log("$" + 4 + 5); // $45
    console.log("4" - 2); // 2
    console.log("4px" - 2); // NaN
    console.log(" -9 " + 5); // -9 5
    console.log(" -9 " - 5); // -14
    console.log(null + 1); // 1
    console.log(undefined + 1); // NaN
    console.log(undefined == 1); // false
    console.log(undefined === 1); // false
    console.log(" \t \n" - 2); // -2