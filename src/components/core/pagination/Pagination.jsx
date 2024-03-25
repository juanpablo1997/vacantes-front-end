import Button from "../buttons/Button";
import css from "../pagination/Pagination.module.css";

const Pagination = ({ currentPage }) => {
  const handlePrevious = () => {
    //onPageChange(currentPage - 1);
    console.log(`Anterior = ${currentPage - 1}`)
  };

  const handleNext = () => {
    //onPageChange(currentPage + 1);
    console.log(`Siguiente = ${currentPage + 1}`)
    console.log(currentPage)
  };

  return (
    <div className={css.pagination}>
      <Button
        buttonType="btnPrimary"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <Button buttonType="btnPrimary" onClick={handleNext}>
        siguiente
      </Button>
    </div>
  );
};

export default Pagination;
