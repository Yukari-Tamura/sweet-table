import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-sweet-tables',
  templateUrl: './sweet-tables.component.html',
  styleUrls: ['./sweet-tables.component.scss']
})
export class SweetTablesComponent implements OnInit {

  @Input() listHeaders:any;
  @Input() data:any;
  @ViewChild('table', {static: true}) table!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.moveRows();
  }

 
  moveRows() {
    const table : HTMLTableElement = this.table.nativeElement;

    const rows:HTMLCollectionOf<HTMLTableRowElement> = table.rows;
    let i = 0;
    //행의 길이를 반환합니다.
    for(i = 0; i < rows.length; i++){
      let row = rows[i] as any;

      row.setAttribute('draggable', true);

      row.addEventListener('dragstart', (event:any) => {
        row = event.target;
      })

      row.addEventListener('dragover', (event:any) => {
        var e = event;
         e.preventDefault();

         let allRows = Array.from(rows);

         if(allRows.indexOf(e.target.parentNode) > allRows.indexOf(row)){
          e.target.parentNode.after(row);
          
         }else{
          e.target.parentNode.before(row);
          
         }
          
      })
    }
  }

}
