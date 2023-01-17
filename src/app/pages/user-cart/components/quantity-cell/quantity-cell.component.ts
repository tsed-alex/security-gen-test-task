import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {UserCartItemModelView} from "../../../../@domain/user-cart/user-cart-item.model-view";

@Component({
  selector: 'app-quantity-cell',
  templateUrl: './quantity-cell.component.html',
  styleUrls: ['./quantity-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'cell-container'
  }
})
export class QuantityCellComponent {
  @Input()
  public data!: UserCartItemModelView;

  @Output()
  public quantityChanged = new EventEmitter<void>();

  public onRemove(event: MouseEvent) {
    debugger;
    event.stopPropagation();
    this.data.removeOne();
    this.quantityChanged.next(void 0);
  }

  public onAdd(event: MouseEvent) {
    event.stopPropagation();
    this.data.addOne();
    this.quantityChanged.next(void 0);
  }
}
