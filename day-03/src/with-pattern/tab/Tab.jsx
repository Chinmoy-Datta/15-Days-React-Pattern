function Tab({ children }) {
  return <div className="tab-root">{children}</div>;
}

function TabButton({ children }) {
  return <div className="tab-switcher">{children}</div>;
}

Tab.Button = TabButton;

export default Tab;
