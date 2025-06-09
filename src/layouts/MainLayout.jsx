import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      {/* TODO: Add Navbar */}
      <Outlet />
      {/* TODO: Add Footer */}
    </div>
  );
};

export default MainLayout;
