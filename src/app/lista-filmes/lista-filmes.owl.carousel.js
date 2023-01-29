export function InicializarOwlCarousel() {
  $(document).ready(function () {
    const carouselFilmes = $("#carousel-filmes");

    carouselFilmes.owlCarousel({
      // loop: true,
      margin: 40,
      nav: true,
      navText: ['Anterior', 'Próximo']
    });

  });
}