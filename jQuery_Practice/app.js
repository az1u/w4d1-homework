
// const makeThreeDiv= (container, string1, string2, string3) => {
//             //create a single color div
//     let colorOne = $('<div>').addClass('color')
//         colorOne.css({'background-color': string1, 'width': '200px','height': '200px','display': 'inline-block'})
//             $(container).append(colorOne)

//     let colorTwo = $('<div>').addClass('color')
//             colorTwo.css({'background-color': string2, 'width': '200px','height': '200px','display': 'inline-block'})
//                                     $(container).append(colorTwo)

//         let colorThree = $('<div>').addClass('color')
//             colorThree.css({'background-color': string3, 'width': '200px', 'height': '200px', 'display': 'inline-block'})
//                    $(container).append(colorThree)
// }
// --------------------------------------------------------------------------------------------------------------------
//declaring HTML elements as variables
const $topCon = $('<div class="top-container">')
const $botCon = $('<div class="bottom-container">')
const $h1 = $('<h1>').text("Trois Couleurs: rouge, blanc, et blue")
const $h1Too = $('<h1>').text("Lumpy Space Princess")
const $img = $('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTKP1gbMtdqRAeHt-UxjA12njZa-Y2ud8nw&usqp=CAU">')
//adding our div classes to HTML Body

$('body').append($botCon)
$('body').append($topCon)


//adding elements to top-container Div
$($topCon).append($h1)
$($topCon).append('<div class="color1">')
$($topCon).append('<div class="color2">')
$($topCon).append('<div class="color3">')

//adding elements to bottom container div
$($botCon).append($h1Too)
$($botCon).append('<div id="image-container>')
$($botCon).append($img)

//change top container
$($h1).append().text('Three Colors:Red, White, and Blue')

$('.color2').append().css("background-color", "black")
$('.color3').append().css("background-color", "orange")

$($h1).append().text('Three Colors:Red, Black, and Orange')


