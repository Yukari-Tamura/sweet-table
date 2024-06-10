import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'ngx-sweet-tables',
  templateUrl: './sweet-tables.component.html',
  styleUrls: ['./sweet-tables.component.scss']
})
export class SweetTablesComponent implements OnInit {

  @Input() listHeaders:any;
  @Input() data:any;
  @ViewChild('table') table!:ElementRef;

  row!:HTMLTableRowElement;

  private _unsubscribe: Subject<void>;

  constructor( private _render2:Renderer2) { 
    this._unsubscribe = new Subject<void>();
  }


  ngOnInit(): void {
    
  }
  

  ngAfterViewInit(): void{
    this.enableRowDragging();
  }

  ngOndestroy():void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  enableRowDragging():void {
    const table : HTMLTableElement = this.table.nativeElement;
    const rows: HTMLCollectionOf<HTMLTableRowElement> = table.rows;

    for(let i = 0; i < rows.length; i++){
      this.row = rows[i] as any;

      this._render2.setAttribute(this.row, 'draggable', 'true');
      this._handleRowDragStart(this.row);
      this._handleRowDragOver(this.row, rows);
    }
  }

 
  private _handleRowDragStart(rowElement: HTMLTableRowElement): void {
    fromEvent(rowElement, 'dragstart').pipe(takeUntil(this._unsubscribe)).subscribe(event => {
      this.row = event.target as HTMLTableRowElement;
    })
  }

  private _handleRowDragOver(rowElement: HTMLTableRowElement, rows: HTMLCollectionOf<HTMLTableRowElement>): void {
    fromEvent(rowElement, 'dragover').pipe(takeUntil(this._unsubscribe)).subscribe(dragEvent => {
      dragEvent.preventDefault();

      let allRows: HTMLTableRowElement[] = Array.from(rows);
      const targetRow = (dragEvent.target as HTMLTableRowElement).closest('tr');

      if(targetRow && targetRow !== this.row){
        if(allRows.indexOf(targetRow) > allRows.indexOf(this.row)){
          targetRow.after(this.row)
        } else {
          targetRow.before(this.row);
        }
      }
    }
    
  )
  }

}
