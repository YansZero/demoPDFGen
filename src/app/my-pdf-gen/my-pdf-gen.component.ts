import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import '../../assets/fonts/NotoSansTC-Regular-normal.js';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-my-pdf-gen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-pdf-gen.component.html',
  styleUrl: './my-pdf-gen.component.scss',
})
export class MyPdfGenComponent {
  @ViewChild('table') table!: ElementRef;

  exportToPDF() {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.setFont('NotoSansTC-Regular');

    // 獲取表格內容
    const table = this.table.nativeElement;

    // 使用 jspdf-autotable 轉換表格為 PDF
    autoTable(doc, {
      html: table,
      styles: { font: 'NotoSansTC-Regular' }, // 指定使用思源繁體字體
    });

    // 輸出 PDF 檔案
    doc.save('table.pdf');
  }
}
