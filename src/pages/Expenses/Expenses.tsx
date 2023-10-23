import React from 'react';
import styles from './Expense.module.scss';
import personOne from '../../assets/png/person1.png';
import personTwo from '../../assets/png/person2.png';
import personThree from '../../assets/png/person3.png';
import addIcon from '../../assets/png/addIcon.png';
import optionIcon from '../../assets/png/menuIcon.png';
import cartIcon from '../../assets/svg/cartIcon.svg';
const Expenses = () => {
  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expensesActions}>
                <div className={styles.personImages}>
                  <img
                    className={styles.personOne}
                    src={personOne}
                    alt="person one"
                  />
                  <img
                    className={styles.personTwo}
                    src={personTwo}
                    alt="person two"
                  />
                  <img
                    className={styles.personThree}
                    src={personThree}
                    alt="person three"
                  />
                </div>
                <button>
                  <img className={styles.addIcon} src={addIcon} alt="add" />
                </button>
              </div>
            </div>

            <p className={styles.dateRange}>01 - 25 March, 2023</p>
            <div className="chart"></div>
            <div className={styles.expensesOverviewHeader}>
              <p className={styles.expensesOverviewTitle}>Today</p>
              <button>
                <img src={optionIcon} alt="options" />
              </button>
            </div>

            <ul>
              <li className={styles.expenseItem}>
                <div className={styles.expenseItemLeft}>
                  <div
                    style={{ backgroundColor: 'blue' }}
                    className={styles.expenseItemDiv}
                  >
                    <img src={cartIcon} alt="cart" />
                  </div>
                  <div className={styles.expenseItemDetails}>
                    <p className={styles.expenseItemTitle}>Grocery</p>
                    <p className={styles.expenseItemTime}>
                      5 : 12 pm • Belanjs di pasar
                    </p>
                  </div>
                </div>
                <p className={styles.expenseItemPrice}>-326.800</p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default Expenses;
