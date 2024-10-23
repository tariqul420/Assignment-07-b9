import PropTypes from 'prop-types'

const CurrentCook = ({recipe}) => {
    return (
        <tr className='hover'>
        <th>1</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time} Min</td>
        <td>{recipe.calories} Calories</td>
    </tr>
    );
};

CurrentCook.propTypes = {
    recipe: PropTypes.object.isRequired,
}
export default CurrentCook;