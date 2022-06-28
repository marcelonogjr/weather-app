export interface ChildrenProps {
  children: React.ReactNode;
}

type ThemeContextType = {
  theme: null | 'light' | 'dark';
  changeTheme: (newTheme: 'light' | 'dark') => void;
};

export default ThemeContextType;
