import { Component } from '@angular/core';

@Component({
  selector: 'app-produclist',
  templateUrl: './produclist.component.html',
  styleUrls: ['./produclist.component.css']
})
export class ProduclistComponent {

  imageWith:number=50;
  imageMargin=2;
  muestraImg:boolean=true;
  listFilter:string='';

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"Febrero 3 2020",
      "precio":120000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "imagenURL":"https://img.remediosdigitales.com/e506e7/nissan-sentra-2020-1/1366_2000.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"Marzo 5 2020",
      "precio":180000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7IOi-RH9VES0oeiEKZ-eqCR3b55lprGfShncKXxMgBejwGaeeIP1e6bEm2kvyhsGc0M&usqp=CAU"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 Puertas familiar",
      "year":"Enero 2 2023",
      "precio":200000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenURL":"https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/rio-hb-bn/exterior/img_RioHB_exterior1_w.jpg"
    }
  ]

}
