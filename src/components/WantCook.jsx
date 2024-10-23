import PropTypes from 'prop-types'

const WantCook = ({ recipe, handelPreparing }) => {
    return (
        <tr className='hover'>
            <th>1</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time} Min</td>
            <td>{recipe.calories} Calories</td>
            <td><button onClick={() => handelPreparing(recipe)} className='rounded-full bg-btn-primary py-1 px-3'>Preparing</button></td>
        </tr>
    );
};

WantCook.propTypes = {
    recipe: PropTypes.object.isRequired,
    handelPreparing: PropTypes.func.isRequired,
}
export default WantCook;