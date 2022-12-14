import css from '../TransactionHistory/TransactionHistory.module.css';
import propTypes, { arrayOf } from 'prop-types';

export default function TransactionHistory(props) {
    const {items} = props;

    return (
        <table className={css.transactionHistory}>
        <thead className={css.transactionHeader}>
            <tr className={css.transactionValue}>
            <th className={css.rowHeader}>Type</th>
            <th className={css.rowHeader}>Amount</th>
            <th className={css.rowHeader}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => 
                <tr key={item.id} className={css.transactionValue}>
                <td className={css.transactionDataValue}>{item.type}</td>
                <td className={css.transactionDataValue}>{item.amount}</td>
                <td className={css.transactionDataValue}>{item.currency}</td>
                </tr>     
            )}
        </tbody>
        </table>
    );
};

TransactionHistory.protoType = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        type: propTypes.string.isRequired,
        amount: propTypes.number.isRequired,
        currency: propTypes.string.isRequired,
      })
    ).isRequired,
  };