import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CartItemStatus} from "../../../../@domain/user-cart/types";

@Component({
  selector: 'app-status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'cell-container'
  }
})
export class StatusCellComponent {
  @Input()
  public status!: CartItemStatus;

  public CartItemStatus = CartItemStatus;
}
