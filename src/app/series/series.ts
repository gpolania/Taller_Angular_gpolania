export class Series {

  id: number;
  name: String;
  channel: String;
  seasons: number;
  description: String;
  webpage: String;
  poster: String;

  public constructor(id: number, nombre: String, canal: String, temporadas: number, descripcion: String, link: String, linkImagen: String){
      this.id = id;
      this.name = nombre;
      this.channel = canal;
      this.seasons = temporadas;
      this.description = descripcion;
      this.webpage = link;
      this.poster = linkImagen;
  }
}
