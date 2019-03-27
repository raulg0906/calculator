$(function(){

    $('#add').on('click', function(e){
        e.preventDefault()

        var num1 = Number($('#num1').val())
        var num2 = Number($('#num2').val())
        $('#answer').html(num1 + num2)
    })

})

$(function(){

    $('#multiply').on('click', function(e){
        e.preventDefault()

        var num1 = Number($('#num1').val())
        var num2 = Number($('#num2').val())
        $('#answer').html(num1 * num2)
    })

})

$(function(){

    $('#subtract').on('click', function(e){
        e.preventDefault()

        var num1 = Number($('#num1').val())
        var num2 = Number($('#num2').val())
        $('#answer').html(num1 - num2)
    })

})

$(function(){

    $('#divide').on('click', function(e){
        e.preventDefault()

        var num1 = Number($('#num1').val())
        var num2 = Number($('#num2').val())
        $('#answer').html(num1 / num2)
    })

})