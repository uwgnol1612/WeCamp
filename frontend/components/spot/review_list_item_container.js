import { connect } from 'react-redux'
import Review from './review_list_item'


const mapStateToProps = ({ entities: { users } }, { review }) => {
    return {
        author: users[review.user_id]
    };
};

export default connect(mapStateToProps, null)(Review);