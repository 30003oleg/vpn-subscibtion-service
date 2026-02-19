import { Invoice } from './payment/invoice.model.js';
import { User } from './users/users.model.js';

User.hasMany(Invoice, { foreignKey: 'userId' });
Invoice.belongsTo(User, { foreignKey: 'userId' });

export { User, Invoice };
