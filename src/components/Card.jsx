import PropTypes from 'prop-types';

const Card = ({ card, handelCookBtn }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = card
    return (
        <div className='p-6 rounded-2xl' style={{ border: '1px solid rgba(40, 40, 40, 0.2)' }}>
            <img className='rounded-2xl w-full h-52' src={recipe_image} />
            <h2 className='mt-6 font-black text-xl text-color-primary'>{recipe_name}</h2>
            <p className='mt-4 text-color-finely font-bold'>{short_description}</p>
            <hr className='my-4' />
            <h3 className='text-color-secondary text-xl font-bold'>Ingredients: 6</h3>
            <ul className='list-disc ml-8 text-color-finely  font-semibold'>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
            </ul>
            <hr className='my-4' />
            <div className='flex gap-6'>
                <p className='text-color-finely  font-semibold'><i className="fa-regular fa-clock"></i> {preparing_time}</p>
                <p className='text-color-finely  font-semibold'><i className="fa-solid fa-fire-flame-curved"></i> {calories}</p>
            </div>
            <button onClick={() => handelCookBtn(card)} className='btn mt-7 rounded-full bg-btn-primary font-bold text-[18px]'>Want to Cook</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handelCookBtn: PropTypes.func.isRequired,
}

export default Card;