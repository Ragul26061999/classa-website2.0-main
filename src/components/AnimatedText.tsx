'use client';

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useMemo, useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: 'chars' | 'words';
  textAlign?: 'left' | 'center' | 'right';
  staggerDelay?: number;
  animationType?: 'slideUp' | 'fadeIn' | 'scale' | 'morphing' | 'liquid' | 'wave' | 'revealUp' | 'revealWave';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1.2,
  splitType = 'words',
  textAlign = 'center',
  staggerDelay = 0.08,
  animationType = 'morphing'
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const splitText = useMemo(() => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => ({
        char: char === ' ' ? '\u00A0' : char,
        index
      }));
    } else {
      return text.split(' ').map((word, index) => ({
        char: word,
        index
      }));
    }
  }, [text, splitType]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: (animationType === 'wave' || animationType === 'revealWave') ? 0 : staggerDelay,
        delayChildren: delay
      }
    }
  };

  const getItemVariants = (): Variants => {
    switch (animationType) {
      case 'revealWave':
        return {
          hidden: {
            opacity: 0,
            y: '1.2em'
          },
          visible: (i: number = 0) => ({
            opacity: 1,
            // Two-step slide: from masked below to baseline
            y: ['1.2em', '0em'],
            transition: {
              type: 'tween',
              duration,
              ease: [0.25, 0.8, 0.3, 1],
              delay: delay + i * staggerDelay
            }
          })
        };
      case 'revealUp':
        return {
          hidden: {
            opacity: 0,
            y: '1.1em'
          },
          visible: {
            opacity: 1,
            y: '0em',
            transition: {
              type: 'tween',
              duration,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        };
      case 'wave':
        return {
          hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(6px)'
          },
          visible: (i: number = 0) => ({
            opacity: 1,
            // Enter with a quick sine-like bob and settle to baseline
            y: [8, -10, 5, 0],
            filter: 'blur(0px)',
            transition: {
              opacity: { duration: 0.3, ease: 'easeOut', delay: delay + i * 0.02 },
              y: {
                duration,
                ease: 'easeInOut',
                type: 'tween',
                times: [0, 0.35, 0.7, 1],
                repeat: 0,
                delay: i * staggerDelay
              }
            }
          })
        };
      case 'liquid':
        return {
          hidden: {
            opacity: 0,
            y: 100,
            scaleY: 0.3,
            skewX: -15,
            filter: 'blur(8px)'
          },
          visible: {
            opacity: 1,
            y: 0,
            scaleY: 1,
            skewX: 0,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 60,
              damping: 15,
              mass: 1.2
            }
          }
        };
      case 'morphing':
        return {
          hidden: {
            opacity: 0,
            y: 80,
            rotateX: -90,
            scale: 0.3,
            filter: 'blur(10px)',
            transformOrigin: 'center bottom'
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 80,
              damping: 20,
              mass: 1,
              bounce: 0.3
            }
          }
        };
      case 'fadeIn':
        return {
          hidden: { opacity: 0, filter: 'blur(4px)' },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              duration: duration * 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.5, filter: 'blur(6px)' },
          visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 15
            }
          }
        };
      default: // slideUp
        return {
          hidden: {
            opacity: 0,
            y: 60,
            rotateX: -20,
            filter: 'blur(4px)'
          },
          visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 12
            }
          }
        };
    }
  };

  const itemVariants = getItemVariants();
  const wrapperVariants: Variants = {
    hidden: {},
    visible: { transition: { when: 'beforeChildren' } }
  };

  return (
    <motion.div
      ref={ref}
      className={`animated-text ${className}`}
      style={{
        textAlign,
        perspective: '1000px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start'
      }}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {splitText.map(({ char, index }) => (
        (animationType === 'revealUp' || animationType === 'revealWave') ? (
          <motion.span
            key={index}
            variants={wrapperVariants}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              marginRight: splitType === 'words' ? '0.25em' : '0'
            }}
          >
            <motion.span
              variants={itemVariants}
              custom={index}
              style={{
                display: 'inline-block',
                transformOrigin: 'center bottom',
                transformStyle: 'preserve-3d'
              }}
            >
              {char}
            </motion.span>
          </motion.span>
        ) : (
          <motion.span
            key={index}
            variants={itemVariants}
            custom={index}
            style={{
              display: 'inline-block',
              marginRight: splitType === 'words' ? '0.25em' : '0',
              transformOrigin: 'center bottom',
              transformStyle: 'preserve-3d'
            }}
          >
            {char}
          </motion.span>
        )
      ))}
    </motion.div>
  );
};

export default AnimatedText;