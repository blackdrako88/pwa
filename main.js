//Service worker
if('serviceWorker' in navigator){
    console.log('Puedes usar los service worker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('service worker cargado correctamente', res))
                            .catch(err => console.log('No se a podido registrar el sevice worker', err));
}
else {console.log('No puedes');}


//Scroll suavisado
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();
        
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });

        return false;
    });
});