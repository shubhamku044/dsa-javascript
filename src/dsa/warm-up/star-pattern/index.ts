console.log("Star Pattern Program");

/*

*
* *
* * * 
* * * *

*/

function pattern1(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern.trim());
  }
}

pattern1(4);

/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

function pattern2(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += `${j.toString()} `;
    }
    console.log(pattern.trim());
  }
}

pattern2(5);

/*

      *
    * *
  * * * 
* * * *

*/

function pattern3(rows: number): void {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 2 * (rows - i); j > 0; j--) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += `* `;
    }
    console.log(pattern);
  }
}
pattern3(4);
