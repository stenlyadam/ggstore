// import Sidebar from '../../../components/organisms/Sidebar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      {/* <Sidebar activeMenu="transactions" /> */}
      <TransactionDetailContent />
    </section>
  );
}
