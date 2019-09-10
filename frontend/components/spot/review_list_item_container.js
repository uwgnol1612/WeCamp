import { connect } from 'react-redux'
import Review from './review_list_item'


const mapStateToProps = (state, props) => {
    // debugger
    return {
        author: state.entities.users[props.review.user_id]
    };
};

export default connect(mapStateToProps, null)(Review);