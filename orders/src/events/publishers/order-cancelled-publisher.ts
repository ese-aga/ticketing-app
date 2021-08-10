import { Subjects, Publisher, OrderCancelledEvent } from '@esetickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}