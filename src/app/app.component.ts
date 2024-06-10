import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sweet-tables';

  listHeaders:any[] = [];
  data:any[] = [];


  ngOnInit(){
    this.listHeaders.push( {header: 'Ventas',width: '200px', class:"normal"},
      {header: 'Detalle',width: '450px', class:"normal"},
      {header: 'Cantidad',width: '150px', class:"normal"},
      {header: 'Precio Unitario',width: '200px', class:"normal"},
      {header: 'Subtotal',width: '150px', class:"normal"},
      {header: '% + o -',width: '150px', class:"normal"},
      {header: 'Recargo / Descuento',width: '250px', class:"normal"},
      {header: 'Total',width: '150px', class:"normal"},
      {header: 'Tipo Iva',width: '150px', class:"normal"}
   )


//Data
this.data.push( { ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 1',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 2',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 3',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 4',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 5',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 6',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 7',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 8',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
},
{ ventas: 'Seguriad Privada',
 Detalle: 'Servicios especiales colineal 9',
 cantidad: '1.00',
 precioUnitario: '199.25',
 subtotal: '199.25',
 cadena: '0.00',
 recargo: '0.00',
 total: '195.25',
 tipoIva: '15%'
}
)
  }

}
