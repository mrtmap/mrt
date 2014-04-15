$('svg').attr({
    'version': '1.1',
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'viewBox': '0 0 1100 800',
    'enable-background': 'new 0 0 1100 800',
    'xml:space': 'preserve'
});

//pop

var lineLength = Object.keys(allLine);

$('.ldots b').click(function () {
    $('.cover').show();
    var poph = $(this).text();
    $('h1').text(poph);
    for (var i = 1; i <= lineLength.length; i++)
        if ($(this).parent().hasClass(allLine['line' + i])) {
            $('.cover span').addClass(allLine['line' + i] + '-border');
        }
})
$('.cover').click(function () {
    $(this).hide();
    $('.cover span').removeClass();
    $('.cover em').html()
})

//guide

$('.lines-name li').click(function () {
    $('.lines-name li').css('opacity', '.2')
    $(this).attr('style', '')
    var lName = $(this).attr('class');
    var lSelected = '.ldots.' + lName;
    var lsvg = '#' + lName;
    $('.ldots,svg').attr('style', '');
    $('.cover-w').fadeIn(100);
    $(lSelected + ',' + lsvg).css('z-index', '200');
    $(lSelected + ' b.hfmsk').attr('class', 'hfmsk-selected')
});
$('.main').click(function () {
    $('.cover-w').fadeOut(100);
    $('.ldots,svg,.lines-name li').attr('style', '');
    $('b.hfmsk-selected').attr('class', 'hfmsk')
})

//price

$('.ldots b').click(function () {
    if (price.hasOwnProperty($(this).children().text())) {
        var pm = price[$(this).children().text()];
        $('.cover em').html('<b>' + pm[0] + '</b><b>' + pm[1] + '</b>');
    } else {
        $('.cover em').html('<b>N/A</b><b>N/A</b>');
    }
})