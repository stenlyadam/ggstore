import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './MenuItem';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="overview"
            active={activeMenu === 'overview'}
          />
          <MenuItem
            title="Transactions"
            icon="transactions"
            href="/member/transactions"
            active={activeMenu === 'transactions'}
          />
          <MenuItem title="Messages" icon="messages" />
          <MenuItem title="Card" icon="card" />
          <MenuItem title="Rewards" icon="rewards" />
          <MenuItem
            title="Settings"
            icon="settings"
            href="/member/edit-profile"
            active={activeMenu === 'settings'}
          />
          <MenuItem title="Log Out" icon="logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
