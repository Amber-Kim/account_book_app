import MainContainer from "../components/Containers/MainContainer";
import Searchbar from "../components/homeComponents/Searchbar";
import { Title } from "../components/Titles/Titles";
import CategoryCard from "../components/Cards/CategoryCard";
import TransactionCard from "../components/Cards/TransactionCard";
import styles from "../styles/homeComponents/Home.module.scss";
import HomeProfile from "../components/homeComponents/HomeProfile";

import { DateTime } from "luxon";
import { useTransactionsGet } from "../queries/transaction";
import { useCategoriesSum } from "../queries/category";
import { useEffect } from "react";


const Home = () => {
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        {/* SearchBar */}
        <div className={styles.searchbar}>
          <Searchbar />
        </div>

        {/* Categories */}
        <div className={styles.categories}>
          <Title>Categories Last 30 Days</Title>
          <div className={styles.content}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className={styles.transactions}>
          <Title>Latest Transactions</Title>
          <div className={styles.content}>
            {/* LATEST TRANSACTIONS */}
            {transactions &&
              transactions.data.map((transaction, index) => {
                return (
                  <TransactionCard
                    key={index}
                    category={transaction.category.name}
                    date={DateTime.fromISO(transaction.date).toISODate()}
                    money={transaction.money.toFixed(2)}
                    description={transaction.info}
                    title={transaction.title}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;