import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public navigatorLinks = [
    {
      name: "Inicio",
      link: "#inicio",
    },
    {
      name: "Series TV",
      link: "#seriestv",
    },
    {
      name: "Películas",
      link: "#peliculas",
    },
    {
      name: "Novedades más vistas",
      link: "#novedades",
    },
    {
      name: "Mi lista",
      link: "#milista",
    },
  ];

  public hero =
    {
      title: "Las 5 más populares en España hoy",
      gallery: [{
        position: 1,
        image: "./assets/images/Top10/1-papel.webp",
        name: "La Casa de Papel",
      },
      {
        position: 2,
        image: "./assets/images/Top10/2-reina.webp",
        name: "La Reina del Flow"
      },
      {
        position: 3,
        image: "./assets/images/Top10/3-titanes.webp",
        name: "Titans"
      },
      {
        position: 4,
        image: "./assets/images/Top10/4-lostinspace.webp",
        name: "Lost in Space"
      },
      {
        position: 5,
        image: "./assets/images/Top10/5-dondecaben.webp",
        name: "Donde Caben"
      }]
    }
  ;

  public terrorFilms =
    {
      section: "Terror",
      films:[{

        image:"./assets/images/Terror/apostol.jpg",
      },
      {

        image:"./assets/images/Terror/calleterror.jpg",
      },
      {

        image:"./assets/images/Terror/infiernoagua.webp",
      },
      {

        image:"./assets/images/Terror/insidious2.webp",
      },
      {

        image:"./assets/images/Terror/malasana.webp",
      }]
    }


  public comedyFilms =
    {
      section: "Comedia",
      films:[{

        image:"./assets/images/Comedia/casi300.webp",
      },
      {

        image:"./assets/images/Comedia/cazafantasmas.webp",
      },
      {

        image:"./assets/images/Comedia/erasehollywood.webp",
      },
      {

        image:"./assets/images/Comedia/family guy.webp",
      },
      {

        image:"./assets/images/Comedia/rickandmorty.webp",
      }]
    }

    public dramaFilms =
    {
      section: "Drama",
      films:[{

        image:"./assets/images/Drama/1917.webp",
      },
      {

        image:"./assets/images/Drama/arrival.webp",
      },
      {

        image:"./assets/images/Drama/clublucha.webp",
      },
      {

        image:"./assets/images/Drama/corazones.webp",
      },
      {

        image:"./assets/images/Drama/culpable.webp",
      },
      {

        image:"./assets/images/Drama/naufrago.webp",
      }]
    }
    public scifiFilms =
    {
      section: "Sci-Fi",
      films:[{
        image:"./assets/images/Sci-fi/1917.webp",
      },
      {
        image:"./assets/images/Sci-fi/6dia.webp",
      },
      {
        image:"./assets/images/Sci-fi/12monos.webp",
      },
      {
        image:"./assets/images/Sci-fi/afterearth.webp",
      },
      {
        image:"./assets/images/Sci-fi/core.webp",
      },
      {
        image:"./assets/images/Sci-fi/startrek.webp",
      }]
    }
    public animeFilms =
    {
      section: "Anime",
      films:[{
        image:"./assets/images/Anime/mononoke.webp",
      },
      {
        image:"./assets/images/Anime/castilloambulante.webp",
      },
      {
        image:"./assets/images/Anime/chihiro.webp",
      },
      {
        image:"./assets/images/Anime/gundam.webp",
      },
      {
        image:"./assets/images/Anime/ninokuni.webp",
      },
      {
        image:"./assets/images/Anime/perfectblue.webp",
      }]
    }

}
