import s from './DiscountReminder.module.scss'

const DiscountReminder = ({handleClose}) => {

    const handleClickClose = () => {
        handleClose();
    }

    return (
        <div className={s.discountWrapper}>
            <p  className={s.discountText}>Знижка -10% на перше замовлення тут</p>
            <button className={s.btnClose} onClick={handleClickClose}>
                <svg width="24" height="24">
                    <use href="/src/shared/icons/sprite.svg#icon-close-cross"></use>
                </svg>
            </button>
        </div>
    );
}

export default DiscountReminder;