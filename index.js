let homeCount = 0
let homeScore = document.getElementById("home-score")
let guestCount = 0
let guestScore = document.getElementById("guest-score")

function add1PointH(){
    homeCount += 1
    homeScore.textContent = homeCount
    console.log(homeCount)
}

function add2PointsH(){
    homeCount += 2
    homeScore.textContent = homeCount
    console.log(homeCount)
}

function add3PointsH(){
    homeCount += 3
    homeScore.textContent = homeCount
    console.log(homeCount)
}

function add1PointG(){
    guestCount += 1
    guestScore.textContent = guestCount
    console.log(guestCount)
}

function add2PointsG(){
    guestCount += 2
    guestScore.textContent = guestCount
    console.log(guestCount)
}

function add3PointsG(){
    guestCount += 3
    guestScore.textContent = guestCount
    console.log(guestCount)
}