
var solutionNumber = '2031'
function get(){
    
    var emptyArr = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]

    

    for(let i = 0; i < solutionNumber.length; i++){
        var num = parseInt(solutionNumber[i])
        emptyArr[i][num] = 1;
    }

    // var solution = [
    //     [0,1,0,0],
    //     [0,0,0,1],
    //     [1,0,0,0],
    //     [0,0,1,0],
    // ]

    var div = document.getElementById("div");
    
    var table = document.createElement('table')
    table.setAttribute('border','1')
    for(let i = 0; i < 4; i++){
        var tr = document.createElement('tr')

        for(let j = 0; j < 4; j++){
            var td = document.createElement('td');
            
            var newDiv = document.createElement('div')
            newDiv.style.height = '50px';
            newDiv.style.width = '50px';
            newDiv.style.backgroundColor = 'lightgray';

            if(emptyArr[i][j] == 1){
                var img = document.createElement('img')
                img.setAttribute('src','./queen.png')
                img.style.height = '50px'
                img.style.width = '50px'
                newDiv.appendChild(img)
            }
            
            td.appendChild(newDiv)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    div.appendChild(table)

}

function check(){
    var solutionNumber = '2031';
    var length = solutionNumber.length;

    var outerArray = []
    for(let i = 0; i < length; i++){
        var innerArray = []
        for(let j = 0;  j < length; j++){
            innerArray.push(0)
        }
        outerArray.push(innerArray)
    }

    var indexes = [];

    for(let i = 0; i < length; i++){
        var num = parseInt(solutionNumber[i])
        outerArray[i][num] = 1;
        indexes.push(i.toString()+','+num.toString())
    }

    console.log(indexes)



    // for(let i = 0; i < lenght){

    // }
}
