import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'btn--primary',
  accent: 'btn--accent',
  ghost: 'btn--ghost',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  download,
  className = '',
  ...rest
}) {
  const classes = `btn ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={classes} {...rest}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps}>
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
          {...rest}
        >
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
