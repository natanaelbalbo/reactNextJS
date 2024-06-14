import React, { ReactNode } from 'react';
import styles from './CardSection.module.css';

interface CardSectionProps {
  title: string;
  children: ReactNode;
}

const CardSection: React.FC<CardSectionProps> = ({ title, children }) => {
  return (
    <section className={styles.cardSection}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default CardSection;
