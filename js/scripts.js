// jQuery(document).ready(function() {
//     console.log("listo 1");
// });

$(function() {
    'use strict';
    // //-----------------------------------------------------------
    // //efectos a barra de nuestrso servicios
    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    $('.servicios nav a').on('click', mostrarTabs);

    function mostrarTabs() {
        $('.servicios nav a').removeClass('activo');
        $(this).addClass('activo');
        var enlace = $(this).attr('href') //this toma el enlace de al que hizo click
            //console.log(enlace);//imp asesor tran viajes
        $('.nuestros-servicios div').fadeOut(); //ocultalos
        $(enlace).fadeIn();
        return false; //no brinco
    }

    // //-----------------------------------------------------------
    // //arreglos
    // var proximosViajes = ['londres', 'valencia', 'madrid', 'paris', 'milan'];
    // //console.log(proximosViajes);
    // $.each(proximosViajes, function(i, v) { //i posicion,v valor
    //     console.log(i);
    //     console.log(v);

    //     if (i == 0) {
    //         $('aside').append('<h2>Proximos Viajes</h2>'); //posicion 0 encabezado
    //     }
    //     $('aside').append('<li>' + v + '</li>');
    // });

    // var viajesPorFecha = {
    //     primero: 'londres',
    //     segundo: 'valencia',
    //     tercero: 'madrid',
    //     cuarto: 'paris',
    //     quinto: 'milan'
    // };
    // console.log(viajesPorFecha);
    // $.each(viajesPorFecha, function(i, v) {
    //     $('aside').append('<li>' + i + ' - ' + v + '</li>');
    // });

    //-----------------------------------------------------------
    //ejemplo ayax 2 html
    // $('aside').load('descuentos.html');
    // $('div.logo img').on('click', function() {
    //     $('aside').load('descuentos.html'); //para carcar un archivo dando click
    // });

    //-----------------------------------------------------------
    //ejemplo usando ajax txt
    // $('div.logo img').on('click', cargarAjax);
    // function cargarAjax() {
    //     $.ajax('promociones.txt', {
    //         success: agregarContenido,
    //         type: 'GET',
    //         datatype: 'text'
    //     });
    // }

    // function agregarContenido(data, status, jqxhr) {
    //     $('aside').text(data);
    //     console.log(status);
    // }

    // $('.navegacion').show();

    //-----------------------------------------------------------
    // //creacion de animaciones basadas en css
    // $('.logo img').click(function() {
    //     $('main article:first').slideUp(1000); //tiempo de la animacion elimina el primero y lo arrastra
    // });
    // $('aside').click(function() {
    //     $('main article:first').slideDown(1000);

    // });

    //-----------------------------------------------------------
    // //creacion de animaciones basadas en css
    // $('.logo img').on('click', function() {
    //     $(this).animate({ 'width': '200px' }, 1000) //1000 tiempo animacion del titulo
    // });
    // //crecer la imagen
    // $('main article img').on('mouseenter', aumnetarImagen);
    // $('main article img').on('mouseleave', disminuirImagen);

    // function aumnetarImagen() {
    //     $(this).animate({ 'width': '100%' });
    // };

    // function disminuirImagen() {
    //     $(this).animate({ 'width': '350px' });
    // };

    //-----------------------------------------------------------
    // //cambiar estilos css
    // $('.logo img').css({ 'width': '400px' }); //tamano del titulo
    // $('main article h2').css({ 'color': 'pink' }); //color rosa
    // $('aside').css({
    //     'background-color': '#e1e1e1', //color fonco
    //     'text-transform': 'uppercase', //mayusculas
    //     'padding': '20px' //espacio
    // });
    // $('.navegacion ul li a').on('mouseenter', cambiarColor);

    // function cambiarColor() {
    //     $('.navegacion').css('background-color', 'red')
    // }

    //-----------------------------------------------------------
    // //cambiar imagen al dar click 
    // $('main article:first img').on('click', function() {
    //     $(this).attr('src', 'img/imagen_2.jpg');//cambia la imagen por la dos
    // })

    //-----------------------------------------------------------
    // //traverse in recorrer el documento
    // $('.navegacion').show();
    //  $('.navegacion ul li:first a').attr('href','http://');
    // $('.navegacion ul li:first a').attr('target','_blank');

    //-----------------------------------------------------------
    // //manejo de clases pro
    // $('main').on({
    //     click: function() {
    //         $(this).addClass(' fondorojo');
    //     },
    //     mouseenter: function() {
    //         $(this).addClass('activo');
    //     },
    //     mouseleave: function() {
    //         $(this).addClass('fondoazul');
    //     }
    // })

    //-----------------------------------------------------------
    // //manejo de clases cuadros amarillos
    // $('div.logo img').addClass('activo'); //margen amarillo
    // $('.navegacion').show(); //,uestra lo que coultamos
    // //$('.navegacion ul li:first ').addClass('activo'); //amarillo inicio
    // $('main article:first ').addClass('activo');

    // $('.navegacion ul li a').on('click', function(e) {
    //     $('.navegacion ul li a').removeClass('activo'); //remueve si alguine mas lo tiene
    //     e.preventDefault(); //previene u evento en lugar de mandarte a otra pag
    //     $(this).addClass('activo'); //margen al rededor de cada enlace que le doy link
    // });

    //-----------------------------------------------------------
    // //evento pasar sobre el logo
    // $('#menu').on('click', function() {
    //     $('#navegacion').show();//muestra el elemento,hide opuesto(css dispaly:none)
    // });

    //-----------------------------------------------------------
    // //evento pasar sobre el logo
    // $('div.logo img').on('mouseenter', function() {
    //     console.log('sobre el logo'); //cuando paso sobre el logo escribe 
    // });
    // $('div.logo img').on('mouseleave', function() {
    //     console.log('fuer del logo'); //cuando paso sobre el logo escribe 
    // });

    //-----------------------------------------------------------
    // //evento desaparecr logo 
    // $('div.logo img').on('click', function() {
    //     $(this).remove(); //es el elemento que causa el evente en este caso la img y la borra
    // });

    //-----------------------------------------------------------
    // //evento click en logo
    // $('div.logo img').on('click', function() { //cuando,funcion
    //     console.log('hiciste clic en logo');
    // });

    //-----------------------------------------------------------
    // //$('main article:first').remove();//elimina uno de los articulos
    // $('main article:first').hide(); //oculta el articulo

    // //clonar elementos
    // var copia = $(' main article:last').clone(); //clona el elento
    // //$('main').append(copia); //a donde lo vamos a mandar ,al final 
    // //$('main').prepend(copia); //a donde lo vamos a mandar,al principio


    // var copia2 = $(' main article:last').clone();
    // $(copia2).appendTo('main');//clon a la parte final y prependTo al inicio
});