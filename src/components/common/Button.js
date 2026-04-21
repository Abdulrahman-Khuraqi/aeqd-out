//ak-components
//Button v0.1 2024-11-27 02:22:24

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import colors from './colors'; // استيراد الألوان الافتراضية
import Link from 'next/link';

const Button = ({
  rel,
  tag,
  children,
  variant = 'primary', // تعيين "primary" كقيمة افتراضية
  size = 'md', // الحجم الافتراضي
  className, // كلاس مخصص لتخصيص الأنماط
  textColor, // لون النص المخصص
  backgroundColor, // لون الخلفية المخصص
  borderColor, // لون الحدود المخصص
  hover, // تأثير hover مخصص
  focus, // تأثير focus مخصص
  active, // تأثير active مخصص
  disabledStyle, // تأثير disabled مخصص
  href,
  iconBefore,
  iconAfter,
  style, // أنماط مخصصة مضمنة
  disabled = false,
  ...props
}) => {
  const baseStyles = `font-medium rounded-full inline-flex  items-center justify-center gap-1 
    focus:outline-none focus:ring transition duration-200 ease-in-out`;

  // الأنماط الافتراضية بناءً على النوع
  const defaultStyles = {
    ...colors.primary,      // Default to primary styles
    ...(colors[variant] || {}) // Override with the selected variant's styles
  };

  const buttonStyles = clsx(
    
    baseStyles,
    size === 'sm' && 'py-1 px-3 text-sm',
    size === 'md' && 'py-2 px-4 text-base',
    size === 'lg' && 'py-2 px-6 text-lg',
    disabled && 'opacity-50 cursor-not-allowed',
    backgroundColor ? `bg-${backgroundColor}` : defaultStyles.background, // Use custom or default background
    !textColor && defaultStyles.text,
    !borderColor && defaultStyles.border,
    backgroundColor && `bg-${backgroundColor}`,
    textColor ? `text-${textColor}` : defaultStyles.text,                // Use custom or default text color
    borderColor ? `border-${borderColor}` : defaultStyles.border,        // Use custom or default border color
    hover ? `hover:${hover}` : defaultStyles.hover,                      // Use custom or default hover
    focus ? `focus:${focus}` : defaultStyles.focus,                      // Use custom or default focus
    active && `active:${active}`,                             
    disabledStyle && disabled && disabledStyle,
    className // الكلاس المخصص الممرر من المستخدم
  );

  const ButtonContent = () => (
    <>
      {iconBefore && <span className="flex items-center">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="flex items-center">{iconAfter}</span>}
    </>
  );
    // Render based on tag prop or href
    if (tag) {
      const CustomTag = tag;
      return (
        <CustomTag href={href} className={buttonStyles} style={style} {...props}>
          <ButtonContent />
        </CustomTag>
      );
    }
  
    if (href) {
      return  (
        <a
          target={rel && '_blank'}
          rel={rel && 'noopener noreferrer'} 
          href={href}
          className={buttonStyles}
          style={style} {...props}
        >
          <ButtonContent />
        </a>
      );
    }
    return (
      <button
        className={buttonStyles}
        style={style}
        disabled={disabled}
        {...props}
      >
        <ButtonContent />
      </button>
    );
  
  }
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  textColor: PropTypes.string, // لون النص المخصص
  backgroundColor: PropTypes.string, // لون الخلفية المخصص
  borderColor: PropTypes.string, // لون الحدود المخصص
  hover: PropTypes.string, // تأثير hover مخصص
  focus: PropTypes.string, // تأثير focus مخصص
  active: PropTypes.string, // تأثير active مخصص
  disabledStyle: PropTypes.string, // تأثير disabled مخصص
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  style: PropTypes.object, // الأنماط المدمجة
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
