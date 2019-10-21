import { Component, OnInit } from '@angular/core';
import { MascotaService, Mascota } from '../../services/mascota.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {

  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService) { }

  ngOnInit() {
    this.mascotas = this.mascotaService.listarMascotas();
    console.log(this.mascotas);
  }

}
