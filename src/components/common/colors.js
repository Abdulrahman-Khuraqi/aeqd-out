// colors.js (يمكنك نقلها لملف منفصل إذا أردت استخدام الألوان في أماكن أخرى)
const colors = {
    primary: {
      hover: 'hover:bg-white',
      background: 'bg-primary-500',
      text: 'text-neutral-900',
      focus: 'focus:ring-primary-300',
    },
    secondary: {
      background: 'bg-gray-500',
      text: 'text-white',
      hover: 'hover:bg-gray-700',
      focus: 'focus:ring-gray-300',
    },
    outline: {
      background: 'transparent',
      border: 'border border-white',
      text: 'text-white',
      hover: 'hover:bg-primary-500 hover:text-white-500',
      focus: 'focus:ring-blue-300',
    },
    danger: {
      background: 'bg-red-500',
      text: 'text-white',
      hover: 'hover:bg-red-700',
      focus: 'focus:ring-red-300',
    },
  };
  
  export default colors;
  