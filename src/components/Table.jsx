import PropTypes from 'prop-types'
import WantCook from './WantCook';

const Table = ({ recipe, handelPreparing }) => {
    return (
        <div className='p-6 rounded-2xl' style={{ border: '1px solid rgba(40, 40, 40, 0.2)' }}>
            <h1 className="text-color-secondary text-2xl font-semibold text-center">Want to cook: {recipe.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipe.map(res=> <WantCook 
                                key={res.recipe_id} 
                                recipe={res}
                                handelPreparing={handelPreparing}></WantCook>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Table.propTypes = {
    recipe: PropTypes.object.isRequired,
    handelPreparing: PropTypes.func.isRequired,
}
export default Table;