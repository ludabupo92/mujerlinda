
import { Injectable } from '@angular/core';

@Injectable()
export class MascotaService {

  private mascota: Mascota[] = [
    {
      nombre: "nucita",
      bio: "gatica muy consentida",
      img: "assets/adoptiones/gato1.jpg",
    },
    {
        nombre: "lupita",
        bio: "adorable",
        img: "assets/adoptiones/gato2.jpg",
      },
      {
        nombre: "luna",
        bio: "buena con los niños",
        img: "assets/adoptiones/gato3.jpg",
      },
      {
        nombre: "bolita de nieve",
        bio: "juguetona",
        img: "assets/adoptiones/gato4.jpg",
      }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  listarMascotas(): Mascota[] {
    return this.mascota;
  }

  verMascota( idx: string ) {
    return this.mascota[idx];
  }

  buscarMascotas( termino: string ): Mascota[] {

    let mascotaArr: Mascota[] = [];
    termino = termino.toLowerCase();

    for ( let i = 0; i < this.mascota.length; i ++ ) {

      let mascota = this.mascota[i];

      let nombre = mascota.nombre.toLowerCase();

      if ( nombre.indexOf( termino ) >= 0  ) {
        mascota.idx = i;
        mascotaArr.push( mascota );
      }

    }

    return mascotaArr;

  }


}


export interface Mascota {
  nombre: string;
  bio: string;
  img: string;
  idx?: number;
}
