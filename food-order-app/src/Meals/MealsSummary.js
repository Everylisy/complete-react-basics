import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 배달해 드립니다</h2>
      <p>
        주문 가능한 다양한 메뉴 중, 가장 좋아하는 메뉴를 선택하세요.
      </p>
      <p>
        저희의 모든 메뉴는 숙련된 셰프들이, 고품질의 재료로 요리합니다.
      </p>
    </section>
  );
};

export default MealsSummary;
