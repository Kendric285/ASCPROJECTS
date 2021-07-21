function lottoCheck(ticket){
    let hMatch = false;
    let hMatchType = ''
    let vMatch = false;
    let vMatchType = ''

    let column1 = []
    let column2 = []
    let column3 = []

    //this code finds a horizontal match
    for(i = 0; i < 3; i++){
        console.log(ticket[i])

        column1.push(ticket[i][0])
        column2.push(ticket[i][1])
        column3.push(ticket[i][2])

        if(ticket[i][0] == ticket[i][1] && ticket[i][0] == ticket[i][2]){
            hMatch = true
            hMatchType = ticket[i][0]
        }
    }
    // console.log(hMatchType)
    // console.log(column1)
    // console.log(column2)
    // console.log(column3)

    for(i = 0; i < 3; i++){
        if(column1[i][0] == column1[i][1] && column1[i][0] == column1[i][2]){
            vMatch = true
            vMatchType = ticket[i][0]
        }
    }

    for(i = 0; i < 3; i++){
        if(column2[i][0] == column2[i][1] && column2[i][0] == column2[i][2]){
            vMatch = true
            vMatchType = ticket[i][0]
        }
    }

    for(i = 0; i < 3; i++){
        if(column3[i][0] == column3[i][1] && column3[i][0] == column3[i][2]){
            vMatch = true
            vMatchType = ticket[i][0]
        }
    }
    

    if (vMatch){
        console.log('there is a vertical match of',vMatchType)
    }
    else{
        console.log('There is no veritcal match')

    }

    if (hMatch){
        console.log('There is a horizontal match of', hMatchType)
    }
    else{
        console.log('There is no horizontal match')
    }
    
    console.log(vMatch)
    console.log(vMatchType)

    console.log(hMatch)
    console.log(hMatchType)





    
}




let userTicket = [
    ['gold',  'copper',  'copper'   ],
    ['gold',    'silver',  'silver'    ],
    ['gold',    'diamond', 'luckySeven']
]


lottoCheck(userTicket)