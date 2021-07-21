
function drawTree() {
    console.log("   *   ")
    console.log("  *** ")
    console.log(" ****** ")
    console.log("********")
    console.log("  ***  ")
    console.log("  ***  ")
    console.log("")
}

function tree(rows){
    let rowText = "   *   "
    for(i = 0; i < rows; i++){
        if( i == 0){
            console.log(rowText)
        }
    }
}
function multipleTrees(trees){
    for(i = 0; i < trees; i++){
        drawTree();
    }
}

multipleTrees(3)