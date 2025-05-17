/*
 * @Date: 2025-05-17
 * @LastEditors: vhko
 * @LastEditTime: 2025-05-18
 * @FilePath: /Lychee/components/Sidebar.tsx
 * Helllllloo!
 */
'use client';
type MenuItem = {
  id: string;
  label: string;
};

type Props = {
  menuItems: MenuItem[];
  activeSection: string;
  onMenuClick: (id: string) => void; // 新增：点击时通知父组件
};

const Sidebar  = ({ menuItems, activeSection, onMenuClick }: Props) => {
  // 处理菜单点击
  const handleMenuClick = (id: string) => {
    console.log(`Clicked menu item: ${id}`);
    onMenuClick(id);
  };
  return (
    <div className="siderbar">
      <div className="p-4 text-2xl font-bold">Lychee Ai</div>
      <div className="siderbar-item ">
          {menuItems.map((item) => (
            <div key={item.id} className="">
              <button
                type="button"
                onClick={() => handleMenuClick(item.id)}
                className={`siderbar-btn ${
                  activeSection === item.id ? "bg-[#ff5b71] text-white" : ""
                }`}
              >
                {item.label}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Sidebar;
