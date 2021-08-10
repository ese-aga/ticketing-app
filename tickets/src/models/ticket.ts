import moongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface TicketAttrs {
    title: string;
    price: number;
    userId: string
}

interface TicketDoc extends moongoose.Document {
    title: string;
    price: number;
    userId: string;
    version: number;
    orderId?: string;
}

interface TicketModel extends moongoose.Model<TicketDoc> {
    build(attrs: TicketAttrs): TicketDoc;
}

const ticketShema = new moongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        orderId: {
            type: String,
        },
    }, 
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            }
        }
    }
);
ticketShema.set('versionKey', 'version');
ticketShema.plugin(updateIfCurrentPlugin);

ticketShema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket(attrs);
};

const Ticket = moongoose.model<TicketDoc, TicketModel>('Ticket', ticketShema);

export { Ticket };