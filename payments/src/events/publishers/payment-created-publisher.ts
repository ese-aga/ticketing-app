import { Subjects, Publisher, PaymentCreatedEvent } from '@esetickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}