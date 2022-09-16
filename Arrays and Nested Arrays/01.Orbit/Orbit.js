function func(input){
    let a = input[0];
    let b = input[1];
    let c = input[2];
    let d = input[3];

    let matrix = [];
    for (let index = 0; index < a; index++) {

       matrix.push([]);
    }
    for(let row = 0; row< a; row++) {
        for(let col=0; col<b; col++) {
            matrix[row][col] = Math.max(Math.abs(row - c), Math.abs(col - d)) + 1;
        }
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
   
    
}
func([5, 5, 2, 2]);